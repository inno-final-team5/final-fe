import React from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
import { Toast } from "components/common/Toast";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**유효성을 위한 정규식 */
import { checkEmail, checkUserName, checkPassword } from "utils/validation";
import {
  emailDuplicateCheck,
  nicknameDuplicateCheck,
  signUp,
} from "apis/userApi";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  //중복확인 통과/불통과
  const [emailOk, setEmailOk] = useState(false);
  const [nicknameOk, setNicknameOk] = useState(false);

  /** input */
  const emailInput = (e) => {
    setEmail(e.target.value);
    setEmailOk(false);
  };
  const nicknameInput = (e) => {
    setNickname(e.target.value);
    setNicknameOk(false);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };
  const passwordConfirmInput = (e) => {
    setPasswordConfirm(e.target.value);
  };

  /** 이메일 중복확인 */
  const emailCheck = async (email) => {
    //빈칸확인
    if (email.length === 0) {
      Toast.fire({ icon: "warning", title: "이메일을 입력해주세요" });
      return;
    } else if (!checkEmail(email)) {
      Toast.fire({
        icon: "warning",
        title:
          "이메일 형식에 맞게 입력해주세요 ( 영문, 숫자와 특수기호(_),(-) 사용 ) ",
      });
      return;
    }

    //중복확인
    const response = await emailDuplicateCheck(email);
    if (response.data.success) {
      setEmailOk(true);
      Toast.fire({ icon: "success", title: "사용 가능한 이메일입니다." });
    } else {
      Toast.fire({ icon: "warning", title: "이미 사용 중인 이메일입니다." });
    }
  };

  /** 닉네임 중복확인 */
  const nicknameCheck = async (nickname) => {
    //빈칸확인
    if (nickname.length === 0) {
      Toast.fire({ icon: "warning", title: "닉네임을 입력해주세요." });
      return;
    } else if (!checkUserName(nickname)) {
      Toast.fire({
        icon: "warning",
        title: "닉네임은 영문, 숫자, 한글로 10자 이내로 입력해주세요.",
      });
      return;
    }

    //중복확인
    const response = await nicknameDuplicateCheck({ nickname });
    if (response.data.success) {
      setNicknameOk(true);
      Toast.fire({ icon: "success", title: "사용 가능한 닉네임입니다." });
    } else {
      Toast.fire({ icon: "warning", title: "이미 사용 중인 닉네임입니다." });
    }
  };

  /** 입력한 비밀번호 같은지 확인 */
  const passwordConfirmCheck = passwordConfirm === password;

  /** submit */
  const onSubmitSignup = async (e) => {
    e.preventDefault();

    /** 비밀번호 유효성 확인*/
    if (!passwordConfirmCheck) {
      Toast.fire({ icon: "warning", title: "입력하신 비밀번호가 다릅니다." });
      return;
    } else if (!checkPassword(password)) {
      Toast.fire({
        icon: "warning",
        title: "비밀번호는 영어 + 숫자 4 ~ 16자리로 입력해주세요.",
      });
      return;
    }

    /** 회원가입 로직  */
    try {
      //중복확인 버튼 클릭해야 회원가입 가능
      if (emailOk === false) {
        Toast.fire({ icon: "warning", title: "이메일 중복확인을 해주세요." });
        return;
      } else if (nicknameOk === false) {
        Toast.fire({ icon: "warning", title: "닉네임 중복확인을 해주세요." });
        return;
      }

      const res = await signUp({
        email,
        nickname,
        password,
      });

      //이미 있는 이메일,닉네임 사용시
      if (res.data.error === "DUPLICATE_EMAIL") {
        return Toast.fire({
          icon: "warning",
          title: "이메일 중복확인을 해주세요.",
        });
      } else if (res.data.error === "DUPLICATE_NICKNAME") {
        Toast.fire({ icon: "warning", title: "닉네임 중복확인을 해주세요." });
      } else {
        Toast.fire({ icon: "success", title: "회원가입이 완료되었습니다." });
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginFormContainer>
      {/* 회원가입 폼 */}
      <form onSubmit={onSubmitSignup}>
        <RegisterInputBox>
          <InputBox
            type="email"
            id="email"
            onChange={emailInput}
            placeholder="이메일을 입력하세요"
            required
          />

          <DoubleCheckButton type="button" onClick={() => emailCheck(email)}>
            중복확인
          </DoubleCheckButton>
        </RegisterInputBox>

        <RegisterInputBox>
          <InputBox
            type="text"
            id="nickname"
            onChange={nicknameInput}
            placeholder="닉네임 10자이내"
            required
          />

          <DoubleCheckButton
            type="button"
            onClick={() => nicknameCheck(nickname)}
          >
            중복확인
          </DoubleCheckButton>
        </RegisterInputBox>
        <RegisterInputBox>
          <InputBox
            type="password"
            id="password"
            onChange={passwordInput}
            placeholder="비밀번호 영어+숫자 4-16자리"
            required
          />
        </RegisterInputBox>
        <RegisterInputBox>
          <InputBox
            type="password"
            id="passwordConfirm"
            onChange={passwordConfirmInput}
            placeholder="비밀번호를 한 번 더 입력하세요"
            required
          />
        </RegisterInputBox>

        <RegisterButton type="submit">회원가입</RegisterButton>

        <LoginBox>
          이미 계정이 있으신가요?
          <Link to="/signin">
            <LoginLink>로그인</LoginLink>
          </Link>
        </LoginBox>
      </form>
    </LoginFormContainer>
  );
};

const LoginFormContainer = tw.div`
  rounded-lg p-8
`;

const RegisterInputBox = tw.div`
    flex justify-between items-center mb-2 
`;

const DoubleCheckButton = tw.button`
  bg-mCream w-24 text-mBlack font-medium text-sm  uppercase rounded shadow-md hover:bg-mYellow hover:shadow-lg focus:bg-mYellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-mYellow active:shadow-lg transition duration-150 ease-in-out px-2 py-2
`;

const LoginBox = tw.div`
  mt-14 justify-center flex text-mWhite 
`;

const LoginLink = tw.p`
  ml-4 text-mCream underline
`;
const RegisterButton = tw.button`
  bg-mCream  inline-block mt-7 px-7 py-3 text-mBlack font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-mYellow hover:shadow-lg focus:bg-mYellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-mYellow active:shadow-lg transition duration-150 ease-in-out w-full
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
    m-2.5
    focus:text-gray-700
    focus:bg-white
    focus:border-mYellow  
    focus:outline-none
`;
export default SignUpContainer;
