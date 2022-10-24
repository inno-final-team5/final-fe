import tw from "tailwind-styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Base>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Base>
    </>
  );
};

const Base = tw.div`
w-full
md:w-4/5
mx-auto
h-full
flex
flex-col
items-center
`;

const Main = tw.main`
  min-h-5/6
  py-20
  xl:py-28
  px-2
  md:mx-auto
  w-full


  
`;
export default Layout;
