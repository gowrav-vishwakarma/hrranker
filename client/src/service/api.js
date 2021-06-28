import axios from "axios";

const api = axios.create({
    baseURL: process.env.VUE_BASEAPI || "http://localhost:3000"
});

export default api;
