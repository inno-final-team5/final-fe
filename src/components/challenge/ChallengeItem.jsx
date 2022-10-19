import tw from "tailwind-styled-components/";

import Swal from "sweetalert2";
const ChallengeItem = ({ icon, name, maxUser, getUser, description }) => {
  const rate = Math.floor((getUser / maxUser) * 100) + "%";
  const showChallengeDetail = () => {
    Swal.fire({
      html: `
      <div class="flex flex-col gap-2">
        <span class="text-5xl m-2 p-2">${icon}</span>
        <h2 class="text-2xl text-black font-semibold">${name}</h2>
        <p>${description}</p>
        <div class="w-full flex items-center justify-center">
          <p class="w-2/3 text-lg font-extrabold text-yellow-500 bg-amber-50 my-2 rounded-lg"><span class="text-xl">${rate}</span>의 사용자가 획득했습니다.</p>
        </div>
        
      </div>
      `,
      buttonsStyling: false,
      showConfirmButton: true,
      confirmButtonText: "확인",
      customClass: {
        confirmButton:
          "bg-yellow-500 focus:outline-none px-4 py-2 text-mGray rounded-md",
      },
    });
  };

  return (
    <ChallengeItemContainer>
      <ChallengeBadgeBox onClick={showChallengeDetail}>
        <span className="text-4xl p-1">{icon}</span>
      </ChallengeBadgeBox>
      <ChallengeBadgeTitle>{name}</ChallengeBadgeTitle>
    </ChallengeItemContainer>
  );
};

const ChallengeItemContainer = tw.div`
  flex justify-around  p-2 items-center md:mx-4  min-w-max flex-col 
`;

const ChallengeBadgeBox = tw.div`
 border border-mWhite bg-mWhite border-solid  flex items-center rounded-lg cursor-pointer w-16 h-16 justify-center
`;

const ChallengeBadgeTitle = tw.span`
  text-sm  w-full text-start font-bold text-center text-mCream mt-2 md:text-lg
`;

export default ChallengeItem;
