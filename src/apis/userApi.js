import { api, authApi } from "apis";

/** 이메일 중복 확인 */
export const emailDuplicateCheck = async (email) => {
  return await api.post("/members/signup/email", email);
};

/**닉네임 중복 확인 */
export const nicknameDuplicateCheck = async (nickname) => {
  return await api.post("/members/signup/nickname", nickname);
};

/**회원 가입 */
export const signUp = async (data) => {
  return await api.post("/members/signup", data);
};

/** 로그인 */
export const signIn = async (data) => {
  return await api.post("/members/login", data);
};

/** 카카오 로그인 */
export const kakaoLogin = async (data) => {
  return await api.post(`/oauth/kakao?code=${data}`);
};

/** 닉네임 변경 */
export const nicknameChange = async (nickname) => {
  return await authApi.put(`/auth/members/nickname`, nickname);
};

/** 회원 탈퇴 */
export const deleteAccount = async () => {
  return await authApi.delete("/auth/members/leave");
};
