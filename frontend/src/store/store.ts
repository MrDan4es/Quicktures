import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import $api, { API_URL } from '../http';
import { IUser } from '../types/authResponse.type';

export default class Store {
    username = '';
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUsername(username: string) {
        this.username = username;
    }

    async login(username: string, password: string) {
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            this.getUsername();
            this.setAuth(true);
        } catch (e) {
            console.log(e);
        }
    }

    async register(username: string, password: string) {
        try {
            const response = await AuthService.register(username, password);
            console.log(response);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            this.getUsername();
            this.setAuth(true);
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.setAuth(false);
            this.setUsername('');
        } catch (e) {
            console.log(e);
        }
    }

    async getUsername() {
        try {
            const response = await $api.get<IUser>(`${API_URL}user/info/`);
            this.setUsername(response.data.username);
        } catch (e) {
            console.log(e);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.post(`${API_URL}user/refresh/`, {
                refresh: localStorage.getItem('refreshToken')
            });
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            this.getUsername();
            this.setAuth(true);
        } catch (e) {
            console.log(e);
        }
    }

    async test() {
        try {
            const response = await $api.get(`${API_URL}user/test/`);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
}
