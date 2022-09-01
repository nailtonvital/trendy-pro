import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/Movies",
})

export default api;