import tw from "tailwind-styled-components";

import Layout from "components/common/Layout";
import ChallengeHeader from "components/challenge/ChallengeHeader";
import ChallengeListT from "components/challenge/ChallengeListT";
import ChallengeList from "components/challenge/ChallengeList";

const Challenge = () => {
  return (
    <Layout>
      <ChallengeContainer>
        <ChallengeHeader />
        <ChallengeList />
        {/* <ChallengeListT /> */}
      </ChallengeContainer>
    </Layout>
  );
};

const ChallengeContainer = tw.div`
text-black flex flex-col items-center 
`;

export default Challenge;
