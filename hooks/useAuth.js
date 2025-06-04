"use client";

// // hooks/useAuth.ts
// import useSWR from "swr";
// import fetcher from "./fetcher";

// export default function useAuth() {
//   const { data, error, isLoading } = useSWR("/api/user/profile", fetcher, {
//     shouldRetryOnError: false, // Prevent infinite retries on unauthenticated
//   });

//   const isAuthenticated = !!data && !error;

//   return {
//     user: data ?? null,
//     isLoading,
//     isAuthenticated,
//     error,
//   };
// }

// lib/useAuth.ts

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/axios";

export default function useAuth(redirectTo = "/login") {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await apiClient.get("/api/user/profile");
        setUser(res.data);
      } catch (error) {
        router.replace(redirectTo);
      }
    }
    checkAuth();
  }, [router, redirectTo]);

  return user;
}
