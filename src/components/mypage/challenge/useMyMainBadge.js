import { getMyMainBadge } from "apis/badgeApi";
import { useQuery } from "react-query";

function useMyMainBadge() {
  return useQuery("mainBadge", getMyMainBadge);
}

export default useMyMainBadge;
