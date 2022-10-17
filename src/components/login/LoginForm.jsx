import React, { useRef } from "react";
import logo from "images/Logo.png";
import kakao_login from "images/kakao_login.png";
import { Link } from "react-router-dom";
import { signIn } from "apis/userApi";
import { useMutation } from "react-query";
import { Toast } from "components/common/Toast";

const LoginForm = () => {
  const REDIRECT_URI = "https://www.moviecritic.site/kakaoLogin";
  //const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
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
    if (e.key == "Enter") {
      document.getElementById("login").click();
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 mt-20 mx-auto sm:w-8/12 ">
          <Link to={"/"}>
            <div className="flex flex-col text-center w-full mb-2">
              <img className="mx-auto w-38 h-40" src={logo} alt="logo"></img>
            </div>
          </Link>

          <div className="xl:w-1/2 lg:w-2/3 md:w-full sm:w-full w-full mx-auto mt-10">
            <div className="flex flex-wrap -m-2 mx-auto place-content-center ">
              <div className="p-4 w-2/3 xl:w-3/4 md:w-2/3">
                <div className="relative  ">
                  <label className="leading-7 text-sm text-mCream">이메일</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ref={memberId_ref}
                    required
                  />
                </div>
              </div>
              <div className="p-4 w-2/3 xl:w-3/4 md:w-2/3">
                <div className="relative">
                  <label className="leading-7 text-sm text-mCream">비밀번호</label>
                  <input
                    type="password"
                    ref={password_ref}
                    id="password"
                    name="password"
                    autoComplete="on"
                    onKeyPress={onKeyPress}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  id="login"
                  onClick={() => {
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
                  }}
                  className="flex mx-auto w-26 h-10 mt-4 2xl:h-12 text-base md:mt-6 xl:w-1/3 md:w-1/2 sm:w-1/2 place-content-center rounded-lg bg-mYellow border-0 py-3 lg:h-10 px-10 focus:outline-none hover:bg-mCream"
                >
                  로그인
                </button>
              </div>
              {/* <div className="pt-10 pb-8 w-full">
                <a href={KAKAO_AUTH_URL}>
                  <img src={kakao_login} alt="카카오로그인" className="h-11 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-1/2 flex mx-auto"></img>
                </a>
              </div> */}
              <div className="p-2 w-full text-center ">
                <span className="text-mCream">
                  계정이 없으신가요? &emsp;
                  <Link to={"/signup"}>
                    <button className="text-gray-600 mx-auto rounded-lg bg-mCream border-0 py-1 px-8 text-base focus:outline-none hover:bg-mGray text-lg">
                      회원가입
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
