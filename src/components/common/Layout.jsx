import tw from "tailwind-styled-components";
import Header from "./Header";


const Layout = ({ children }) => {
  return (
    <TwLayout>
      <Header />
      {children}
    </TwLayout>
  );
};

const TwLayout = tw.div`
w-4/5
mx-auto
px-5
`;
export default Layout;
