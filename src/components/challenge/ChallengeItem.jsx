import tw from "tailwind-styled-components/";
const ChallengeItem = ({ icon, name, description }) => {
  return (
    <ChallengeItemContainer>
      <ChallengeBadgeBox>
        <img src={icon} alt="badge" width={56} height={56} />
      </ChallengeBadgeBox>
      <ChallengeDescriptionBox>
        <ChallengeBadgeTitle>{name}</ChallengeBadgeTitle>
        <ChallengeBadgeInfo>{description}</ChallengeBadgeInfo>
      </ChallengeDescriptionBox>
    </ChallengeItemContainer>
  );
};

const ChallengeItemContainer = tw.div`
  flex justify-around  p-2 items-center mx-2 sm:mx-4  min-w-max
`;

const ChallengeBadgeBox = tw.div`
  m-2 p-3 border-2 border-mYellow bg-mGray border-solid h-18 flex items-center rounded-lg text-mYellow text-3xl
`;

const ChallengeDescriptionBox = tw.div`
  flex-col  m-2 border-2 border-solid border-mYellow bg-mGray w-4/5 p-2 flex rounded-lg justify-start items-center
`;

const ChallengeBadgeTitle = tw.span`
  text-mYellow text-2xl
`;

const ChallengeBadgeInfo = tw.p`
  text-lg text-mWhite
`;

export default ChallengeItem;
