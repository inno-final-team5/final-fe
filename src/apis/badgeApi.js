import axios from "axios";

const badgeApi = axios.create({ baseURL: "http://localhost:3001" });

export const getMyBadges = async () => {
  const response = await badgeApi.get("/badges");
  return response.data;
};

// export const addChallenge = async (challenge) => {
//   return await badgeApi.post("/challenges", challenge);
// };

export const updateMainBadge = async (badge) => {
  return await badgeApi.patch(`/badges/${badge.id}`, badge);
};

// export const deleteChallenge = async ({ id }) => {
//   return await badgeApi.delete(`/challenges/${id}`, id);
// };

export default badgeApi;
