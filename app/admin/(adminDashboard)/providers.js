import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../_components/AppSidebar";
import { SiteHeader } from "@/components/dashboardHeader/dashboardHeader";
// import { AppSidebar } from "@/components/app-sidebar";
const DashboardLayoutProvider = ({ children }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full overflow-x-scroll">
          <SiteHeader />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayoutProvider;
