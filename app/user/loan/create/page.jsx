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

import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import { Textarea } from "@/components/ui/textarea";
import loanStore from "../../userStore/loanStore";
import { loanValidationSchema } from "@/components/loanValidation/loanValidation";

const CreateLoan = () => {
  const [date, setDate] = React.useState();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const [value, setValue] = React.useState("");
  const {
    loans,
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
    setDateRange,
    applyForLoan,
    loading,
  } = loanStore();
  const isLoading = loanStore((state) => state.isLoading);

  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);
  // console.log(sucessMessage);

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          amount: "",
          purpose: "",
          membership: "",
        }}
        validationSchema={loanValidationSchema}
        onSubmit={async (values, { setSubmitting, resetform }) => {
          try {
            await applyForLoan(values);
            resetform();
          } catch (error) {
            setSubmitting(false);
          } finally {
            setSubmitting(false);
            setOpen(false);
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
                  <label className="block text-gray-700 text-[14px] mb-2">
                    Amount
                  </label>
                  <Input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Loan Amount"
                    value={values.amount}
                    onChange={handleChange}
                    className="w-full  border rounded-lg focus:outline-none focus-visible:ring-[1px] "
                  />
                  <CustomErrorMessage name="amount" />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700 text-[14px] mb-2">
                    Guarantor Membership Id(Please enter the membership id of
                    the gurantor you want to use.)
                  </label>
                  <Input
                    type="text"
                    id="membership"
                    name="membership"
                    placeholder="Membership Id"
                    value={values.membership}
                    onChange={handleChange}
                    className="w-full  border rounded-lg focus:outline-none focus-visible:ring-[1px] "
                  />
                  <CustomErrorMessage name="membership" />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-[14px] mb-2">
                    Purpose
                  </label>
                  <Textarea
                    id="purpose"
                    name="purpose"
                    value={values.purpose}
                    onChange={handleChange}
                    placeholder="Type your message here."
                    className="w-full h-[200px] px-4 py-2 border rounded-lg focus-visible:ring-[1px] focus:outline-none focus:ring-1 focus-visible::text-[#206bc4]"
                  />
                  <CustomErrorMessage name="purpose" />
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

                  <CardFooter>
                    <div>
                      <Button
                        type="submit"
                        size="lg"
                        className="me-3 rounded-1 cursor-pointer "
                        disabled={isSubmitting}
                      >
                        <Save />
                        {loading ? <Loading /> : "Save"}
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

export default CreateLoan;
