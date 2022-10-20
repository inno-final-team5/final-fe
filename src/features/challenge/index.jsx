import React from "react";
import tw from "tailwind-styled-components/";
import ChallengeHeader from "./ChallengeHeader";
import ChallengeList from "./ChallengeList";

const ChallengeSection = () => {
  return (
    <ChallengeContainer>
      <ChallengeHeader />
      <ChallengeList />
    </ChallengeContainer>
  );
};

const ChallengeContainer = tw.div`
text-black flex flex-col items-center pt-2
`;
export default ChallengeSection;
