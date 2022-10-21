import { getAllBadges } from "apis/badgeApi";
import { useQuery } from "react-query";

function useChallengeList() {
  return useQuery("challengeList", getAllBadges, { keepPreviousData: true });
}

export default useChallengeList;
