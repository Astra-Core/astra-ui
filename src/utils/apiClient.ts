import axios from "axios";

export const getBaseUrl = () => {
  return process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
};

export const apiClient = axios.create({
  baseURL: getBaseUrl(),
});
