import { api, authApi } from "apis";

export const getAllBadges = async () => {
  const response = await api.get("/badge");
  return response.data;
};

export const getMyBadges = async () => {
  const response = await authApi.get("/auth/badge");
  return response.data;
};

export const updateMainBadge = async ({ badgeId }) => {
  return await authApi.post(`/auth/badge/${badgeId}`);
};

export const deleteMainBadge = async ({ badgeId }) => {
  return await authApi.delete(`/auth/badge/${badgeId}`);
};
