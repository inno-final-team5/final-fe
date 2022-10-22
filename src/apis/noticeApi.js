import { authApi } from "apis";

export const getNotice = async () => {
  return await authApi.get(`/auth/notification`);
};

export const deleteNotice = async (notificationId) => {
  return await authApi.get(`/auth/notification/${notificationId}`);
};

export const deleteAllNotice = async () => {
  return await authApi.get(`/auth/notification`);
};

export const notReadNotice = async () => {
  return await authApi.get(`/auth/notificationCount`);
};

export const readNotice = async () => {
  return await authApi.get(`/auth/notification`);
};
