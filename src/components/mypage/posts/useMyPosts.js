import { getMyPosts } from "apis/postApi";
import { useQuery } from "react-query";

function useMyPosts() {
  return useQuery("myPosts", getMyPosts, {
    keepPreviousData: true,
  });
}

export default useMyPosts;
