import { getSearchPosts } from "apis/postApi";
import { useQuery } from "react-query";

function useSearchKeyword({ type, keyword }) {
  return useQuery(["keyword", keyword], getSearchPosts(type, keyword), {
    enabled: !!keyword,
  });
}

export default useSearchKeyword;
