"use client";
import React, { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";

import DashboardLayoutProvider from "./providers";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import apiClient from "@/lib/axios";
import { useAuthStore } from "../(auth)/authStore/userAuthStore";

const Layout = ({ children }) => {
  const { login, loading, isUserLoading } = useAuthStore();
  const fetchProfile = useAuthStore((state) => state.fetchProfile);
  // const users = useAuthStore((state) => state.users);
  // // const [show, setShow] = useState(false);
  // const router = useRouter();
  // console.log(users);
  // useEffect(() => {
  //   fetchProfile();
  // }, [fetchProfile]);
  // useEffect(() => {
  //   if (Object.keys(users).length === 0) {
  //     router.push("/login");
  //     console.log("useEdd");
  //   }
  // }, [users]);

  return (
    <div className="bg-[#f9fbfd] w-full">
      <DashboardLayoutProvider>
        <div className="p-5">{children}</div>
      </DashboardLayoutProvider>
    </div>
    // #f9fbfd
    // #f6f8fb
  );
};

export default Layout;

// export default function ProtectLayout() {
//   return (
//     <ProtectRoute>
//       <Dashboard />
//     </ProtectRoute>
//   );
// }
