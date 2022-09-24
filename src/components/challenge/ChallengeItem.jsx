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
  m-2 p-3 border border-mWhite bg-mWhite border-solid h-18 flex items-center rounded-lg text-mYellow text-3xl
`;

const ChallengeDescriptionBox = tw.div`
  flex-col  m-2 border border-solid border-mWhite bg-mWhite p-2 flex rounded-lg justify-start items-center w-full 
`;

const ChallengeBadgeTitle = tw.span`
  text-mBlack text-2xl  w-full text-start
`;

const ChallengeBadgeInfo = tw.p`
  text-md text-mGray text-start w-full mt-2
`;

export default ChallengeItem;
