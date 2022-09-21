import React from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
// import InputBox from "../common/InputBox";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { __signup, __checkEmail } from "../../redux/modules/SignupSlice";

import {
  checkEmail,
  checkUserName,
  checkPassword,
} from "../../utils/validation";
import { api } from "../../shared/api";
// import SignupForm from "components/signup/SignupForm";

const SingupBox = () => {
  // const [registerError, setRegisterError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isCheckName = useSelector((state) => state.signup.isCheckName);
  const [signupData, setSignupData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  // const [isValidEmail, setIsValidEmail] = useState(false);

  const changeInput = (e) => {
    const { id, value } = e.target;
    setSignupData({ ...signupData, [id]: value });
  };

  const emailCheck = () => {
    // try {
    //   const checkEmail = dispatch(__checkEmail(signupData.email));
    //   if (checkEmail.payload.isCheckEmail) alert("사용 가능한 이메일입니다.");
    // } catch (error) {
    //   console.log(error);
    //   alert("이미 사용 중인 이메일입니다.");
    // }
    // try {
    //   await api.post(`/check`, email);
    //   console.log(email);
    //   alert("사용가능합니다");
    // } catch (error) {
    //   console.log(error);
    // }
    // if (signupData.email.length === 0) {
    //   alert("이메일을 입력해주세요");
    // }
  };
  // const emailCheck = async (e) => {
  //   e.preventDefault();
  //   const checkEmail = dispatch(__checkEmail(signupData.email));
  //   if (checkEmail.payload) {
  //     alert("사용 가능한 이메일입니다.");
  //   } else if (checkEmail.payload.error) {
  //     alert("사용 중인 이메일입니다.");
  //   }
  // };

  const nicknameCheck = () => {
    if (signupData.nickname.length === 0) return;
  };

  const passwordConfirmCheck =
    signupData.passwordConfirm == signupData.password;

  // /** 설명: 회원가입 로직  */
  // const register = async (email, nickname, password) => {
  //   console.log(email, nickname, password);

  //   try {
  //     const user = { email, nickname, password };

  //     const res = await instance.post(`api/member/login`, user);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //     setRegisterError(error.message);
  //   }
  // };

  const onSumitSignup = async (e) => {
    e.preventDefault();
    if (!passwordConfirmCheck) {
      alert("입력하신 비밀번호가 다릅니다.");
      return;
    } else if (!checkEmail(signupData.email)) {
      alert("이메일 형식에 맞게 써주세요");
      return;
    } else if (!checkUserName(signupData.nickname)) {
      alert("닉네임 형식에 맞게 써주세요");
      return;
    } else if (!checkPassword(signupData.password)) {
      alert("비밀번호 형식에 맞게 써주세요");
      return;
    }

    const checkState = await dispatch(__signup(signupData));
    if (checkState.payload) {
      navigate("/login");
    } else {
      console.log(checkState.payload.error);
    }
  };

  //   try {
  //     await api.post(`/members/signup`, signupData);
  //     alert("회원가입이 완료되었습니다.");
  //   } catch (error) {
  //     console.log(error);
  //     setRegisterError(error.message);
  //   }
  // };

  return (
    <LoginFormContainer>
      {/* 회원가입 폼 */}
      <form onSubmit={onSumitSignup}>
        <RegisterInputBox>
          <InputBox
            type="email"
            id="email"
            onChange={changeInput}
            placeholder="이메일을 입력하세요"
            required
          />

          <DoubleCheckButton type="button" onClick={emailCheck}>
            중복확인
          </DoubleCheckButton>
        </RegisterInputBox>

        <RegisterInputBox>
          <InputBox
            type="text"
            id="nickname"
            onChange={changeInput}
            placeholder="닉네임을 입력하세요"
            required
          />

          <DoubleCheckButton type="button" onClick={nicknameCheck}>
            중복확인
          </DoubleCheckButton>
        </RegisterInputBox>
        <InputBox
          type="password"
          id="password"
          onChange={changeInput}
          placeholder="비밀번호를 입력하세요"
          required
        />

        <InputBox
          type="password"
          id="passwordConfirm"
          onChange={changeInput}
          placeholder="비밀번호를 한 번 더 입력하세요"
          required
        />

        <RegisterButton
          type="submit"
          // data-mdb-ripple="true"
          // data-mdb-ripple-color="light"
        >
          회원가입
        </RegisterButton>

        <LoginBox>
          이미 계정이 있으신가요?
          <Link to="/login">
            <LoginLink>로그인</LoginLink>
          </Link>
        </LoginBox>
      </form>
    </LoginFormContainer>
  );
};

const LoginFormContainer = tw.div`
  rounded-lg p-8 bg-mWhite shadow-lg mt-8
`;

const RegisterInputBox = tw.div`
    flex justify-between items-start mb - 6
`;

const DoubleCheckButton = tw.button`
  bg-mCream text-mBlack font-medium text-sm  uppercase rounded shadow-md hover:bg-mYellow hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out px-2 py-2
`;

const LoginBox = tw.div`
  my-6 justify-center flex
`;

const LoginLink = tw.p`
  ml-4 text-mBlack underline
`;
const RegisterButton = tw.button`
  bg-mCream  inline-block px-7 py-3 text-mBlack font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-mYellow hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full
`;

const InputBox = tw.input`

    form-control
    block
    w-full
    px-4
    py-2
    text-xl
    font-normal
    text-gray-700
    bg-white
    bg-clip-padding
    border
    border-solid
    border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700
    focus:bg-white
    focus:border-mSecondaryColor
    focus:outline-none
`;
export default SingupBox;
