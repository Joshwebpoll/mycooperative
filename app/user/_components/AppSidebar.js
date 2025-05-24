"use client";
import {
  BookCheck,
  Calendar,
  CalendarPlus,
  ChevronRight,
  CircleUser,
  CreditCard,
  Home,
  Inbox,
  Landmark,
  LogOut,
  Mail,
  MessageSquare,
  Save,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import {
  CollapsibleContent,
  CollapsibleTrigger,
  Collapsible,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TeamSwitcher } from "@/components/team_switcher/TeamSwitcher";
import { useState } from "react";

export function AppSidebar({ ...props }) {
  // Menu items.
  const items = {
    main: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: Home,
      },
      {
        title: "Member Contribution",
        url: "/user/contribution",
        icon: CalendarPlus,
      },
      {
        title: "Loan Application",
        url: "/user/loan",
        icon: Landmark,
      },

      {
        title: "Loan Repayment",
        url: "/user/repayment",
        icon: CreditCard,
      },
      {
        title: "Member",
        url: "/user/members",
        icon: UserCheck,
      },
      {
        title: "Referrals",
        url: "/user/referrals",
        icon: CircleUser,
      },
    ],
    veri: [
      {
        title: "KYC Verification",
        url: "/user/verification",
        icon: ShieldCheck,
        verification: [
          {
            title: "Nin Verification",
            url: "/user/nin",
            icon: Home,
          },
          {
            title: "Bvn Verification",
            url: "/user/bvn",
            icon: Home,
          },
        ],
      },
    ],
    settings: [
      {
        title: "Settings",
        url: "/user/settings",
        icon: Settings,
        profile: [
          {
            title: "Profile",
            url: "/user/profile",
            icon: Home,
          },
          {
            title: "Bank",
            url: "#",
            icon: Home,
          },
        ],
      },
    ],
  };
  const route = usePathname();

  const pageName = route.split("/").filter(Boolean).pop();
  const [active, setActive] = useState(false);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="text-white bg-[#2e3847] text-center  pt-5 ">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="bg-[#2e3847] pt-2">
        <SidebarMenu className="">
          {items.main.map((item) => (
            <SidebarMenuItem
              key={item.title}
              className={` py-[5px] ${
                route.startsWith(item.url) ? "bg-[#206bc4] text-white " : ""
              }`}
            >
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link href={item.url}>
                  <item.icon size={28} className="text-[13px] text-[#c1c4c8]" />
                  <span className="text-[14px] text-[#c1c4c8]">
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
              {/* <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent> */}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarMenu>
          {items.veri?.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    onClick={() => setActive(!active)}
                    className={` ${active ? "bg-[#206bc4] text-white" : ""}`}
                  >
                    {item.icon && (
                      <item.icon className="text-[13px] text-[#c8c1c5] " />
                    )}
                    <span className="text-[14px] text-[#c1c4c8] ">
                      {item.title}
                    </span>
                    <ChevronRight className="text-white cursor-pointer ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.verification?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span
                              className={`text-[14px] py-[5px] text-[#c1c4c8] `}
                            >
                              {subItem.title}
                            </span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>

        <SidebarMenu>
          {items.settings?.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && (
                      <item.icon className="text-[13px] text-[#c1c4c8]" />
                    )}
                    <span className="text-[14px] text-[#c1c4c8]">
                      {item.title}
                    </span>
                    <ChevronRight className="text-white cursor-pointer ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.profile?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span className="text-[14px] text-[#c1c4c8]">
                              {subItem.title}
                            </span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="bg-[#2e3847] pt-2">
        <div className="flext ">
          <LogOut />
          Log out
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
