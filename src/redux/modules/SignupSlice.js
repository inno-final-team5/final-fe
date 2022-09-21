import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// axios 기본 세팅
import { api } from "../../shared/api";

const initialState = {
  signup:{},
  isSuccess: false,
  isLoading:false,
  isCheckEmail: false,
    // checkNick: false,
  error: null,
}

// 회원가입
export const __signup = createAsyncThunk(
  "signup/SIGNUP",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.post("/members/signup", payload);
    // 회원가입 성공 시 alert & 상태 저장
    alert("회원가입이 완료됐습니다.");
    return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __checkEmail = createAsyncThunk(
  "signup/CHECKEMAIL",
   async (payload, thunkAPI) => {
    try {
      const { data } = await api.post(`/members/signup/email/`,payload);
    return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// slice
const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {

  },
  extraReducers: {
    [__signup.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__signup.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = true; 
      state.signup = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__signup.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },


     [__checkEmail.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__checkEmail.fulfilled]: (state,action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isCheckEmail = true; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__checkEmail.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // 회원가입 하기
  //     .addCase(__signup.fulfilled, (state, action) => {
  //       // 회원가입 상태 저장
  //       state.success = action.payload;
  //     })

  // },
});

export default SignupSlice.reducer;