import LogoBox from "components/common/LogoBox";
import SignupBox from "components/signup/SignupBox";

const SignUp = () => {
 
  return (
        <div className="h-screen bg-mBlack mx-auto flex flex-col justify-center items-center">
          <LogoBox className="w-52"/>
          <SignupBox/>
        </div>
  );
};

export default SignUp;