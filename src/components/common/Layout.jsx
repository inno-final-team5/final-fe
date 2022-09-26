import tw from "tailwind-styled-components";
import Header from "./Header";
import NavBar from "./navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <TwLayout>
      <NavBar />
      {/* <Header /> */}
      {children}
    </TwLayout>
  );
};

const TwLayout = tw.div`
w-4/5
mx-auto

`;
export default Layout;
