'use client';

import { api } from '@/lib/axios';
import { User } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await api.get<User>('/me');
      return data;
    },
    staleTime: 1000 * 60 * 30, // 30 minutos de cache
    retry: false,
  });

  return {
    user,
    isLoading,
    error,
  };
}
