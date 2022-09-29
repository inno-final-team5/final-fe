import Logo from "../images/Logo.png"
import SignupBox from "components/signup/SignupBox";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
        <div className="h-screen bg-mBlack mx-auto flex flex-col justify-center items-center">
          <Link to={"/Signin"}>
            <img src={Logo} alt="Logo" className="w-40" />
          </Link>
          <SignupBox/>
        </div>
  );
};

export default SignUp;

