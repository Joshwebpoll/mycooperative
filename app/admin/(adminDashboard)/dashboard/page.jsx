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
// import userStores from "../adminStore/userStore";
import { useEffect } from "react";
import userStores from "../adminStore/userStore";
import { DahboardCards } from "@/components/dashboardCard/dashboardCard";
const Dashboard = () => {
  const { users, fetchUsers } = userStores();
  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
        <div className=" rounded ">
          <DahboardCards title="Total Number of User" totalNumber="200" />
        </div>
        <div className=" rounded ">
          <DahboardCards title="Total Number of User" totalNumber="200" />
        </div>
        <div className=" rounded ">
          <DahboardCards title="Total Number of User" totalNumber="200" />
        </div>
        <div className=" rounded ">
          <DahboardCards title="Total Number of User" totalNumber="200" />
        </div>
        <div className=" rounded ">
          <DahboardCards title="Total Number of User" totalNumber="200" />
        </div>
        <div className=" rounded ">
          <DahboardCards title="Total Number of User" totalNumber="200" />
        </div>
      </div>
      {/* <DahboardCards /> */}
    </div>
  );
};

export default Dashboard;
