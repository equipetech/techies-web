'use client';

import { useAuth } from '@/hooks/use-auth';
import { SignInCredentials, User } from '@/types/auth';
import { createContext, useContext } from 'react';

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
}
