"use client";
import {
  BookCheck,
  Calendar,
  CreditCard,
  Home,
  Inbox,
  Mail,
  MessageSquare,
  Save,
  Search,
  Settings,
  Shield,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
export function AppSidebar() {
  // Menu items.
  const items = [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: Home,
    },
    {
      title: "Member Contribution",
      url: "/user/contribution",
      icon: Save,
    },
    {
      title: "Loan Application",
      url: "/user/loan",
      icon: BookCheck,
    },

    {
      title: "Loan Repayment",
      url: "/user/repayment",
      icon: CreditCard,
    },
    {
      title: "Member",
      url: "/user/members",
      icon: Home,
    },
    {
      title: "KYC Verification",
      url: "/user/verification",
      icon: Home,
    },
  ];
  const route = usePathname();
  console.log(route);
  return (
    <Sidebar>
      <SidebarContent className="bg-[#2e3847]">
        <SidebarHeader className="text-white text-center mt-5">
          Araromi Cooperative
        </SidebarHeader>
        <SidebarGroup>
          {/* <SidebarGroupLabel className="text-[16px] font-bold">
            Our Cooperative
          </SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={` p-[4px] ${
                    route == item.url ? "bg-[#206bc4] text-white rounded" : ""
                  }`}
                >
                  <SidebarMenuButton
                    asChild
                    className="transition-all duration-500 tracking-normal hover:tracking-widest"
                  >
                    <a href={item.url}>
                      <item.icon className="text-[13px] text-[#c1c4c8]" />
                      <span className="text-[14px] text-[#c1c4c8]">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
