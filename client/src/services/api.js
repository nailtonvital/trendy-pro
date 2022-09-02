import axios from "axios";

const api = axios.create({
  baseURL: "https://trendy-pro.herokuapp.com/",
});

export default api;