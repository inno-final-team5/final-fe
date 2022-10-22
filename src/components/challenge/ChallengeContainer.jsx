import React from "react";
import tw from "tailwind-styled-components/";

const ChallengeContainer = ({ children }) => {
  return <Base>{children}</Base>;
};

const Base = tw.div`
text-black flex flex-col items-center md:pt-4 px-2 pt-2
`;
export default ChallengeContainer;
