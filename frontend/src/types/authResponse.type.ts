export interface IUser {
  username: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
}

export interface IJWT {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
  username: string;
  email: string;
}
