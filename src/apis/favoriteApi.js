import { authApi } from "apis";

export const getMyFavorites = async () => {
  const response = await authApi.get("/auth/movie/favorites");
  return response.data;
};

export const deleteMyFavorite = async (id) => {
  return await authApi.delete(`/auth/movie/favorite/${id}`);
};
