import { api } from "apis";

/**BestFavorite 데이터 불러오기*/
export const getBestFavoriteWithApi = async () => {
  const response = await api.get("main/bestfavorite");
  return response.data;
};

/**Recent Post 데이터 불러오기*/
export const getRecentPosteWithApi = async () => {
  const { data } = await api.get("/main/post");
  return data;
};

/**Best Review 데이터 불러오기*/
export const getBestReviewWithApi = async () => {
  const { data } = await api.get("/main/best");
  return data;
};
