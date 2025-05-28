"use client";
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, BellIcon } from "lucide-react";
import Link from "next/link";
import userStores from "@/app/user/userStore/userStore";
import { useRouter } from "next/navigation";
import profileStore from "@/app/user/userStore/profileStore";
import useSWR from "swr";
import apiClient from "@/lib/axios";

import NotificationBell from "../notificationDetails/notificationDetails";

import NotificationDetails from "../notificationDetails/notificationDetails";

export function SiteHeader({ pageName }) {
  const [position, setPosition] = React.useState("right");
  const logOutUser = userStores((state) => state.logOutUser);
  const getSingleUserUpdate = profileStore(
    (state) => state.getSingleUserUpdate
  );
  const personalUser = profileStore((state) => state.personalUser);
  const router = useRouter();
  React.useEffect(() => {
    getSingleUserUpdate();
  }, []);
  const handleClick = async () => {
    await logOutUser(router);
  };
  function getTimeBasedGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    } else if (hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
  const greeting = getTimeBasedGreeting();

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 text-[18px]" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className=" w-full flex justify-between items-center ">
          <h1 className="text-base font-medium capitalize">{pageName}</h1>

          <p className="text-[16px] text-muted-foreground">
            {greeting},{" "}
            <span className="font-medium text-foreground capitalize">
              {personalUser.username}
            </span>{" "}
            👋
          </p>

          <div className="flex items-center gap-3 justify-center mr-[30px]">
            <NotificationDetails />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="bg-green-600">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/user/profile">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>

                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem onClick={handleClick}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
              {/* <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent> */}
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
