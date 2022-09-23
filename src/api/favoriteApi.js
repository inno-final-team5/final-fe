import axios from "axios";

const favoriteApi = axios.create({ baseURL: "http://localhost:3001" });

export const getFavorites = async () => {
  const response = await favoriteApi.get("/favorites");
  return response.data;
};

export const addFavorite = async (movie) => {
  return await favoriteApi.post("/favorites", movie);
};

export const updateFavorite = async (movie) => {
  return await favoriteApi.patch(`/favorites/${movie.id}`, movie);
};

export const deleteFavorite = async ({ id }) => {
  return await favoriteApi.delete(`/favorites/${id}`, id);
};

export default favoriteApi;
