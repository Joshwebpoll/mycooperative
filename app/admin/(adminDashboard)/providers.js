import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../_components/AppSidebar";
import { SiteHeader } from "@/components/dashboardHeader/dashboardHeader";
import { usePathname } from "next/navigation";
// import { AppSidebar } from "@/components/app-sidebar";
const DashboardLayoutProvider = ({ children }) => {
  const route = usePathname();

  const pageName = route.split("/").filter(Boolean).pop();
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full overflow-x-scroll">
          <SiteHeader pageName={pageName} />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayoutProvider;
