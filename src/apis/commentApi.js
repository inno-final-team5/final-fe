import api from "shared/api";

export const getMyComments = async () => {
  const response = await api.get(`/auth/movie/on-line-review`, {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
  console.log(response);
  return response.data;
};
