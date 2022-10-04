import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};
//login
export const loginUserDB = (payload) => {
  return async function () {
    await api
      .post("/members/login", payload)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          const accessToken = response.headers.authorization.split("Bearer")[1];
          return (
            localStorage.setItem("nickname", response.data.data.nickname),
            localStorage.setItem(
              "refreshToken",
              response.headers["refresh-token"]
            ),
            localStorage.setItem("accessToken", accessToken),
            alert(`로그인 성공!`),
            (document.location.href = "/")
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const kakaoLoginDB = (payload) => {
  return async function () {
    await api
      .post(`/oauth/kakao?code=${payload}`)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          const accessToken = response.headers["access-token"].split(" ")[1];
          return (
            localStorage.setItem("accessToken", accessToken),
            localStorage.setItem(
              "refreshToken",
              response.headers["refresh-token"]
            ),
            localStorage.setItem("nickname", response.data.data.username),
            alert(`카카오 로그인 성공!`),
            (document.location.href = "/")
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {},
});
export default userSlice.reducer;
