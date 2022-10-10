import tw from "tailwind-styled-components";
import ChallengeItem from "components/challenge/ChallengeItem";

const ChallengeListT = () => {
  const challenges = [
    {
      badgeId: 1,
      badgeIcon: "💃",
      badgeName: "커뮤니티 인싸",
      badgeInfo: "작성한 게시글 수 5개",
      isActive: true,
    },
    {
      badgeId: 2,
      badgeIcon: "😎",
      badgeName: "어엿한 평론가",
      badgeInfo: "작성한 한줄평 수 5개",
    },
    {
      badgeId: 3,
      badgeIcon: "🧑‍🤝‍🧑",
      badgeName: "넘치는 동료애",
      badgeInfo: "다른 사람의 한줄평 좋아요 5회",
    },
    {
      badgeId: 4,
      badgeIcon: "🙌",
      badgeName: "공감의 달인",
      badgeInfo: "다른 사람의 게시글 좋아요 5회",
    },
    {
      badgeId: 5,
      badgeIcon: "🎬",
      badgeName: "영화 수집가",
      badgeInfo: "즐겨찾기한 영화 5편",
    },
    {
      badgeId: 6,
      badgeIcon: "👼",
      badgeName: "후한 평론가",
      badgeInfo: "별점 5점 준 영화 5편",
    },
    {
      badgeId: 7,
      badgeIcon: "😈",
      badgeName: "야박한 평론가",
      badgeInfo: "별점 1점 준 영화 5편",
    },
    {
      badgeId: 8,
      badgeIcon: "🏆",
      badgeName: "배지 마스터",
      badgeInfo: "모든 배지 획득",
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
