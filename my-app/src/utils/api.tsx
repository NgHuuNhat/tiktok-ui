import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL)

const api = axios.create({
    // baseURL: 'https://tiktok.fullstack.edu.vn/api',
    baseURL: process.env.REACT_APP_BASE_URL,
})

export default api;