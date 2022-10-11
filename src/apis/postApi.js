import { api, authApi } from "apis";

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

export const getPostDetail = async (id) => {
  const response = await api.get(`/post/${id}`);
  return response.data;
};

export const getMyPosts = async () => {
  const response = await authApi.get("/auth/post");
  return response.data;
};

export const addPost = async (post) => {
  return await authApi.post("/auth/post", post);
};

export const deletePost = async ({ id }) => {
  return await authApi.delete(`/auth/post/${id}`);
};

export const updatePost = async (post) => {
  return await authApi.put(`/auth/post/${post.id}`, post);
};

export const addLike = async ({ id }) => {
  return await authApi.post(`/auth/post/like/${id}`);
};

export const deleteLike = async ({ id }) => {
  return await authApi.delete(`/auth/post/like/${id}`);
};
