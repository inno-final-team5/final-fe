import Logo from "../images/Logo.png";
import SignUpBox from "components/signup/SignUpBox";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen bg-mBlack mx-auto flex flex-col justify-center items-center">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="w-40" />
      </Link>
      <SignUpBox />
    </div>
  );
};

export default SignUp;
