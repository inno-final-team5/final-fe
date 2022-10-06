import tw from "tailwind-styled-components";
import ChallengeItem from "components/challenge/ChallengeItem";

const ChallengeListT = () => {
  const challenges = [
    {
      badgeId: 1,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060794.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: true,
    },
    {
      badgeId: 2,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060806.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: false,
    },
    {
      badgeId: 3,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060929.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: true,
    },
    {
      badgeId: 4,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060977.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: false,
    },
    {
      badgeId: 5,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060858.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: false,
    },
    {
      badgeId: 6,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060909.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: true,
    },
  ];

  let content;

  content = challenges.map((challenge) => {
    return (
      <ChallengeItem
        key={challenge.badgeId}
        icon={challenge.badgeIcon}
        name={challenge.badgeName}
        description={challenge.badgeInfo}
      />
    );
  });

  return <ChallengeListBox>{content}</ChallengeListBox>;
};

const ChallengeListBox = tw.div`
  grid grid-cols-1  h-auto bg-mGray p-4 lg:p-8 rounded-md  min-w-max mx-4 md:grid-cols-2 w-full  shadow-lg lg:mb-6
`;

export default ChallengeListT;
