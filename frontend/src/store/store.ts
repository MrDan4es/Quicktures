import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import $api, { API_URL } from '../http';
import { IUser } from '../types/authResponse.type';

export default class AuthStore {
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

  async login(username: string, password: string, errorFunction: Function) {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      this.getUsername();
      this.setAuth(true);
    } catch (e) {
      errorFunction(e);
    }
  }

  async register(username: string, password: string, errorFunction: Function) {
    try {
      const response = await AuthService.register(username, password);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      this.getUsername();
      this.setAuth(true);
    } catch (e) {
      errorFunction(e);
    }
  }

  async logout() {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      this.setAuth(false);
      this.setUsername('');
    } catch (e) {}
  }

  async getUsername() {
    try {
      const response = await $api.get<IUser>(`${API_URL}user/info/`);
      this.setUsername(response.data.username);
    } catch (e) {}
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
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  }

  async test() {
    try {
      const response = await $api.get(`${API_URL}user/test/`);
      console.log(response);
    } catch (e) {}
  }
}
