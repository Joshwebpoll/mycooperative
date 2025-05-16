"use client";

import React, { useEffect } from "react";
import Loan from "./loan/page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { SiteHeader } from "@/components/dashboardHeader/dashboardHeader";
import { usePathname, useRouter } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
// import { AppSidebar } from "@/components/app-sidebar";
const DashboardLayoutProvider = ({ children }) => {
  const router = useRouter();
  // const user = null;

  // useEffect(() => {
  //   if (!user) {
  //     router.replace("/login");
  //   }
  // }, [user]);
  const route = usePathname();
  // console.log(route.split("/").filter(Boolean).pop(), "kkkk");
  const pageName = route.split("/").filter(Boolean).pop();

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
