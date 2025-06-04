// components/GuestOnly.tsx
import { useEffect, useState } from "react";

import apiClient from "../lib/axios";
import { useRouter } from "next/navigation";

export default function GuestOnly({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await apiClient("/api/user/profile");
        if (res.data) {
          router.replace("/user/dashboard"); // Already logged in
        } else {
          setLoading(false); // Not logged in
        }
      } catch {
        setLoading(false); // Not logged in or error
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return null; // 👈 prevent any render

  return <>{children}</>;
}
