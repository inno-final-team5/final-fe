import React, { useRef } from "react";
import logo from "images/Logo.png";
import kakao_login from "images/kakao_login.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserDB } from "../../redux/modules/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const REDIRECT_URI = "http://www.moviecritic.site/kakaoLogin";
  const REST_API_KEY = "3ad9053f0b013a449d0f5d06dfb86796";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const memberId_ref = useRef(null);
  const password_ref = useRef(null);

  const loginHandler = async () => {
    if (memberId_ref.current.value == "" || password_ref.current.value == "") {
      window.alert("아이디와 비밀번호를 모두 입력하세요");
      return;
    } else {
      await dispatch(
        loginUserDB({
          email: memberId_ref.current.value,
          password: password_ref.current.value,
        })
      );
    }
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      loginHandler();
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-20 mx-auto sm:w-8/12 ">
          <Link to={"/"}>
            <div className="flex flex-col text-center w-full mb-2">
              <img className="mx-auto w-38 h-40" src={logo} alt="logo"></img>
            </div>
          </Link>

          <div className="xl:w-1/2 lg:w-2/3 md:w-full sm:w-full w-full mx-auto ">
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
                  />
                </div>
              </div>
              <div className="p-4 w-2/3 xl:w-3/4 md:w-2/3">
                <div className="relative">
                  <label className="leading-7 text-sm text-mCream">비밀번호</label>
                  <input
                    type="password"
                    ref={password_ref}
                    name="password"
                    autoComplete="on"
                    onKeyPress={onKeyPress}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={loginHandler}
                  className="flex mx-auto md:mt-6 xl:w-1/3 md:w-1/3 sm:w-1/2 place-content-center rounded-lg bg-mYellow border-0 py-2 px-10 focus:outline-none hover:bg-mCream  text-lg"
                >
                  로그인
                </button>
              </div>
              <div className="pt-10 pb-10 w-full">
                <a href={KAKAO_AUTH_URL} className="">
                  <img src={kakao_login} alt="카카오로그인" className="2xl:w-1/2 xl:w-2/3 md:w-1/2 sm:w-1/2 flex mx-auto"></img>
                </a>
              </div>

              <div className="p-2 w-full pt-4 mt-2 text-center ">
                <span className="text-mCream">
                  계정이 없으신가요? &emsp;
                  <Link to={"/signup"}>
                    <button className="text-gray-600 mx-auto rounded-lg bg-mCream border-0 py-1 px-10 focus:outline-none hover:bg-mGray text-lg">
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
