import tw from "tailwind-styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <TwLayout>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </TwLayout>
    </>
  );
};

const TwLayout = tw.div`
w-4/5
mx-auto
h-full
flex
flex-col
items-center
`;

const Main = tw.main`
  min-h-5/6
  py-24
  
  px-4
  mx-auto
  w-4/5
  
`;
export default Layout;
