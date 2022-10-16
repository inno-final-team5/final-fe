import React, { useEffect } from "react";
import { kakaoLogin } from "apis/userApi";
import Spinner from "../components/common/Spinner";
import { useMutation } from "react-query";
import { Toast } from "components/common/Toast";

const KakaoRedirect = () => {
  const accessToken = localStorage.getItem("accessToken");

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  const kakaoLoginDB = useMutation(kakaoLogin, {
    onSuccess: (data) => {
      console.log(data);
      return (
        localStorage.setItem("nickname", data.data.data.nickname),
        localStorage.setItem("refreshToken", data.headers["refresh-token"]),
        localStorage.setItem("accessToken", data.headers.authorization)
        // localStorage.setItem("badgeIcon", badge),
        // (document.location.href = "/")
      );
    },
    onError: (error) => {
      console.log(error);
      Toast.fire({
        icon: "warning",
        title: error,
      });
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
