import { api, authApi, localApi } from "apis";

export const getAllBadges = async () => {
  const response = await api.get("/badge");
  console.log(response.data);
  return response.data;
};

export const getMyBadges = async () => {
  const response = await authApi.get("/auth/badge");
  console.log(response.data);
  return response.data;
};

export const updateMainBadge = async ({ badgeId }) => {
  return await authApi.post(`/auth/badge/${badgeId}`);
};

export const deleteMainBadge = async ({ badgeId }) => {
  return await authApi.delete(`/auth/badge/${badgeId}`);
};

export const getMyBadgesLocal = async () => {
  const response = await localApi.get("/badges");
  console.log(response);
  return response.data;
};
