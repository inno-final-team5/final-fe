import tw from "tailwind-styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <TwLayout>
      <Header />
      <div className="pt-2">{children}</div>
    </TwLayout>
  );
};

const TwLayout = tw.div`
w-4/5
mx-auto
px-5
`;
export default Layout;
