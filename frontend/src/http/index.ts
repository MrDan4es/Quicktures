import axios from 'axios';

export const API_URL = 'http://localhost:8000/api/';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    if (!config?.headers) {
        throw new Error(
            `Expected 'config' and 'config.headers' not to be undefined`
        );
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

$api.interceptors.response.use(config => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post(`${API_URL}user/refresh/`, {"refresh": localStorage.getItem('refreshToken')})
            console.log(response)
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            return $api.request(originalRequest)
        } catch (e) {
            console.log(e);
        }
    }
    throw error;
})

export default $api;
