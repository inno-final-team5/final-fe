import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components/";

const ChallengeHeader = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const goMyChallenge = () => {
    navigate("/mypage/badges");
  };

  return (
    <ChallengeHeaderBox>
      <ChallengeHeaderTitle>Challenge List</ChallengeHeaderTitle>
      <div className="w-full flex justify-between">
        <ChallengeHeaderDescription>
          챌린지를 달성하고 배지를 모아보세요!
        </ChallengeHeaderDescription>
        {accessToken !== null ? (
          <MyChallengeButton onClick={goMyChallenge}>
            나의 챌린지
          </MyChallengeButton>
        ) : (
          <></>
        )}
      </div>
    </ChallengeHeaderBox>
  );
};

const ChallengeHeaderBox = tw.div`
    flex justify-start flex-col md:w-5/6 w-full
`;

const ChallengeHeaderTitle = tw.h2`
text-3xl font-extrabold text-mYellow
`;

const ChallengeHeaderDescription = tw.p`
my-4  text-sm md:text-lg text-gray-500 
`;

const MyChallengeButton = tw.button`
  bg-mGray p-1 rounded-xl my-2 text-sm px-6 text-mYellow shadow-md
`;

export default ChallengeHeader;
