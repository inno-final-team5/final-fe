import React, { useRef } from "react";
import logo from "images/Logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserDB } from "../../redux/modules/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const REST_API_KEY = "3ad9053f0b013a449d0f5d06dfb86796";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const memberId_ref = useRef(null);
  const password_ref = useRef(null);

  const loginHandler = async () => {
    if (memberId_ref.current.value == "" || password_ref.current.value == "") {
      window.alert("아이디와 비밀번호를 모두 입력하세요");
    } else {
      await dispatch(
        loginUserDB({
          email: memberId_ref.current.value,
          password: password_ref.current.value,
        })
      );
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

          <div className="xl:w-1/2 lg:w-full md:w-full sm:w-full w-full mx-auto ">
            <div className="flex flex-wrap -m-2 mx-auto place-content-center ">
              <div className="p-4 w-2/3 md:w-2/3">
                <div className="relative  ">
                  <label className="leading-7 text-sm text-mCream">
                    아이디
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ref={memberId_ref}
                  />
                </div>
              </div>
              <div className="p-4 w-2/3 md:w-2/3">
                <div className="relative">
                  <label className="leading-7 text-sm text-mCream">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    ref={password_ref}
                    name="password"
                    autoComplete="on"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={loginHandler}
                  className="flex mx-auto rounded-lg bg-mYellow border-0 py-2 px-10 focus:outline-none hover:bg-mCream  text-lg"
                >
                  로그인
                </button>
              </div>
              <div className="p-10 w-full">
                <a href={KAKAO_AUTH_URL}>
                  <button className="flex mx-auto rounded-lg bg-[#F1BF45] border-0 py-2 px-24 focus:outline-none hover:bg-mCream  text-lg">
                    카카오로그인
                  </button>
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
