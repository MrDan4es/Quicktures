import axios, { AxiosResponse } from 'axios';
import $api, { API_URL } from '../http';
import { LoginResponse, RegisterResponse } from '../types/AuthResponse';

export default class AuthService {
    static async login(
        username: string,
        password: string
    ): Promise<AxiosResponse<LoginResponse>> {
        return $api.post<LoginResponse>('/user/login/', { username, password });
    }

    static async register(
        username: string,
        password: string
    ): Promise<AxiosResponse<RegisterResponse>> {
        return axios.post<RegisterResponse>(`${API_URL}user/register/`, {
            username,
            password
        });
    }
}
