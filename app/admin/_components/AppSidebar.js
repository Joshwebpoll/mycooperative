"use client";
import {
  BookCheck,
  Calendar,
  ChevronRight,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import {
  CollapsibleContent,
  CollapsibleTrigger,
  Collapsible,
} from "@/components/ui/collapsible";
import { TeamSwitcher } from "@/components/team_switcher/TeamSwitcher";
export function AppSidebar({ ...props }) {
  // Menu items.
  const items = {
    main: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: Home,
      },
      {
        title: "Contribution",
        url: "/admin/contribution",
        icon: Save,
      },
      {
        title: "Loan",
        url: "/admin/loan",
        icon: BookCheck,
      },

      {
        title: "Loan Repayment",
        url: "/admin/repayment",
        icon: CreditCard,
      },
      {
        title: "Members",
        url: "/admin/members",
        icon: Home,
      },
      {
        title: "Interest",
        url: "/admin/interest",
        icon: Shield,
      },
      {
        title: "Referrals",
        url: "/admin/referrals",
        icon: Shield,
      },
      // {
      //   title: "Bulk Email",
      //   url: "/admin/bulkemail",
      //   icon: Mail,
      // },
      // {
      //   title: "Bulk Sms",
      //   url: "/admin/bulksms",
      //   icon: MessageSquare,
      // },
      // {
      //   title: "All Users",
      //   url: "/admin/users",
      //   icon: Users,
      //   item: [
      //     {
      //       title: "History",
      //       url: "#",
      //     },
      //     {
      //       title: "Starred",
      //       url: "#",
      //     },
      //     {
      //       title: "Settings",
      //       url: "#",
      //     },
      //   ],
      // },
    ],
    users: [
      {
        title: "User Care",
        url: "#",
        icon: BookCheck,
        item: [
          {
            title: "All User",
            url: "/admin/users",
          },
          {
            title: "Banks",
            url: "/admin/banks",
          },
          {
            title: "Account Number",
            url: "/admin/account",
          },
        ],
      },
    ],
    admin: [
      {
        title: "Admin Care",
        url: "#",
        icon: BookCheck,
        item: [
          {
            title: "All Admin",
            url: "/admin/adminroles",
          },
          {
            title: "Admin Roles",
            url: "/admin/adminroles/roles",
          },
          {
            title: "Role Permission",
            url: "/admin/adminroles/permission",
          },
        ],
      },
    ],
    loan: [
      {
        title: "Loan",
        url: "#",
        icon: BookCheck,
        item: [
          {
            title: "All Loan",
            url: "/admin/loan",
          },
          {
            title: "Approved Loan",
            url: "#",
          },
          {
            title: "Pending Loan",
            url: "#",
          },
        ],
      },
    ],
    subItem: [
      {
        title: "Notification",
        url: "#",
        icon: Users,
        item: [
          {
            title: "Dividends",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
    ],
    subItem: [
      {
        title: "Notifications",
        url: "#",
        icon: Users,
        item: [
          {
            title: "Dividends",
            url: "#",
          },
          {
            title: "Bulk Email",
            url: "/admin/bulkemail",
            icon: Mail,
          },
          {
            title: "Database Notification",
            url: "/admin/notifications",
          },
          {
            title: "Push Notification",
            url: "/admin/push",
          },
        ],
      },
    ],
  };

  console.log(items);
  const route = usePathname();
  // console.log(route);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="text-white bg-[#2e3847] text-center  pt-5 ">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="bg-[#2e3847]">
        <SidebarMenu className="">
          {items.main.map((item) => (
            <SidebarMenuItem
              key={item.title}
              className={` py-[4px] ${
                route.startsWith(item.url) ? "bg-[#206bc4] text-white " : ""
              }`}
            >
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url}>
                  <item.icon className="text-[13px] text-[#c1c4c8]" />
                  <span className="text-[14px] text-[#c1c4c8]">
                    {item.title}
                  </span>
                </a>
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
          {items.users.map((item) => (
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
                    {item.item?.map((subItem) => (
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

        <SidebarMenu>
          {items.loan.map((item) => (
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
                    {item.item?.map((subItem) => (
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
        <SidebarMenu>
          {items.subItem.map((item) => (
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
                    {item.item?.map((subItem) => (
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
        <SidebarMenu>
          {items.admin.map((item) => (
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
                    {item.item?.map((subItem) => (
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
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
