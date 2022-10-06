import api from "shared/api";

export const getMyOneLineReviews = async () => {
  const response = await api.get(`/auth/movie/one-line-review`, {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });

  return response.data;
};
