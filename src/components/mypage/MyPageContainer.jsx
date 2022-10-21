import React from "react";
import tw from "tailwind-styled-components";

const MyPageContainer = ({ children }) => {
  return <Base>{children}</Base>;
};

const Base = tw.div`
bg-mGray h-full md:min-h-[26rem] rounded-xl
`;

export default MyPageContainer;
