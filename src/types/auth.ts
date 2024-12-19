export interface User {
  id: string;
  name: string;
  email: string;
  // outros campos do usuário
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
