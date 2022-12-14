import React, { useEffect } from "react";
import { kakaoLogin } from "apis/userApi";
import Spinner from "../components/common/Spinner";
import { useMutation } from "react-query";

const KakaoRedirect = () => {
  const accessToken = localStorage.getItem("accessToken");

  // μΈκ°μ½λ
  let code = new URL(window.location.href).searchParams.get("code");

  const badgeIcon = [
    { badgeId: 0, badge: "π€" },
    { badgeId: 1, badge: "π" },
    { badgeId: 2, badge: "π" },
    { badgeId: 3, badge: "π§βπ€βπ§ " },
    { badgeId: 4, badge: "π " },
    { badgeId: 5, badge: "π¬" },
    { badgeId: 6, badge: "πΌ" },
    { badgeId: 7, badge: "π" },
    { badgeId: 8, badge: "π" },
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
