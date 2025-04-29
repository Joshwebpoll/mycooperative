import React from "react";
import Loan from "./loan/page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { SiteHeader } from "@/components/dashboardHeader/dashboardHeader";
// import { AppSidebar } from "@/components/app-sidebar";
const DashboardLayoutProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        {/* <SidebarTrigger /> */}
        <SiteHeader />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayoutProvider;
