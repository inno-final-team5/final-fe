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
`;

const Main = tw.main`
  min-h-5/6
  py-24
  
`;
export default Layout;
