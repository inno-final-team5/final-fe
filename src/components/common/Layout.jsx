import tw from "tailwind-styled-components";

const Layout = ({ children }) => {
  return <TwLayout>{children}</TwLayout>;
};

const TwLayout = tw.div`
w-4/5
mx-auto
px-5
`;
export default Layout;
