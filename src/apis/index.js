import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
  // withCredentials: true,
});

export const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: localStorage.getItem("accessToken"),
    "refresh-token": localStorage.getItem("refreshToken"),
  },
  // withCredentials: true,
});
