import { api, authApi } from "apis";

export const getAllBadges = async () => {
  const response = await api.get("/badge");
  return response.data;
};

export const getMyBadges = async () => {
  const response = await authApi.get("/auth/badge");
  return response.data;
};

export const getMyMainBadge = async () => {
  const response = await authApi.get("/auth/mainBadge");
  return response.data;
};

export const updateMyMainBadge = async ({ badgeId }) => {
  return await authApi.post(`/auth/mainBadge/${badgeId}`);
};

export const deleteMyMainBadge = async () => {
  return await authApi.delete(`/auth/mainBadge`);
};
