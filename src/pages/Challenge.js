import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-styled-components";
import ChallengeItem from "components/challenge/ChallengeItem";
import Layout from "components/common/Layout";
import { __getChallenges } from "redux/modules/challenge";

const Challenge = () => {
  const dispatch = useDispatch();

  const { badges: challengeList } = useSelector(
    (state) => state.challengeSlice
  );

  useEffect(() => {
    dispatch(__getChallenges());
  }, [dispatch]);

  return (
    <Layout>
      <ChallengeContainer>
        <ChallengeTitleBox>Challenge List</ChallengeTitleBox>

        <ChallengeListBox>
          {challengeList.map((challenge) => {
            return (
              <ChallengeItem
                key={challenge.badgeId}
                icon={challenge.badgeIcon}
                name={challenge.badgeName}
                description={challenge.badgeInfo}
              />
            );
          })}
        </ChallengeListBox>
      </ChallengeContainer>
    </Layout>
  );
};

const ChallengeContainer = tw.div`
text-black  lg:px-10    flex flex-col items-center 
`;

const ChallengeTitleBox = tw.h2`
h-8  w-full flex items-center text-3xl py-8 font-bold pl-4 text-mYellow underline
`;

const ChallengeListBox = tw.div`
 w-4/5 grid grid-cols-1  h-auto bg-mGray p-4 lg:p-8 rounded-md  my-8 min-w-max mx-4 md:grid-cols-2 lg:w-full border border-solid border-mYellow shadow-lg
`;

export default Challenge;
