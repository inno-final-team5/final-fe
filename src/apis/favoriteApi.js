import { authApi } from "apis";

/** 즐겨찾기 목록 조회 */
export const getMyLikes = async () => {
  const response = await authApi.get("/auth/movie/favorites");
  return response.data;
};

/**영화 즐겨찾기 추가 */
export const addMyLike = async (data) => {
  return await authApi.post(`/auth/movie/favorite`, data);
};

/**영화 즐겨찾기 삭제 */
export const deleteMyLike = async (id) => {
  return await authApi.delete(`/auth/movie/favorite/${id}`);
};
