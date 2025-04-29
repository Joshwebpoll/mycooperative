"use client";
import React from "react";

import DashboardLayoutProvider from "./providers";
import { usePathname, useRouter } from "next/navigation";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f6f8fb] w-full">
      {/* <DashboardLayoutProvider />
      <div className="p-5">{children}</div> */}
      <DashboardLayoutProvider>
        <div className="p-5">{children}</div>
      </DashboardLayoutProvider>
    </div>
  );
};

export default Layout;
