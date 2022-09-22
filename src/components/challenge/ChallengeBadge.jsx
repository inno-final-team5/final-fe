import tw from "tailwind-styled-components";

const ChallengeBadge = ({ icon, isActive, name }) => {
  return (
    <ChallengeBadgeContainer>
      {isActive === true ? (
        <>
          <ChallengeBadgeActiveBox>{icon}</ChallengeBadgeActiveBox>
          <ChallengeBadgeActiveName>{name}</ChallengeBadgeActiveName>
        </>
      ) : (
        <>
          <ChallengeBadgeInActiveBox>{icon}</ChallengeBadgeInActiveBox>
          <ChallengeBadgeInActiveName>{name}</ChallengeBadgeInActiveName>
        </>
      )}
    </ChallengeBadgeContainer>
  );
};

const ChallengeBadgeContainer = tw.div`
    flex flex-col items-center justify-center w-32 h-auto bg-mGray border border-solid py-4
`;

const ChallengeBadgeActiveBox = tw.div`
  m-2 p-3 border-4 border-mYellow bg-mGray border-solid w-20 h-20 flex items-center rounded-lg text-mYellow text-3xl justify-center  shadow-xl flex-col`;

const ChallengeBadgeInActiveBox = tw(ChallengeBadgeActiveBox)`
  border border-mWhite text-mWhite
`;

const ChallengeBadgeActiveName = tw.span`
    text-mYellow shadow-lg
`;

const ChallengeBadgeInActiveName = tw(ChallengeBadgeActiveName)`
    text-mWhite  
`;

export default ChallengeBadge;
