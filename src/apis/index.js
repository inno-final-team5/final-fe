import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";
const developmentUrl = `${process.env.REACT_APP_API_URL}`;
const productionUrl = `${process.env.REACT_APP_API_DOMAIN}`;

const BASE_URL = isProduction ? productionUrl : developmentUrl;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: localStorage.getItem("accessToken"),
    "refresh-token": localStorage.getItem("refreshToken"),
  },
});
