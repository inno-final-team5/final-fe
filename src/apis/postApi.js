import api from "shared/api";

export const getAllPosts = async () => {
  const response = await api.get("/post");

  return response.data;
};

export const getCinemaPosts = async () => {
  const response = await api.get("/post/cinemas");
  return response.data;
};

export const getMoviePosts = async () => {
  const response = await api.get("/post/movies");
  return response.data;
};
