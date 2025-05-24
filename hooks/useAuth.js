// hooks/useAuth.ts
import useSWR from "swr";
import fetcher from "./fetcher";

export default function useAuth() {
  const { data, error, isLoading } = useSWR("/api/user/profile", fetcher, {
    shouldRetryOnError: false, // Prevent infinite retries on unauthenticated
  });

  const isAuthenticated = !!data && !error;

  return {
    user: data ?? null,
    isLoading,
    isAuthenticated,
    error,
  };
}
