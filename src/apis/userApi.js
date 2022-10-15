import { api } from "apis";

export const emailDuplicateCheck = async (email) => {
  return await api.post("/members/signup/email", email);
};

export const nicknameDuplicateCheck = async (nickname) => {
  return await api.post("/members/signup/nickname", nickname);
};

export const signUp = async (data) => {
  return await api.post("/members/signup", data);
};
