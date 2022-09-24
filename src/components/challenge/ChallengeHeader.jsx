import tw from "tailwind-styled-components/";
const ChallengeHeader = () => {
  return (
    <ChallengeHeaderBox>
      <ChallengeHeaderTitle>Challenge List</ChallengeHeaderTitle>
      <ChallengeHeaderDescription>
        챌린지를 달성하고 배지를 모아보세요! 획득하신 배지는 닉네임 앞에
        보입니다.
      </ChallengeHeaderDescription>
    </ChallengeHeaderBox>
  );
};

const ChallengeHeaderBox = tw.div`
    flex justify-start flex-col w-full
`;

const ChallengeHeaderTitle = tw.h2`
text-3xl font-extrabold text-mYellow dark:text-white
`;

const ChallengeHeaderDescription = tw.p`
my-4 text-lg text-gray-500 indent-4
`;

export default ChallengeHeader;
