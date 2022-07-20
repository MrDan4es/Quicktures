export interface IUser {
    username: string;
}

export interface RegisterResponse {
    user: IUser;
    access: string;
    refresh: string;
}

export interface LoginResponse {
    access: string;
    refresh: string;
}
