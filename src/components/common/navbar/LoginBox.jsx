import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-3 mt-0">
      <Link to="/signin" className="text-mCream  hover:text-mYellow">
        로그인
      </Link>
      <Link to="/signup" className="text-mCream  hover:text-mYellow">
        회원가입
      </Link>
    </div>
  );
};

export default LoginBox;
