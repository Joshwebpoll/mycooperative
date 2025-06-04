"use client";

import React, { useEffect, useState } from "react";
import Loan from "./loan/page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { SiteHeader } from "@/components/dashboardHeader/dashboardHeader";
import { usePathname, useRouter } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

import { useAuthStore } from "../(auth)/authStore/userAuthStore";
// import useAuth from "@/hooks/useAuth";
import useAuth from "./../../hooks/useAuth";

const DashboardLayoutProvider = ({ children }) => {
  const users = useAuthStore((state) => state.users);

  const route = usePathname();
  // console.log(route.split("/").filter(Boolean).pop(), "kkkk");
  const pageName = route.split("/").filter(Boolean).pop();

  const user = useAuth();

  if (!user) {
    // Redirect triggered, render nothing
    return null;
  }

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
