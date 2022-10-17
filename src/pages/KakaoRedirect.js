import React, { useEffect } from "react";
import { kakaoLogin } from "apis/userApi";
import Spinner from "../components/common/Spinner";
import { useMutation } from "react-query";
import { Toast } from "components/common/Toast";
import { useDispatch } from "react-redux";
import { kakaoLoginDB } from "../redux/modules/userSlice";

const KakaoRedirect = () => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  // const kakaoLoginDB = useMutation(kakaoLogin, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //     return (
  //       localStorage.setItem("nickname", data.data.data.nickname),
  //       localStorage.setItem("refreshToken", data.headers["refresh-token"]),
  //       localStorage.setItem("accessToken", data.headers.authorization)
  //       // localStorage.setItem("badgeIcon", badge),
  //       // (document.location.href = "/")
  //     );
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     Toast.fire({
  //       icon: "warning",
  //       title: error,
  //     });
  //   },
  // });

  useEffect(() => {
    dispatch(kakaoLoginDB(code));
    //kakaoLoginDB.mutate(code);
  }, [accessToken]);

  return (
    <>
      <Spinner />
    </>
  );
};

export default KakaoRedirect;
