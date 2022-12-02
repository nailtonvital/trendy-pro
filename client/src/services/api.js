import axios from "axios";

const api = axios.create({
  baseURL: "https://keikoapp.herokuapp.com/",
});

export default api;