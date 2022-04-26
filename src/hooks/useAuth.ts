import { useMemo } from 'react';

export const useAuth = () => {
  const token = "yes";
  return useMemo(() => ({ token }), [token])
}
