import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kakaoLoginDB } from "../redux/modules/userSlice";
import Spinner from "../components/common/Spinner";

const KakaoRedirect = () => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    dispatch(kakaoLoginDB(code));
  }, [accessToken]);

  return (
    <>
      <Spinner />
    </>
  );
};

export default KakaoRedirect;
