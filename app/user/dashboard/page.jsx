"use client";

import React, { useEffect } from "react";
import memberStore from "../userStore/memberStore";
import { createColumnHelper } from "@tanstack/react-table";
import DataTable from "@/components/DataTable";

import { DahboardCards } from "@/components/dashboardCard/dashboardCard";
import dashboardStore from "../userStore/dashboardStore";
import {
  CreditCard,
  Cylinder,
  Download,
  MonitorCheck,
  PackageCheck,
  TrendingUpDown,
  Users,
} from "lucide-react";
import { DashboardTable } from "./dashboardTable";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonTable from "@/components/tableSkeleton/tableSkeleton";
import profileStore from "../userStore/profileStore";
import { Button } from "@/components/ui/button";
import ReferralLink from "./referralLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// const data = [
//   {
//     id: 1,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 2,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 4,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 5,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 6,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 7,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 8,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 9,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 10,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 11,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 12,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
// ];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: "membership_number",
    header: "Membership_number",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "membership_number",
    header: "Membership Number",
    cell: (info) => (
      <span className="font-medium text-blue-700">{info.getValue()}</span>
    ),
  },
  {
    accessorKey: "full_name",
    header: "Full Name",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "id_number",
    header: "Member Id",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "total_shares",
    header: "Total Shares",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "total_savings",
    header: "Total Savings",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button
          onClick={() => alert(`Editing ${row.original.name}`)}
          className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting ${row.original.name}`)}
          className="text-sm bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    ),
  },
];
const Dashboard = () => {
  const fetchDashboard = dashboardStore((state) => state.fetchDashboard);
  const total_savings = dashboardStore((state) => state.total_savings);
  const total_shares = dashboardStore((state) => state.total_shares);
  const activeLoan = dashboardStore((state) => state.activeLoan);
  const pendingLoan = dashboardStore((state) => state.pending_loans);
  const completedLoans = dashboardStore((state) => state.completedLoans);
  const totalRepayment = dashboardStore((state) => state.totalRepayment);
  const totalReferrals = dashboardStore((state) => state.totalReferrals);
  const fetchLatestContribution = dashboardStore(
    (state) => state.fetchLatestContribution
  );
  const latestContribution = dashboardStore(
    (state) => state.latestContribution
  );
  const loading = dashboardStore((state) => state.loading);
  const isLoading = dashboardStore((state) => state.isLoading);
  const personalUser = profileStore((state) => state.personalUser);
  const getSingleUserUpdate = profileStore(
    (state) => state.getSingleUserUpdate
  );
  useEffect(() => {
    getSingleUserUpdate();
  }, [getSingleUserUpdate]);

  useEffect(() => {
    fetchLatestContribution();
  }, [fetchLatestContribution]);
  console.log(personalUser);
  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);
  console.log(total_savings);

  const formattedTotalSavings = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(total_savings);
  const formattedTotalShares = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(total_shares);
  const formattedTotalRepayment = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(totalRepayment);

  if (loading) {
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
        <SkeletonTable columns={5} rows={5} />
      </div>
    );
  }
  let link = `https://araromicooperative/register?ref=${personalUser.referral_code}`;
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 mb-10">
        <div>
          <DahboardCards
            title="Total Savings"
            totalNumber={formattedTotalSavings ? formattedTotalSavings : "0.00"}
            Icon={Download}
          />
        </div>
        <div className="">
          <DahboardCards
            title="Total Shares"
            totalNumber={formattedTotalShares ? formattedTotalShares : "0.00"}
            Icon={Cylinder}
          />
        </div>
        <div className="">
          <DahboardCards
            title="Total Reapyment"
            totalNumber={
              formattedTotalRepayment ? formattedTotalRepayment : "0.00"
            }
            Icon={CreditCard}
          />
        </div>
        <div className="">
          <DahboardCards
            title="Pending Loan"
            totalNumber={pendingLoan ? pendingLoan : "0"}
            Icon={TrendingUpDown}
          />
        </div>
        <div className="">
          <DahboardCards
            title="Active Loan"
            totalNumber={activeLoan ? activeLoan : "0"}
            Icon={MonitorCheck}
          />
        </div>

        <div className="  ">
          <DahboardCards
            title="Completed Loan"
            totalNumber={completedLoans ? completedLoans : "0"}
            Icon={PackageCheck}
          />
        </div>

        {/* <div className="  ">
          <DahboardCards
            title="Completed Loan"
            totalNumber={completedLoans ? completedLoans : "0"}
            Icon={PackageCheck}
          />
        </div> */}
        <div className="  ">
          <DahboardCards
            title="Total Referrals"
            totalNumber={totalReferrals}
            Icon={Users}
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 mb-10">
          <ReferralLink referralUrl={link} />
        </div>
      </div>
      <div>
        {/* <h1>Resent Contribution</h1> */}
        <Tabs defaultValue="recent_contribution">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent_contribution">
              Recent Contribution
            </TabsTrigger>
            <TabsTrigger value="recent_repayment">Recent Repayment</TabsTrigger>
            <TabsTrigger value="referrals">Referrals</TabsTrigger>
          </TabsList>
          <TabsContent value="recent_contribution">
            <DashboardTable data={latestContribution} />
          </TabsContent>
          <TabsContent value="recent_repayment">
            <h1>Hello word</h1>
            <DashboardTable data={latestContribution} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
