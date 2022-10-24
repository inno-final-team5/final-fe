import { authApi } from "apis";

//알림 전체 리스트
export const getNotice = async () => {
  return await authApi.get(`/auth/notification`);
};

export const deleteNotice = async (notificationId) => {
  return await authApi.delete(`/auth/notification/${notificationId}`);
};

//알림 전체 삭제
export const deleteAllNotice = async () => {
  return await authApi.delete(`/auth/notification`);
};

//안 읽은 알람 리스트
export const notReadNotice = async () => {
  return await authApi.get(`/auth/notificationCount`);
};

//읽은 알림
export const readNotice = async () => {
  return await authApi.post(`/auth/notification`);
};
