import { getMyBadges } from "apis/badgeApi";
import { useQuery } from "react-query";

function useMyBadgeList() {
  return useQuery("badgeList", getMyBadges, { keepPreviousData: true });
}

export default useMyBadgeList;
