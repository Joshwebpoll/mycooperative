import { useRouter } from "next/navigation";
import useAuth from "./useAuth";
import { useEffect } from "react";

export function useGuestRedirect(to = "/user/dashboard") {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace(to);
    }
  }, [isLoading, isAuthenticated]);

  return { isLoading, isAuthenticated };
}
