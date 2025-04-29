import React from "react";

import DashboardLayoutProvider from "./providers";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f6f8fb] w-full">
      <DashboardLayoutProvider>
        <div className="p-5">{children}</div>
      </DashboardLayoutProvider>
    </div>
  );
};

export default Layout;
