import axios from "axios";

const apiBaseUrl =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  "http://localhost:3000";

const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

export default api;
