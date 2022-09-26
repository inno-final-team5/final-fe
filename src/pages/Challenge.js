import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

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
      badgeIcon: "https://cdn-icons-png.flaticon.com/128/8085/8085579.png",
      badgeName: "test 2",
      badgeInfo: "테스트용 뱃지 2",
    },
    {
      badgeId: 3,
      badgeIcon: "https://cdn-icons-png.flaticon.com/128/8326/8326254.png",
      badgeName: "test 3",
      badgeInfo: "테스트용 뱃지 3",
    },
    {
      badgeId: 4,
      badgeIcon: "https://cdn-icons-png.flaticon.com/128/8136/8136355.png",
      badgeName: "test 4",
      badgeInfo: "테스트용 뱃지 4",
    },
  ];

  const [challengeList, setChallengeList] = useState([]);

  useEffect(() => {
    setChallengeList(tempList);
  }, []);

  return (
    <Layout>
      <ChallengeContainer>
        <ChallengeHeader />
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
  w-full grid grid-cols-1  h-auto bg-mGray p-4 lg:p-8 rounded-md  my-8 mx-4 md:grid-cols-2 lg:w-full  shadow-lg
`;

export default Challenge;
