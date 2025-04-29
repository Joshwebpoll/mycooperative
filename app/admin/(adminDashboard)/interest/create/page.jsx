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
  Check,
  ChevronsUpDown,
  LogOut,
  Save,
  SaveAll,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import interestStore from "../../adminStore/interestStore";
import Loading from "@/components/loading_spinner/loading";
// import toast from "react-hot-toast";

// const LoginSchema = Yup.object().shape({
//   account_number: Yup.string()
//     .String("Invalid email, please try again")
//     .required("Email is required"),
//   amount_contributed: Yup.string()
//     .min(6, "Too short!")
//     .required("Password is required"),
// });

const CreateInterest = () => {
  const [date, setDate] = React.useState();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { createInterest, loading } = interestStore();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createInterest(values);
      toast.success("Created interest successfully");
    } catch (err) {
      toast.error(err.msg);
    }
  };

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          interest_rate: "",
          min_amount: "",
          max_amount: "",
        }}
        //validationSchema={LoginSchema}
        onSubmit={handleSubmit}
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
              <div className="  lg:col-span-2 p-6  bg-[#ffffff] shadow-sm rounded">
                <div className="mb-3">
                  <Label htmlFor="interest_rate " className="text-[14px] mb-1">
                    Amount Contributed
                  </Label>

                  <Input
                    type="text"
                    id="interest_rate"
                    placeholder="Amount Contributed"
                    value={values.interest_rate}
                    onChange={handleChange}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="max_amount" className="text-[14px] mb-1">
                    Maximum
                  </Label>

                  <Input
                    type="text"
                    id="max_amount"
                    name="max_amount"
                    placeholder="Member Account Number"
                    onChange={handleChange}
                    value={values.max_amount}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="max_amount" className="text-[14px] mb-1">
                    Minimum Amount
                  </Label>

                  <Input
                    type="text"
                    id="min_amount"
                    name="min_amount"
                    placeholder="Member Account Number"
                    onChange={handleChange}
                    value={values.min_amount}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="email" className="text-[14px] mb-1">
                    Status
                  </Label>
                  <Select
                    value={values.status}
                    onValueChange={(val) => setFieldValue("status", val)}
                  >
                    <SelectTrigger className="w-[100%] py-5">
                      <SelectValue placeholder="Contribution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="me-3 rounded-1 cursor-pointer "
                >
                  <Save />
                  {loading ? <Loading /> : "Save"}
                </Button>
                <Button size="lg" variant="outline" className="cursor-pointer">
                  {" "}
                  <LogOut />
                  Save & Exit
                </Button>
              </div>
              {/* <div>
                <h2 className="text-[16px] bg-white p-3  border-bottom border-b-2 shadow-sm rounded-end rounded-start">
                  Publish
                </h2>
                <div className=" rounded bg-white p-5 shadow-sm">
                  <div className="mb-3">
                    <Label htmlFor="email" className="text-[14px] mb-1">
                      Status
                    </Label>
                    <Select
                      value={values.status}
                      onValueChange={(val) => setFieldValue("status", val)}
                    >
                      <SelectTrigger className="w-[100%] py-5">
                        <SelectValue placeholder="Contribution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="me-3 rounded-1 cursor-pointer "
                  >
                    <Save />
                    Save
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
              </div> */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateInterest;
