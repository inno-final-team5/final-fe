import React from "react";
import { useState } from "react";

// import tw from "tailwind-styled-components/";

import SignupForm from "components/signup/SignupForm";
import instance from "shared/api";

const SingupBox = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registerError, setRegisterError] = useState("");

  const emailCheck = () => {
    if (email.length === 0) return;
  };

  const nicknameCheck = () => {
    if (nickname.length === 0) return;
  };

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onChangeNickname = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onChangePasswordConfirm = (e) => {
    e.preventDefault();
    setPasswordConfirm(e.target.value);
  };

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
  return (
    <div className="mx-auto w-fit flex">
      <SignupForm
        email={email}
        setEmail={onChangeEmail}
        emailCheck={emailCheck}
        nickname={nickname}
        setNickname={onChangeNickname}
        nicknameCheck={nicknameCheck}
        password={password}
        setPassword={onChangePassword}
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={onChangePasswordConfirm}
        register={register}
        registerError={registerError}
      />
    </div>
  );
};

export default SingupBox;
