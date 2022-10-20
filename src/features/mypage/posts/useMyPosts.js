import { getMyPosts } from "apis/postApi";
import { useQuery } from "react-query";

function useMyPosts(pageNum) {
  return useQuery(["myPosts", pageNum], () => getMyPosts(pageNum), {
    keepPreviousData: true,
  });
}

export default useMyPosts;
