import axios from "axios";

const api = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
})

export default api;