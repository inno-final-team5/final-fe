import { getSearchKeyword } from "apis/postApi";
import { useQuery } from "react-query";

function useSearchKeyword(keyword) {
  return useQuery(["keyword", keyword], getSearchKeyword(keyword), {});
}

export default useSearchKeyword;
