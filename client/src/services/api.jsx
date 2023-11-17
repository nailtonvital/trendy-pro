import axios from "axios";

const api = axios.create({
  baseURL: "https://trendy-app-api.onrender.com/",
});

export default api;
