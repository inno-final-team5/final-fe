import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "shared/api";

const initialState = {
  isLoading: false,
  favorites: [],
  error: null,
};

export const __getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get("/favorites");
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteFavorites = createAsyncThunk(
  "favorites/deleteFavorites",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/favorites/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: {
    [__getFavorites.pending]: (state) => {
      state.isLoading = true;
    },
    [__getFavorites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.favorites = action.payload;
    },
    [__getFavorites.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteFavorites.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteFavorites.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteFavorites.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default favoriteSlice.reducer;
