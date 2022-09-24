import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "shared/api";

const initialState = {
  isLoading: false,
  badges: [],
  error: null,
};

export const __getChallenges = createAsyncThunk(
  "challenges/getBadges",
  async (_, thunkAPI) => {
    try {
      //테스트용
      const { data } = await instance.get("/challenges");
      //서버용
      // const { data } = await instance.get("/api/badges");
      // console.log(data);

      //테스트용
      return thunkAPI.fulfillWithValue(data);
      //서버용
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const challengeSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {},
  extraReducers: {
    [__getChallenges.pending]: (state) => {
      state.isLoading = true;
    },
    [__getChallenges.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.badges = action.payload;
    },
    [__getChallenges.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default challengeSlice.reducer;
