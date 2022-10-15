import Logo from "../images/Logo.png";
import SignUpContainer from "components/signup/SignUpContainer";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen bg-mBlack mx-auto flex flex-col justify-center items-center">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="w-40" />
      </Link>
      <SignUpContainer />
    </div>
  );
};

export default SignUp;
