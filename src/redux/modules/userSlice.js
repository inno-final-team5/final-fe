import { createSlice } from "@reduxjs/toolkit";
import { kakaoLogin, signIn } from "apis/userApi";
import { Toast } from "components/common/Toast";

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

//login
export const loginUserDB = (payload) => {
  return async function () {
    await signIn(payload)
      .then((response) => {
        if (response.data.success === false) {
          return Toast.fire({
            icon: "warning",
            title: "이메일과 비밀번호를 다시 확인해주세요.",
          });
        } else {
          function findBadge(element) {
            if (element.badgeId === response.data.data.badgeId) {
              return element.badge;
            }
          }
          const { badge } = badgeIcon.filter(findBadge)[0];
          return (
            localStorage.setItem("nickname", response.data.data.nickname),
            localStorage.setItem(
              "refreshToken",
              response.headers["refresh-token"]
            ),
            localStorage.setItem("accessToken", response.headers.authorization),
            localStorage.setItem("badgeIcon", badge),
            (document.location.href = "/")
          );
        }
      })
      .catch((response) => {
        Toast.fire({ icon: "warning", title: "사용자를 찾을수 없습니다." });
        console.log(response);
      });
  };
};

export const kakaoLoginDB = (payload) => {
  return async function () {
    await kakaoLogin(payload)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          console.log(response);
          function findBadge(element) {
            if (element.badgeId === response.data.data.badgeId) {
              return element.badge;
            }
          }
          const { badge } = badgeIcon.filter(findBadge)[0];
          return (
            localStorage.setItem(
              "accessToken",
              response.headers["access-token"]
            ),
            localStorage.setItem(
              "refreshToken",
              response.headers["refresh-token"]
            ),
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
