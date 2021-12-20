import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:4000`
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('@InterDev:Token') || '';
    config.headers = {
        'Authorization': `Bearer ${token}`,
    }
    return config;
});