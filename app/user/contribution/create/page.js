"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, LogOut, Save, SaveAll } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const CreateContribution = () => {
  const [date, setDate] = React.useState();
  return (
    <div className="w-[100%] ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="  lg:col-span-2 p-6  bg-[#ffffff] shadow-sm rounded">
          <div className="mb-3">
            <Label htmlFor="email" className="text-[14px] mb-1">
              Contribution Type
            </Label>
            <Select>
              <SelectTrigger className="w-[100%] py-5">
                <SelectValue placeholder="Contribution" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="savings">Savings</SelectItem>
                <SelectItem value="shares">Shares</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-3">
            <Label htmlFor="amount_contributed " className="text-[14px] mb-1">
              Amount Contributed
            </Label>

            <Input
              type="text"
              id="amount_contributed"
              placeholder="Amount Contributed"
              className="py-5"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="account_number" className="text-[14px] mb-1">
              Member Account Number
            </Label>

            <Input
              type="number"
              id="account_number"
              placeholder="Member Account Number"
              className="py-5"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="payment_method" className="text-[14px] mb-1">
              Payment Method
            </Label>

            <Input
              type="number"
              id="payment_method"
              placeholder="Payment Method"
              className="py-5"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="payment_method" className="text-[14px] mb-1">
              Deposit Date
            </Label>

            <Popover className="py-5">
              <PopoverTrigger asChild className="py-5">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[100%] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 py-5" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="mb-3">
            <Label htmlFor="email" className="text-[14px] mb-1">
              Contribution Type
            </Label>
            <Select>
              <SelectTrigger className="w-[100%] py-5">
                <SelectValue placeholder="Contribution" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="transfer">Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <h2 className="text-[16px] bg-white p-3  border-bottom border-b-2 shadow-sm rounded-end rounded-start">
            Publish
          </h2>
          <div className=" rounded bg-white p-5 shadow-sm">
            <div className="mb-3">
              <Label htmlFor="email" className="text-[14px] mb-1">
                Status
              </Label>
              <Select>
                <SelectTrigger className="w-[100%] py-5">
                  <SelectValue placeholder="Contribution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg" className="me-3 rounded-1 cursor-pointer ">
              <Save />
              Save
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer">
              {" "}
              <LogOut />
              Save & Exit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContribution;
