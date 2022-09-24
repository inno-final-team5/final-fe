// import tw from "tailwind-styled-components/";
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

// const Section = tw.section`

// `;
// const Container = tw.div`
// container px-6
// h-full 
// mx-auto
// `;

// const SignUpContainer = tw.div`
// h-screen 
// bg-mBlack
// flex
// flex-col
// justify-center
// items-center
// flex-wrap
// h-full
// text-gray-800 
// `;

export default SignUp;