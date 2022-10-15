import { api, authApi } from "apis";

/** 나의 한줄평 리스트 불러오기 */
export const getMyOneLineReviews = async () => {
  const response = await authApi.get(`/auth/movie/one-line-review`);
  return response.data;
};

/** 한줄평 리스트 불러오기 */
export const getOneLineList = async (id) => {
  const response = await api.get(`/movie/${id}/one-line-review`);
  return response.data;
};

/** 한줄평 작성 */
export const createMyOneLine = async (data) => {
  return await api.post(`/auth/movie/one-line-review`);
};

/**내가 작성한 한줄평 불러오기 */
export const getMyOneLine = async () => {
  return await authApi.get(`/auth/movie/one-line-review`);
};

/** 한줄평 수정 */
export const updateMyOneLine = async (id, data) => {
  return authApi.put(`/auth/movie/${id}`, data);
};

/**한줄평 삭제 */
export const deleteMyOneLine = async (id) => {
  return await authApi.delete(`/auth/movie/${id}`);
};

/**내가 좋아요한 댓글 불러오기 */
export const getMyLikeComment = async () => {
  return await authApi.get(`/auth/movie/like`);
};

/**한줄평 좋아요 추가 */
export const addCommentLike = async (reviewId, data) => {
  return await api.post(`/auth/movie/${reviewId}/like`, data);
};

/**한줄평 좋아요 삭제 */
export const deleteCommentLike = async (reviewId, data) => {
  return await api.delete(`/auth/movie/${reviewId}/like`);
};
