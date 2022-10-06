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

export const deletePost = async ({ id }) => {
  return await api.delete(`/auth/post/${id}`, {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
};

export const updatePost = async (post) => {
  return await api.patch(`/auth/post/${post.postId}`, post);
};

export const likePost = async (id) => {
  return await api.post(`/auth/post/like/${id}`, {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
};
