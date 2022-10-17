import React, { useRef } from "react";
import logo from "images/Logo.png";
import kakao_login from "images/kakao_login.png";
import { Link } from "react-router-dom";
import { signIn } from "apis/userApi";
import { useMutation } from "react-query";
import { Toast } from "components/common/Toast";
import tw from "tailwind-styled-components/";

const LoginForm = () => {
  const REDIRECT_URI = "https://www.moviecritic.site/kakaoLogin";
  //const REST_API_KEY = process.env.REACT_APP_KAKAO_ID
  const REST_API_KEY = "3ad9053f0b013a449d0f5d06dfb86796";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const memberId_ref = useRef(null);
  const password_ref = useRef(null);

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

  /**로그인 */
  const loginButtonHandler = () => {
    const data = {
      email: memberId_ref.current.value,
      password: password_ref.current.value,
    };
    if (!password_ref.current.value || !memberId_ref.current.value) {
      Toast.fire({
        icon: "warning",
        title: "이메일과 비밀번호를 모두 입력해주세요.",
      });
    } else {
      return loginUser.mutate(data);
    }
  };

  const loginUser = useMutation(signIn, {
    onSuccess: (data) => {
      if (data.data.error === "MEMBER_NOT_FOUND") {
        return Toast.fire({
          icon: "warning",
          title: "사용자를 찾을수 없습니다.",
        });
      } else if (data.data.error === "INVALID_MEMBER") {
        return Toast.fire({
          icon: "warning",
          title: "비밀번호를 다시한번 확인해주세요",
        });
      } else if (data.data.success === true) {
        function findBadge(element) {
          if (element.badgeId === data.data.data.badgeId) {
            return element.badge;
          }
        }
        const { badge } = badgeIcon.filter(findBadge)[0];
        return (
          localStorage.setItem("nickname", data.data.data.nickname),
          localStorage.setItem("refreshToken", data.headers["refresh-token"]),
          localStorage.setItem("accessToken", data.headers.authorization),
          localStorage.setItem("badgeIcon", badge),
          (document.location.href = "/")
        );
      }
    },
    onError: (error) => {
      console.log(error);
      Toast.fire({
        icon: "warning",
        title: error,
      });
    },
  });

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      document.getElementById("login").click();
    }
  };
  return (
    <>
      <LoginPageSpace>
        <Link to={"/"}>
          <LogoSpace>
            <LogoImg src={logo} alt="logo"></LogoImg>
          </LogoSpace>
        </Link>
        <InputSpace>
          <InputDiv>
            <InputLabel>이메일</InputLabel>
            <LoginInput type="text" ref={memberId_ref} required />
          </InputDiv>
          <InputDiv>
            <InputLabel>비밀번호</InputLabel>
            <LoginInput type="password" ref={password_ref} autoComplete="on" onKeyPress={onKeyPress} required />
          </InputDiv>
          <ButtonSpace>
            <LoginButton id="login" onClick={loginButtonHandler}>
              로그인
            </LoginButton>
          </ButtonSpace>
          <KakaoSpace>
            <a href={KAKAO_AUTH_URL}>
              <img src={kakao_login} alt="카카오로그인" />
            </a>
          </KakaoSpace>
          <SignupSpace>
            계정이 없으신가요? &emsp;
            <Link to={"/signup"}>
              <SignupButton>회원가입</SignupButton>
            </Link>
          </SignupSpace>
        </InputSpace>
      </LoginPageSpace>
    </>
  );
};

export default LoginForm;

const LoginPageSpace = tw.div`
text-gray-600 body-font relative container px-8 mt-20 mx-auto sm:w-8/12
`;
const LoginInput = tw.input`
w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
`;
const LogoSpace = tw.div`
flex flex-col text-center w-full mb-2
`;
const LogoImg = tw.img`
mx-auto w-38 h-40
`;
const InputSpace = tw.div`
flex flex-wrap mx-auto place-content-center xl:w-1/2 lg:w-2/3 md:w-full sm:w-full w-full mx-auto mt-6
`;
const InputDiv = tw.div`
p-4 w-2/3 xl:w-3/4 md:w-2/3 relative
`;
const InputLabel = tw.label`
leading-7 text-sm text-mCream
`;
const ButtonSpace = tw.div`
p-2 w-full
`;
const LoginButton = tw.button`
flex mx-auto w-26 h-10 mt-4 2xl:h-12 text-base md:mt-6 xl:w-1/3 md:w-1/2 sm:w-1/2 place-content-center rounded-lg bg-mYellow border-0 py-3 lg:h-10 px-10 focus:outline-none hover:bg-mCream
`;
const KakaoSpace = tw.div`
pt-10 h-12 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-1/2 flex mx-auto mb-20
`;
const SignupSpace = tw.div`
p-2 w-full text-center text-mYellow
`;
const SignupButton = tw.button`
text-gray-600 mx-auto rounded-lg bg-mCream border-0 py-1 px-8 text-base focus:outline-none hover:bg-mYellow text-lg
`;
