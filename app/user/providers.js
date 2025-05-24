"use client";

import React, { useEffect, useState } from "react";
import Loan from "./loan/page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { SiteHeader } from "@/components/dashboardHeader/dashboardHeader";
import { usePathname, useRouter } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

import { useAuthStore } from "../(auth)/authStore/userAuthStore";
import useAuth from "@/hooks/useAuth";

const DashboardLayoutProvider = ({ children }) => {
  const users = useAuthStore((state) => state.users);
  const router = useRouter();
  const { user, isLoading, isAuthenticated } = useAuth();

  const route = usePathname();
  // console.log(route.split("/").filter(Boolean).pop(), "kkkk");
  const pageName = route.split("/").filter(Boolean).pop();

  console.log(user);
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return null; // avoid flicker before redirect

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        {/* <SidebarTrigger /> */}
        <SiteHeader pageName={pageName} />
        <Breadcrumb />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayoutProvider;

// export default function ProtectLayout() {
//   return (
//     <ProtectRoute>
//       <DashboardLayoutProvider />
//     </ProtectRoute>
//   );
// }
