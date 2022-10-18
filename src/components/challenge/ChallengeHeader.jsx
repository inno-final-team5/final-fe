import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components/";
const ChallengeHeader = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const goChallenge = () => {
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
          <button
            className="bg-mCream p-1 rounded-xl my-2 text-sm px-2"
            onClick={goChallenge}
          >
            나의 챌린지
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="w-full flex justify-end"></div>
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
my-4 text-lg text-gray-500 
`;

export default ChallengeHeader;
