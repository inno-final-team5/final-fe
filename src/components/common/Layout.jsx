import tw from "tailwind-styled-components";
import Footer from "./Footer";
import NavBar from "./navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <TwLayout>
        <NavBar />
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
