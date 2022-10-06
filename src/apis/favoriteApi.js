import axios from "axios";
import api from "shared/api";

const favoriteApi = axios.create({ baseURL: "http://localhost:3001" });

export const getFavorites = async () => {
  const response = await api.get("/auth/movie/favorites", {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
  console.log(response);
  return response.data;
};

export const addFavorite = async (movie) => {
  return await favoriteApi.post("/favorites", movie);
};

export const updateFavorite = async (movie) => {
  return await favoriteApi.patch(`/favorites/${movie.id}`, movie);
};

export const deleteFavorite = async (id) => {
  return await api.delete(`/auth/movie/favorite/${id}`, {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
};

export default favoriteApi;
