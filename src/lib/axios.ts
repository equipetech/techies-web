import axios from 'axios';
import { parseCookies } from 'nookies';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getAPIClient(ctx?: any) {
  const { token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return api;
}

export const api = getAPIClient();
