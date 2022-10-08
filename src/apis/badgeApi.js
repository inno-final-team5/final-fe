import axios from "axios";

const badgeApi = axios.create({ baseURL: "http://localhost:3001" });

export const getMyBadges = async () => {
  const response = await badgeApi.get("/badges");
  return response.data;
};

export const updateMainBadge = async (badge) => {
  return await badgeApi.patch(`/badges/${badge.id}`, badge);
};

export const deleteMainBadge = async (badge) => {
  return await badgeApi.delete(`/badges/${badge.id}`, badge);
};

export default badgeApi;
