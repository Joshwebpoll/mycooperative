"use client";

// lib/useGuestRedirect.ts
import { useEffect, useState } from "react";

import apiClient from "@/lib/axios";
import { useRouter } from "next/navigation";

export function useGuestRedirect(to = "/user/dashboard") {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkGuest = async () => {
      try {
        const res = await apiClient.get("/api/user/profile");
        if (res.data) {
          router.replace(to); // If logged in, redirect to dashboard
        }
      } catch {
        // Not logged in, continue to login/register
      } finally {
        setChecking(false);
      }
    };

    checkGuest();
  }, [router, to]);

  return checking; // You can use this to optionally show nothing while checking
}
