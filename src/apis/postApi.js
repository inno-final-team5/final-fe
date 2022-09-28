import axios from "axios";

const postApi = axios.create({ baseURL: "http://localhost:3001" });

export const getPosts = async () => {
  const response = await postApi.get("/post");
  return response.data;
};

export const addPost = async (review) => {
  return await postApi.post("/post", review);
};

export const updateFavorite = async (review) => {
  return await postApi.patch(`/post/${review.id}`, review);
};

export const deleteFavorite = async ({ id }) => {
  return await postApi.delete(`/post/${id}`, id);
};

export default postApi;
