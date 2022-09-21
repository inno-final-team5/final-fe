import tw from "tailwind-styled-components";

const Layout = ({ children }) => {
  return <TwLayout>{children}</TwLayout>;
};

const TwLayout = tw.div`
  w-full
  h-screen
  bg-mBlack
`;
export default Layout;
