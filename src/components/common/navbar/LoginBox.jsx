import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-6 px-3 mt-0 lg:items-center ">
      <Link
        to="/signin"
        className="text-mCream  hover:text-mYellow text-sm xl:text-lg py-2"
      >
        로그인
      </Link>
      <Link
        to="/signup"
        className="text-mCream  hover:text-mYellow text-sm xl:text-lg py-2 "
      >
        회원가입
      </Link>
    </div>
  );
};

export default LoginBox;
