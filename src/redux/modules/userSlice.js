import { createSlice } from "@reduxjs/toolkit";
import { kakaoLogin, signIn } from "apis/userApi";

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

const badgeIcon = [
  { badgeId: 0, badge: "👤" },
  { badgeId: 1, badge: "💃" },
  { badgeId: 2, badge: "😎" },
  { badgeId: 3, badge: "🧑‍🤝‍🧑 " },
  { badgeId: 4, badge: "🙌 " },
  { badgeId: 5, badge: "🎬" },
  { badgeId: 6, badge: "👼" },
  { badgeId: 7, badge: "😈" },
  { badgeId: 8, badge: "🏆" },
];

export const kakaoLoginDB = (payload) => {
  return async function () {
    await kakaoLogin(payload)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          console.log(response);
          function findBadge(element) {
            if (element.badgeId === response.data.data.mainBadge) {
              return element.badge;
            }
          }
          const { badge } = badgeIcon.filter(findBadge)[0];
          return (
            localStorage.setItem("accessToken", response.headers["access-token"]),
            localStorage.setItem("refreshToken", response.headers["refresh-token"]),
            localStorage.setItem("nickname", response.data.data.username),
            localStorage.setItem("badgeIcon", badge),
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
