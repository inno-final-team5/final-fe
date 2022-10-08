import axios from "axios";
import api from "shared/api";

const challengeApi = axios.create({ baseURL: "http://localhost:3001" });

export const getChallenges = async () => {
  const response = await challengeApi.get("/challenges");
  // const response = await api.get(
  //   `auth/badge`
  // )
  return response.data;
};

export const addChallenge = async (challenge) => {
  return await challengeApi.post("/challenges", challenge);
};

export const updateChallenge = async (challenge) => {
  return await challengeApi.patch(`/challenges/${challenge.id}`, challenge);
};

export default challengeApi;
