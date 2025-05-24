"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import {
  CalendarIcon,
  ChevronsUpDown,
  LogOut,
  Save,
  SaveAll,
} from "lucide-react";
import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import contributionStore from "../../adminStore/contributionStore";
// import { toast as my } from "react-toastify";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { toast } from "sonner";
import Loading from "@/components/loading_spinner/loading";
import { contributionSchema } from "../validationSchema/validationSchema";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";

const CreateContribution = () => {
  const [date, setDate] = React.useState();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { users, fetchUsers, sucessMessage, loading, isCreatingLoading } =
    contributionStore();
  const createContributions = contributionStore(
    (state) => state.createContributions
  );
  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(sucessMessage);

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          account_number: "",
          contribution_type: "",
          amount_contributed: "",
          status: "",
          payment_method: "",
          contribution_date: "",
          contribution_deposit_type: "",
        }}
        validationSchema={contributionSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await createContributions(values);
            resetForm();
          } catch (err) {
            console.log(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="  lg:col-span-2 p-6  bg-[#ffffff] shadow-xl rounded-xl">
                <div className="mb-3">
                  <Label htmlFor="email" className="text-[14px] mb-1">
                    Contribution Type
                  </Label>
                  <Select
                    value={values.contribution_type}
                    onValueChange={(val) =>
                      setFieldValue("contribution_type", val)
                    }
                  >
                    <SelectTrigger className="w-[100%] ">
                      <SelectValue placeholder="Contribution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Contribution</SelectLabel>
                        <SelectItem value="savings">Savings</SelectItem>
                        <SelectItem value="shares">Shares</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <CustomErrorMessage name="contribution_type" />
                </div>

                <div className="mb-3">
                  <Label
                    htmlFor="amount_contributed "
                    className="text-[14px] mb-1"
                  >
                    Amount Contributed
                  </Label>

                  <Input
                    type="text"
                    id="amount_contributed"
                    placeholder="Amount Contributed"
                    value={values.amount_contributed}
                    onChange={handleChange}
                    className=""
                  />
                  <CustomErrorMessage name="amount_contributed" />
                </div>
                <div className="mb-3">
                  <Label htmlFor="account_number" className="text-[14px] mb-1">
                    Member Account Number
                  </Label>

                  <Input
                    type="text"
                    id="account_number"
                    name="account_number"
                    placeholder="Member Account Number"
                    onChange={handleChange}
                    value={values.account_number}
                    className=""
                  />
                  <CustomErrorMessage name="account_number" />
                </div>
                <div className="mb-3">
                  <Label htmlFor="payment_method" className="text-[14px] mb-1">
                    Payment Method
                  </Label>

                  <Input
                    type="text"
                    id="payment_method"
                    placeholder="Payment Method"
                    onChange={handleChange}
                    value={values.payment_method}
                    className=""
                  />
                  <CustomErrorMessage name="payment_method" />
                </div>
                <div className="mb-3">
                  <Label htmlFor="payment_method" className="text-[14px] mb-1">
                    Deposit Date
                  </Label>

                  <Popover className="">
                    <PopoverTrigger asChild className="">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[100%] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        {values.contribution_date
                          ? format(values.contribution_date, "PPP")
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 " align="start">
                      <Calendar
                        // mode="single"
                        // selected={date}
                        // onSelect={setDate}
                        // initialFocus
                        mode="single"
                        selected={values.contribution_date}
                        onSelect={(date) =>
                          setFieldValue("contribution_date", date)
                        }
                        disabled={{ before: new Date() }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="mb-3">
                  <Label htmlFor="email" className="text-[14px] mb-1">
                    Contribution Type
                  </Label>
                  <Select
                    value={values.contribution_deposit_type}
                    onValueChange={(val) =>
                      setFieldValue("contribution_deposit_type", val)
                    }
                    name="contribution_deposit_type"
                  >
                    <SelectTrigger className="w-[100%] ">
                      <SelectValue placeholder="Contribution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Deposit</SelectLabel>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="transfer">Transfer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <CustomErrorMessage name="contribution_deposit_type" />
                </div>
              </div>
              <div>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Publish</CardTitle>

                    {/* <CardDescription>
                      You have 3 unread messages.
                    </CardDescription> */}
                  </CardHeader>
                  <hr />
                  <CardContent className="grid gap-4">
                    <div className="mb-3">
                      <Label htmlFor="email" className="text-[14px] mb-1">
                        Status
                      </Label>
                      <Select
                        value={values.status}
                        onValueChange={(val) => setFieldValue("status", val)}
                      >
                        <SelectTrigger className="w-[100%] ">
                          <SelectValue placeholder="Contribution" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                      <CustomErrorMessage name="status" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <Button
                        type="submit"
                        size="lg"
                        className="me-3 rounded-1 cursor-pointer "
                        disabled={isSubmitting}
                      >
                        <Save />
                        {isCreatingLoading ? <Loading /> : "Save"}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        {" "}
                        <LogOut />
                        Save & Exit
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateContribution;
