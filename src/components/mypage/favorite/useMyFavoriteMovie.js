import { getMyLikes } from "apis/favoriteApi";
import { useQuery } from "react-query";

function useMyFavoriteMovie() {
  return useQuery("favorites", getMyLikes, { keepPreviousData: true });
}

export default useMyFavoriteMovie;
