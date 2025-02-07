'use client';

import axios from "axios";
import { getCookie, getCookies } from "cookies-next/client";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});


api.interceptors.request.use(config => {
  const token = localStorage.getItem("token") || null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;