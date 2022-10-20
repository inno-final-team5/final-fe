import { getAllBadges } from "apis/badgeApi";
import { useQuery } from "react-query";

function useChallengeList() {
  return useQuery("challengeList", getAllBadges);
}

export default useChallengeList;
