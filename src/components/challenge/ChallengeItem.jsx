import tw from "tailwind-styled-components/";
const ChallengeItem = ({ icon, name, description }) => {
  return (
    <ChallengeItemContainer>
      <ChallengeBadgeBox>
        {/* <img src={icon} alt="badge" width={56} height={56} /> */}
        <span className="text-4xl p-1">{icon}</span>
      </ChallengeBadgeBox>
      <ChallengeDescriptionBox>
        <ChallengeBadgeTitle>{name}</ChallengeBadgeTitle>
        <ChallengeBadgeInfo>{description}</ChallengeBadgeInfo>
      </ChallengeDescriptionBox>
    </ChallengeItemContainer>
  );
};

const ChallengeItemContainer = tw.div`
  flex justify-around  p-2 items-center md:mx-4  min-w-max
`;

const ChallengeBadgeBox = tw.div`
  p-4 border border-mWhite bg-mWhite border-solid  flex items-center rounded-lg lg:p-3.5
`;

const ChallengeDescriptionBox = tw.div`
  flex-col  mx-2 border border-solid border-mWhite bg-mWhite p-2 flex rounded-lg justify-start items-center w-full 
`;

const ChallengeBadgeTitle = tw.span`
  text-mBlack text-lg lg:text-2xl  w-full text-start font-bold
`;

const ChallengeBadgeInfo = tw.p`
  text-sm text-mGray text-start w-full mt-2
`;

export default ChallengeItem;
