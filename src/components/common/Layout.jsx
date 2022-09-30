import tw from "tailwind-styled-components";
import Footer from "./Footer";
import NavBar from "./navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <TwLayout>
        <NavBar />
        {children}
        <Footer />
      </TwLayout>
    </>
  );
};

const TwLayout = tw.div`
w-4/5
mx-auto

`;
export default Layout;
