import BadgeItemT from "./BadgeItemT";
const BadgeListT = () => {
  const badges = [
    {
      badgeId: 1,
      badgeIcon: "💃",
      badgeName: "커뮤니티 인싸",
      badgeInfo: "게시글 5개 작성",
      isActive: true,
    },
    {
      badgeId: 2,
      badgeIcon: "😎",
      badgeName: "어엿한 평론가",
      badgeInfo: "한줄평 5개 작성",
      isActive: false,
    },
    {
      badgeId: 3,
      badgeIcon: "🧑‍🤝‍🧑",
      badgeName: "넘치는 동료애",
      badgeInfo: "한줄평 좋아요 5회",
      isActive: true,
    },
    {
      badgeId: 4,
      badgeIcon: "🙌",
      badgeName: "공감의 달인",
      badgeInfo: "게시글 좋아요 5회",
      isActive: false,
    },
    {
      badgeId: 5,
      badgeIcon: "🎬",
      badgeName: "영화 수집가",
      badgeInfo: "즐겨찾기한 영화 5편",
      isActive: false,
    },
    {
      badgeId: 6,
      badgeIcon: "👼",
      badgeName: "후한 평론가",
      badgeInfo: "별점 5점 준 영화 5개",
      isActive: true,
    },
    {
      badgeId: 7,
      badgeIcon: "😈",
      badgeName: "야박한 평론가",
      badgeInfo: "별점 5점 준 영화 5개",
      isActive: true,
    },
    {
      badgeId: 8,
      badgeIcon: "🏆",
      badgeName: "배지 마스터",
      badgeInfo: "모든 배지 획득",
      isActive: false,
    },
  ];

  let content;

  content = badges.map((badge) => {
    return (
      <BadgeItemT
        key={badge.badgeId}
        icon={badge.badgeIcon}
        name={badge.badgeName}
        description={badge.badgeInfo}
        isActive={badge.isActive}
      />
    );
  });

  return (
    <section className="text-gray-400 bg-mGray body-font">
      <div className="container p-8 mx-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-4 justify-items-center gap-4">
          {content}
        </div>
      </div>
    </section>
  );
};

export default BadgeListT;
