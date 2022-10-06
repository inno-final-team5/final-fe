import BadgeItemT from "./BadgeItemT";
const BadgeListT = () => {
  const badges = [
    {
      badgeId: 1,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060794.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: true,
    },
    {
      badgeId: 2,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060806.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: false,
    },
    {
      badgeId: 3,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060929.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: true,
    },
    {
      badgeId: 4,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060977.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: false,
    },
    {
      badgeId: 5,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060858.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: false,
    },
    {
      badgeId: 6,
      badgeIcon: "https://cdn-icons-png.flaticon.com/512/8060/8060909.png",
      badgeName: "test",
      badgeInfo: "test중입니다",
      isActive: true,
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
        <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
          {content}
        </div>
      </div>
    </section>
  );
};

export default BadgeListT;
