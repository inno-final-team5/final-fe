import React from "react";

const BadgeEmoji = ({ badgeId }) => {
  const badgeIcon = [
    { badgeId: 0, badge: "👤" },
    { badgeId: 1, badge: "💃" },
    { badgeId: 2, badge: "😎" },
    { badgeId: 3, badge: "🧑‍🤝‍🧑 " },
    { badgeId: 4, badge: "🙌 " },
    { badgeId: 5, badge: "🎬" },
    { badgeId: 6, badge: "👼" },
    { badgeId: 7, badge: "😈" },
    { badgeId: 8, badge: "🏆" },
  ];
  function findBadge(element) {
    if (element.badgeId == badgeId) {
      return element.badge;
    }
  }
  const { badge } = badgeIcon.filter(findBadge)[0];
  return <>{badge}</>;
};

export default BadgeEmoji;
