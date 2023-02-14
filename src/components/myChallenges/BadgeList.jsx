import { BadgeListData } from "data/BadgeListData";
import BadgeItem from "./BadgeItem";
import tw from "tailwind-styled-components";

const BadgeList = ({ data }) => {
  const userData = data[0];
  const badgeData = userData.badgeResponseDtoList;
  const badgeList = BadgeListData;

  let activeBadges = [];

  if (data.length > 0) {
    activeBadges = badgeData.sort((a, b) => a.badgeId - b.badgeId);
  }

  let activeIds = [];

  for (let i = 0; i < activeBadges.length; i++) {
    activeIds.push(badgeData[i].badgeId - 2);
  }

  const isBadgeActive = (i) => {
    return activeIds.includes(i) ? true : false;
  };

  return (
    <BadgeListContainer>
      <BadgeItem
        id={badgeList[0].badgeId}
        icon={badgeList[0].badgeIcon}
        name={badgeList[0].badgeName}
        description={badgeList[0].badgeInfo}
        isActive={isBadgeActive(badgeList[0].badgeId)}
        currentCount={userData.postTotal}
        maxCount={userData.badgeNum}
      />
      <BadgeItem
        id={badgeList[1].badgeId}
        icon={badgeList[1].badgeIcon}
        name={badgeList[1].badgeName}
        description={badgeList[1].badgeInfo}
        currentCount={userData.oneReviewTotal}
        maxCount={userData.badgeNum}
        isActive={isBadgeActive(badgeList[1].badgeId)}
      />
      <BadgeItem
        id={badgeList[2].badgeId}
        icon={badgeList[2].badgeIcon}
        name={badgeList[2].badgeName}
        description={badgeList[2].badgeInfo}
        currentCount={userData.oneReviewLikeNumTotal}
        maxCount={userData.badgeNum}
        isActive={isBadgeActive(badgeList[2].badgeId)}
      />
      <BadgeItem
        id={badgeList[3].badgeId}
        icon={badgeList[3].badgeIcon}
        name={badgeList[3].badgeName}
        description={badgeList[3].badgeInfo}
        currentCount={userData.postLikeNumTotal}
        maxCount={userData.badgeNum}
        isActive={isBadgeActive(badgeList[3].badgeId)}
      />
      <BadgeItem
        id={badgeList[4].badgeId}
        icon={badgeList[4].badgeIcon}
        name={badgeList[4].badgeName}
        description={badgeList[4].badgeInfo}
        currentCount={userData.favoriteTotal}
        maxCount={userData.badgeNum}
        isActive={isBadgeActive(badgeList[4].badgeId)}
      />
      <BadgeItem
        id={badgeList[5].badgeId}
        icon={badgeList[5].badgeIcon}
        name={badgeList[5].badgeName}
        description={badgeList[5].badgeInfo}
        currentCount={userData.reviewStarFiveTotal}
        maxCount={userData.badgeNum}
        isActive={isBadgeActive(badgeList[5].badgeId)}
      />
      <BadgeItem
        id={badgeList[6].badgeId}
        icon={badgeList[6].badgeIcon}
        name={badgeList[6].badgeName}
        description={badgeList[6].badgeInfo}
        currentCount={userData.reviewStarOneTotal}
        maxCount={userData.badgeNum}
        isActive={isBadgeActive(badgeList[6].badgeId)}
      />
      <BadgeItem
        id={badgeList[7].badgeId}
        icon={badgeList[7].badgeIcon}
        name={badgeList[7].badgeName}
        description={badgeList[7].badgeInfo}
        currentCount={userData.getBadgeTotal}
        maxCount={7}
        isActive={isBadgeActive(badgeList[7].badgeId)}
      />
    </BadgeListContainer>
  );
};

const BadgeListContainer = tw.div`
  grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4 p-8 mx-auto
`;

export default BadgeList;
