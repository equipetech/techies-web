'use client';

import { api } from '@/lib/axios';
import { AuthResponse, SignInCredentials, User } from '@/types/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { destroyCookie, setCookie } from 'nookies';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);

  // Busca usuário atual
  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) return null;

        const response = await api.get<User>('/me');
        return response.data;
      } catch {
        signOut();
        return null;
      }
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  // Mutation para login
  const signIn = useMutation({
    mutationFn: async (credentials: SignInCredentials) => {
      const response = await api.post<AuthResponse>('/login', credentials);
      return response.data;
    },
    onSuccess: (data) => {
      setCookie(undefined, 'token', data.token, {
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: '/',
        // domain: 'activ8.com.br',
        // secure: true,
      });

      localStorage.setItem('token', data.token);
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      toast.success('Olá, seja bem vindo!');
      router.replace('/dashboard');
    },
    onError: (error) => {
      console.error(error);
      toast.error('Ops! Usuário ou senha inválidos');
    },
  });

  // Logout
  const signOut = useCallback(async () => {
    destroyCookie(undefined, 'token');
    localStorage.removeItem('token');
    setUser(null);
    api.defaults.headers.Authorization = '';
    queryClient.clear(); // Limpa todas as queries
    router.push('/login');
  }, [queryClient, router]);

  // Atualiza usuário quando session mudar
  useEffect(() => {
    if (session) {
      setUser(session);
    }
  }, [session]);

  return {
    user,
    isAuthenticated: !!user,
    signIn: signIn.mutate,
    signOut,
    isLoading: signIn.isPending,
  };
}
