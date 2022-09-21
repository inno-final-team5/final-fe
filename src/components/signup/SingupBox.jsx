import React from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
// import InputBox from "../common/InputBox";
import { Link } from "react-router-dom";

// import SignupForm from "components/signup/SignupForm";
import instance from "shared/api";

const SingupBox = () => {
  // const [email, setEmail] = useState("");
  // const [nickname, setNickname] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registerError, setRegisterError] = useState("");

  const emailCheck = () => {
    if (signupData.email.length === 0) return;
  };

  const nicknameCheck = () => {
    if (signupData.nickname.length === 0) return;
  };

  // const onChangeEmail = (e) => {
  //   e.preventDefault();
  //   setEmail(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   e.preventDefault();
  //   setNickname(e.target.value);
  // };

  // const onChangePassword = (e) => {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  // };

  // const onChangePasswordConfirm = (e) => {
  //   e.preventDefault();
  //   setPasswordConfirm(e.target.value);
  // };

  /** 설명: 회원가입 로직  */
  const register = async (email, nickname, password) => {
    console.log(email, nickname, password);

    try {
      const user = { email, nickname, password };

      const res = await instance.post(`api/member/login`, user);
      console.log(res);
    } catch (error) {
      console.log(error);
      setRegisterError(error.message);
    }
  };
  const [signupData, setSignupData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  const changeInput = (e) => {
    const { id, value } = e.target;
    setSignupData({ ...signupData, [id]: value });
  };
  console.log(signupData);
  return (
    // <div className="mx-auto w-fit flex">
    //   <SignupForm
    //     signupData={signupData}
    //     changeInput={changeInput}
    //     email={email}
    //     setEmail={onChangeEmail}
    //     emailCheck={emailCheck}
    //     nickname={nickname}
    //     setNickname={onChangeNickname}
    //     nicknameCheck={nicknameCheck}
    //     password={password}
    //     setPassword={onChangePassword}
    //     passwordConfirm={passwordConfirm}
    //     setPasswordConfirm={onChangePasswordConfirm}
    //     register={register}
    //     registerError={registerError}
    //   />
    // </div>
    <LoginFormContainer>
      {/* 회원가입 폼 */}
      <form onSubmit={register}>
        <RegisterInputBox>
          <InputBox
            type="email"
            id="email"
            onChange={changeInput}
            placeholder="이메일을 입력하세요"
            required
          />

          <DoubleCheckButton onClick={emailCheck}>중복확인</DoubleCheckButton>
        </RegisterInputBox>

        <RegisterInputBox>
          <InputBox
            type="text"
            id="nickname"
            onChange={changeInput}
            placeholder="닉네임을 입력하세요"
            required
          />

          <DoubleCheckButton onClick={nicknameCheck}>
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
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
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
