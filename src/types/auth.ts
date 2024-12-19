export interface User {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  localizacao: string;
  // outros campos do usuário
}

export interface SignInCredentials {
  email: string;
  senha: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
