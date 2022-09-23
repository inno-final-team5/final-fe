import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

import { __getChallenges } from "redux/modules/challenge";
import { useDispatch, useSelector } from "react-redux";

import Layout from "components/common/Layout";
import ChallengeHeader from "components/challenge/ChallengeHeader";
import ChallengeItem from "components/challenge/ChallengeItem";

const Challenge = () => {
  const tempList = [
    {
      badgeId: 1,
      badgeIcon: "https://cdn-icons-png.flaticon.com/128/2107/2107845.png",
      badgeName: "test 1",
      badgeInfo: "테스트용 뱃지 1",
    },
    {
      badgeId: 2,
      badgeIcon: "https://cdn-icons-png.flaticon.com/128/2107/2107845.png",
      badgeName: "test 2",
      badgeInfo: "테스트용 뱃지 2",
    },
    {
      badgeId: 3,
      badgeIcon: "https://cdn-icons-png.flaticon.com/128/2107/2107845.png",
      badgeName: "test 3",
      badgeInfo: "테스트용 뱃지 3",
    },
    {
      badgeId: 4,
      badgeIcon: "https://cdn-icons-png.flaticon.com/128/2107/2107845.png",
      badgeName: "test 4",
      badgeInfo: "테스트용 뱃지 4",
    },
  ];

  const [challengeList, setChallengeList] = useState([]);

  useEffect(() => {
    setChallengeList(tempList);
  }, []);

  // const dispatch = useDispatch();

  // const { badges: challengeList } = useSelector(
  //   (state) => state.challengeSlice
  // );

  // useEffect(() => {
  //   dispatch(__getChallenges());
  // }, [dispatch]);

  return (
    <Layout>
      <ChallengeContainer>
        <ChallengeHeader />
        {/* <ChallengeTitleBox>
          챌린지를 달성하고 뱃지를 모아보세요!
        </ChallengeTitleBox> */}

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
text-black flex flex-col items-center 
`;

const ChallengeListBox = tw.div`
  grid grid-cols-1  h-auto bg-mGray p-4 lg:p-8 rounded-md  my-8 min-w-max mx-4 md:grid-cols-2 lg:w-full  shadow-lg
`;

export default Challenge;
