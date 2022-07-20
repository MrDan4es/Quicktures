import axios, { AxiosResponse } from 'axios';
import $api, { API_URL } from '../http';
import { AuthResponse } from '../types/authResponse.type';

export default class AuthService {
    static async login(
        username: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/login/', {
            username: username,
            password: password
        });
    }

    static async register(
        username: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return axios.post<AuthResponse>(`${API_URL}user/register/`, {
            username: username,
            password: password
        });
    }
}
