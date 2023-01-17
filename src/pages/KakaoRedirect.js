import React, { useEffect } from "react";
import { kakaoLogin } from "apis/userApi";
import Spinner from "../components/common/Spinner";
import { useMutation } from "react-query";

const KakaoRedirect = () => {
  const accessToken = localStorage.getItem("accessToken");

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

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

  const kakaoLoginDB = useMutation(kakaoLogin, {
    onSuccess: (data) => {
      function findBadge(element) {
        if (element.badgeId === data.data.data.badgeId) {
          return element.badge;
        }
      }
      const { badge } = badgeIcon.filter(findBadge)[0];
      return (
        localStorage.setItem("nickname", data.data.data.username),
        localStorage.setItem("refreshToken", data.headers["refresh-token"]),
        localStorage.setItem("accessToken", data.headers["access-token"]),
        localStorage.setItem("badgeIcon", badge),
        (document.location.href = "/")
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    kakaoLoginDB.mutate(code);
  }, [accessToken]);

  return (
    <>
      <Spinner />
    </>
  );
};

export default KakaoRedirect;
