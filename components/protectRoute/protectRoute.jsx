// "use client";

// import { useEffect } from "react";
// import { redirect, useRouter } from "next/navigation";
// import { useAuthStore } from "@/app/(auth)/authStore/userAuthStore";

// export default function ProtectRoute({ children, roles }) {
//   const { fetchProfile, users, loading } = useAuthStore();
//   const router = useRouter();
//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       if (!users) {
//         router.replace("/login");
//       }
//       if (roles && !roles.includes(users.role)) {
//         router.replace("/login");
//       }
//     }
//   }, [users, loading]);
//   if (loading || !users) return null;
//   return <>{children}</>;
// }
