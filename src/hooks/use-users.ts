'use client';

import { api } from '@/lib/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  email: string;
}

export function useUsers() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await api.get<User[]>('/users');
      return data;
    },
  });

  const createUser = useMutation({
    mutationFn: async (userData: Omit<User, 'id'>) => {
      const { data } = await api.post<User>('/users', userData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return {
    users: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    createUser: createUser.mutate,
  };
}
