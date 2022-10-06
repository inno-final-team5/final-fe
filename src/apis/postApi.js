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

export const getPostDetail = async (id) => {
  const response = await api.get(`/post/${id}`);
  return response.data;
};

export const getMyPosts = async () => {
  const response = await api.get("/auth/post", {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
  console.log(response);
  return response.data;
};

export const addPost = async (post) => {
  return await api.post("/auth/post", post, {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
};
