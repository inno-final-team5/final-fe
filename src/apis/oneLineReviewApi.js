import { authApi } from "apis";

export const getMyOneLineReviews = async () => {
  const response = await authApi.get(`/auth/movie/one-line-review`);
  return response.data;
};
