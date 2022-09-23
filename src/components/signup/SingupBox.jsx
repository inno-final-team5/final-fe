import React from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
import { api } from "../../shared/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**유효성을 위한 정규식 */
import {
  checkEmail,
  checkUserName,
  checkPassword,
} from "../../utils/validation";

const SingupBox = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  /** input */
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const nicknameInput = (e) => {
    setNickname(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };
  const passwordConfirmInput = (e) => {
    setPasswordConfirm(e.target.value);
  };

  /** 이메일 중복확인 */
  const emailCheck = async () => {
    //빈칸확인
    if (email.length === 0) {
      alert("이메일을 입력해주세요");
      return;
    }

    //중복확인
    const response = await api.post("/members/signup/email", { email });
    if (response.data.success) {
      alert("사용 가능한 이메일입니다.");
    } else {
      alert("이미 사용 중인 이메일입니다.");
    }
  };

  /** 닉네임 중복확인 */
  const nicknameCheck = async () => {
    //빈칸확인
    if (nickname.length === 0) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    //중복확인
    const response = await api.post("/members/signup/nickname", { nickname });
    if (response.data.success) {
      alert("사용 가능한 닉네임입니다.");
    } else {
      alert("이미 사용 중인 닉네임입니다.");
    }
  };

  /** 입력한 비밀번호 같은지 확인 */
  const passwordConfirmCheck = passwordConfirm === password;

  /** submit */
  const onSumitSignup = async (e) => {
    e.preventDefault();

    /** 회원가입 유효성 확인*/
    if (!passwordConfirmCheck) {
      alert("입력하신 비밀번호가 다릅니다.");
      return;
    } else if (!checkEmail(email)) {
      alert("이메일 형식에 맞게 써주세요");
      return;
    } else if (!checkUserName(nickname)) {
      alert("닉네임 형식에 맞게 써주세요");
      return;
    } else if (!checkPassword(password)) {
      alert("비밀번호 형식에 맞게 써주세요");
      return;
    }

    /** 회원가입 로직  */
    try {
      const res = await api.post(`/members/signup`, {
        email,
        nickname,
        password,
      });
      console.log(res);

      if (res.data.error === "DUPLICATE_EMAIL") {
        alert("이메일 중복확인을 해주세요");
      } else if (res.data.error === "DUPLICATE_NICKNAME") {
        alert("닉네임 중복확인을 해주세요");
      } else {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginFormContainer>
      {/* 회원가입 폼 */}
      <form onSubmit={onSumitSignup}>
        <RegisterInputBox>
          <InputBox
            type="email"
            id="email"
            onChange={emailInput}
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
            onChange={nicknameInput}
            placeholder="닉네임 10자이내"
            required
          />

          <DoubleCheckButton type="button" onClick={nicknameCheck}>
            중복확인
          </DoubleCheckButton>
        </RegisterInputBox>
        <InputBox
          type="password"
          id="password"
          onChange={passwordInput}
          placeholder="비밀번호 영어+숫자 4-16자리"
          required
        />

        <InputBox
          type="password"
          id="passwordConfirm"
          onChange={passwordConfirmInput}
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
  bg-mCream w-24 text-mBlack font-medium text-sm  uppercase rounded shadow-md hover:bg-mYellow hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out px-2 py-2
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
    m-2.5
    focus:text-gray-700
    focus:bg-white
    focus:border-mSecondaryColor
    focus:outline-none
`;
export default SingupBox;
