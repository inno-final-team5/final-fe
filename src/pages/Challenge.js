import ChallengeContainer from "components/challenge/ChallengeContainer";
import ChallengeHeader from "components/challenge/ChallengeHeader";
import ChallengeList from "components/challenge/ChallengeList";
import Layout from "components/common/Layout";

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

export default Challenge;
