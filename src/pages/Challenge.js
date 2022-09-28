import tw from "tailwind-styled-components";

import Layout from "components/common/Layout";
import ChallengeHeader from "components/challenge/ChallengeHeader";
import ChallengeList from "components/challenge/ChallengeList";

const Challenge = () => {
  return (
    <Layout>
      <ChallengeContainer>
        <ChallengeHeader />
        <ChallengeList />
      </ChallengeContainer>
    </Layout>
  );
};

const ChallengeContainer = tw.div`
text-black flex flex-col items-center 
`;

export default Challenge;
