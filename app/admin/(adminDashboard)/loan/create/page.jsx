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
import loanStore from "../../adminStore/loanStore";
import { Textarea } from "@/components/ui/textarea";
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

const CreateContribution = () => {
  const [date, setDate] = React.useState();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const [openss, setOpenss] = React.useState(false);
  const [openx, setOpenx] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = useState("");
  const [searchm, setSearchm] = useState("");
  const [selected, setSelected] = useState(false);
  console.log(value);
  const { createLoan, users, fetchUsers, loading } = loanStore();
  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(sucessMessage);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createLoan(values);
      console.log(values);
      toast.success("Created contribution successfully");
    } catch (err) {
      toast.error(err.msg);
    }
  };

  const filteredItems = users.filter((item) =>
    item.email.toLowerCase().includes(search.toLowerCase())
  );
  const filteredItemss = users.filter((item) =>
    item.email.toLowerCase().includes(searchm.toLowerCase())
  );

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          user_id: "",
          amount: "",
          purpose: "",
          guarantor_user_id: "",
          status: "",
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
                <div className="w-full max-w-2xl mx-auto mb-3 ">
                  <Label htmlFor="email" className="text-[14px] mb-1">
                    Choose Member
                  </Label>
                  <Command className="w-full  border border-gray-300">
                    <CommandInput
                      placeholder="Choose Member"
                      value={search}
                      onValueChange={(value) => {
                        setSearch(value);
                        setOpen(true);
                      }}
                      onFocus={() => setOpen(true)}
                      onBlur={() => setTimeout(() => setOpen(false), 100)}
                    />

                    {open && (
                      <CommandList className="max-h-60 overflow-y-auto">
                        {filteredItems.length > 0 ? (
                          <CommandGroup heading="Results">
                            {filteredItems.map((item, index) => (
                              <CommandItem
                                key={index}
                                onSelect={() => {
                                  setSearch(item.email); // Set the input value to the selected item
                                  setOpen(false); // Optionally close the dropdown
                                  setSelected(false); // Reset selected state when typing
                                  setFieldValue("user_id", item.id);
                                  //  setValue(item.email);
                                }}
                              >
                                {item.email}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        ) : (
                          <CommandEmpty>No results found.</CommandEmpty>
                        )}
                      </CommandList>
                    )}
                  </Command>
                </div>

                <div className="mb-3">
                  <Label htmlFor="amount" className="text-[14px] mb-1">
                    Amount Requested
                  </Label>

                  <Input
                    type="text"
                    id="amount"
                    name="amount"
                    placeholder="Amount"
                    onChange={handleChange}
                    value={values.amount}
                    className="py-5"
                  />
                </div>
                <div className="w-full max-w-2xl mx-auto mb-3 ">
                  <Label htmlFor="email" className="text-[14px] mb-1">
                    Choose Guarantor
                  </Label>
                  <Command className="w-full  border border-gray-300">
                    <CommandInput
                      placeholder="Choose a Guarantor"
                      value={searchm}
                      onValueChange={(value) => {
                        setSearchm(value);
                        setOpenx(true);
                      }}
                      onFocus={() => setOpenx(true)}
                      onBlur={() => setTimeout(() => setOpenx(false), 100)}
                    />

                    {openx && (
                      <CommandList className="max-h-60 overflow-y-auto">
                        {filteredItemss.length > 0 ? (
                          <CommandGroup heading="Results">
                            {filteredItemss.map((item, index) => (
                              <CommandItem
                                key={index}
                                onSelect={() => {
                                  setSearchm(item.email); // Set the input value to the selected item
                                  setOpenx(false); // Optionally close the dropdown
                                  setSelected(false); // Reset selected state when typing
                                  setFieldValue("guarantor_user_id", item.id);
                                  // setValue(item.email);
                                }}
                              >
                                {item.email}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        ) : (
                          <CommandEmpty>No results found.</CommandEmpty>
                        )}
                      </CommandList>
                    )}
                  </Command>
                </div>

                <div className="mb-3">
                  <Label className="text-[14px] mb-2" htmlFor="purpose">
                    Purpose of Loan Collection
                  </Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="purpose"
                    name="purpose"
                    onChange={handleChange}
                    value={values.purpose}
                    className="h-50"
                  />
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
                    <Select
                      value={values.status}
                      onValueChange={(val) => setFieldValue("status", val)}
                    >
                      <SelectTrigger className="w-[100%] py-5">
                        <SelectValue placeholder="Choose Loan Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="disbursed">Disbursed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                        <SelectItem value="defaulted">Defaulted</SelectItem>
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
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateContribution;
