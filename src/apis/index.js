import axios from "axios";

export const api = axios.create({
  baseURL: "http://13.124.170.188/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: "http://13.124.170.188/",
  headers: {
    authorization: localStorage.getItem("accessToken"),
    "refresh-token": localStorage.getItem("refreshToken"),
  },
});
