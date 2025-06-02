"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

import { DahboardCards } from "@/components/dashboardCard/dashboardCard";
import { Download } from "lucide-react";
import useSWR from "swr";
import apiClient from "@/lib/axios";
import { Skeleton } from "@/components/ui/skeleton";
const Dashboard = () => {
  const fetcher = (url) => apiClient.get(url).then((res) => res.data);
  const { data, isLoading } = useSWR("/api/admin/dashboard_summary", fetcher);
  console.log(data);
  // const { users, fetchUsers } = userStores();
  // console.log(users);
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const formattedTotalShares = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(data?.totalShares);

  const formattedTotalSavings = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(data?.totalSavings);

  if (isLoading) {
    return (
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 mb-10">
          <Skeleton className="h-[125px] rounded-xl bg-[#e1e6f0]" />
          <Skeleton className="h-[125px] rounded-xl bg-[#e1e6f0]" />
          <Skeleton className="h-[125px] rounded-xl bg-[#e1e6f0]" />
          <Skeleton className="h-[125px] rounded-xl bg-[#e1e6f0]" />
          <Skeleton className="h-[125px] rounded-xl bg-[#e1e6f0]" />
          <Skeleton className="h-[125px] rounded-xl bg-[#e1e6f0]" />
        </div>
        {/* <SkeletonTable columns={5} rows={5} /> */}
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
        <div className=" rounded ">
          <DahboardCards
            title="Total Shares"
            totalNumber={formattedTotalShares}
            Icon={Download}
          />
        </div>
        <div className=" rounded ">
          <DahboardCards
            title="Total Savings"
            totalNumber={formattedTotalSavings}
            Icon={Download}
          />
        </div>
        <div className=" rounded ">
          <DahboardCards
            title="Total User"
            totalNumber={data?.totalUser}
            Icon={Download}
          />
        </div>
        <div className=" rounded ">
          <DahboardCards
            title="Pending Loan"
            totalNumber={data?.pendingLoans}
            Icon={Download}
          />
        </div>
        <div className=" rounded ">
          <DahboardCards
            title="Active Loan"
            totalNumber={data?.activeLoan}
            Icon={Download}
          />
        </div>
        <div className=" rounded ">
          <DahboardCards
            title="Completed Loan"
            totalNumber={data?.completedLoans}
            Icon={Download}
          />
        </div>
        <div className=" rounded ">
          <DahboardCards
            title="Total Members"
            totalNumber={data?.totalMember}
            Icon={Download}
          />
        </div>
        <div className=" rounded ">
          <DahboardCards
            title="Total Referrals"
            totalNumber={data?.totalref}
            Icon={Download}
          />
        </div>
      </div>
      {/* <DahboardCards /> */}
    </div>
  );
};

export default Dashboard;
