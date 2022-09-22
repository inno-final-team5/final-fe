import axios from "axios";

// axios 기본 주소 & header 타입 세팅
export const api = axios.create({
  baseURL: "http://15.165.100.67/api",
  headers: {
    "Content-Type": "application/json",
  },
});