import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api.com", // ✅ your actual API base URL
});

export default api;
