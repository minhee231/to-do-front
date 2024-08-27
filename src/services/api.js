import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

apiClient.interceptors.request.use((config => {
    if(!config.url.includes('/auth/login') && !config.url.includes("/auth/register")) {
        const token = localStorage.getItem("token")
        if(token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
    }

    return config
}, (error) => {
    return Promise.reject(error);
}
))

export default apiClient;