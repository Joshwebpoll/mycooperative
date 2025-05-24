import { useAuthStore } from "@/app/(auth)/authStore/userAuthStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const { login, loading, isUserLoading } = useAuthStore();
  const fetchProfile = useAuthStore((state) => state.fetchProfile);
  const users = useAuthStore((state) => state.users);
  // const [show, setShow] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  useEffect(() => {
    if (Object.keys(users).length === 0) {
      router.push("/login");
    }
  }, [users, router]);

  if (Object.keys(users).length === 0) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectRoute;
