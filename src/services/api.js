import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api', // 스프링 부트 api 기본 url
    headers: {
        'Content-Type': 'application/json',
    }
})

export default apiClient;