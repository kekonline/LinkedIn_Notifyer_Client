import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
        config.headers.authorization = `Bearer ${"authToken"}`;
    }

    console.log("wewewew", authToken);
    return config;
});

export default axiosInstance;
