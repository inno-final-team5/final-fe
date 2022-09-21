import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import InputBox from "../common/InputBox";

const RegisterForm = ({
  changeInput,
  signupData,
  email,
  nickname,
  password,
  passwordConfirm,
  setEmail,
  setNickname,
  setPassword,
  setPasswordConfirm,
  register,
  checkEmail,
  checkNickname,
}) => {
  return (
    <LoginFormContainer>
      {/* 회원가입 폼 */}
      <form onSubmit={register}>
        <RegisterInputBox>
          <InputBox
            type="email"
            helperText="이메일을 입력하세요"
            value={email}
            onChange={changeInput}
          />

          <DoubleCheckButton onClick={checkEmail}>중복확인</DoubleCheckButton>
        </RegisterInputBox>

        <RegisterInputBox>
          <InputBox
            type="text"
            helperText="닉네임을 입력하세요"
            value={nickname}
            onChange={changeInput}
          />

          <DoubleCheckButton onClick={checkNickname}>
            중복확인
          </DoubleCheckButton>
        </RegisterInputBox>
        <InputBox
          type="password"
          helperText="비밀번호를 입력하세요"
          value={password}
          onChange={changeInput}
        />

        <InputBox
          type="password"
          helperText="비밀번호를 한 번 더 입력하세요"
          value={passwordConfirm}
          onChange={changeInput}
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
    flex justify-between items-start
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

export default RegisterForm;
