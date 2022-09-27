import axios from "axios";

const challengeApi = axios.create({ baseURL: "http://localhost:3001" });

export const getChallenges = async () => {
  const response = await challengeApi.get("/challenges");
  return response.data;
};

export const addChallenge = async (challenge) => {
  return await challengeApi.post("/challenges", challenge);
};

export const updateChallenge = async (challenge) => {
  return await challengeApi.patch(`/challenges/${challenge.id}`, challenge);
};

export const deleteChallenge = async ({ id }) => {
  return await challengeApi.delete(`/challenges/${id}`, id);
};

export default challengeApi;
