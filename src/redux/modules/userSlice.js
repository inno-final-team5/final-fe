import { createSlice } from "@reduxjs/toolkit";
import { kakaoLogin, signIn } from "apis/userApi";

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const kakaoLoginDB = (payload) => {
  return async function () {
    await kakaoLogin(payload)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          console.log(response);
          // function findBadge(element) {
          //   if (element.badgeId === response.data.data.badgeId) {
          //     return element.badge;
          //   }
          // }
          // const { badge } = badgeIcon.filter(findBadge)[0];
          return (
            localStorage.setItem("accessToken", response.headers["access-token"]),
            localStorage.setItem("refreshToken", response.headers["refresh-token"]),
            localStorage.setItem("nickname", response.data.data.username),
            // localStorage.setItem("badgeIcon", badge),
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
