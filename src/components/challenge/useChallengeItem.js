import { getBadgeDetail } from "apis/badgeApi";
import { useQuery } from "react-query";

function useChallengeItem(badgeId) {
  return useQuery(["challengeItem", badgeId], () => getBadgeDetail(badgeId), {
    keepPreviousData: true,
  });
}

export default useChallengeItem;
