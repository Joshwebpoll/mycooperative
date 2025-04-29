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
  const [value, setValue] = React.useState("");

  const { createContributions, users, fetchUsers, sucessMessage, loading } =
    contributionStore();
  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(sucessMessage);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createContributions(values);
      toast.success("Created contribution successfully");
    } catch (err) {
      toast.error(err.msg);
    }
  };
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          member_id: "",
          account_number: "",
          contribution_type: "",
          amount_contributed: "",
          status: "",
          payment_method: "",
          contribution_date: "",
          contribution_deposit_type: "",
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
                    className="py-5"
                  />
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
                    className="py-5"
                  />
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
                        {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
                        {values.contribution_date
                          ? format(values.contribution_date, "PPP")
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 py-5" align="start">
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
                    <SelectTrigger className="w-[100%] py-5">
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
                </div>
              </div>
              <div>
                <h2 className="text-[16px] bg-white p-3  border-bottom border-b-2 shadow-sm rounded-end rounded-start">
                  Publish
                </h2>
                <div className=" rounded bg-white p-5 shadow-sm">
                  <div className="mb-3">
                    <Label htmlFor="email" className="text-[14px] mb-1">
                      Choose Member
                    </Label>
                    <Popover open={opens} onOpenChange={setOpens}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-[100%] justify-between "
                        >
                          {value
                            ? users.find(
                                (framework) => framework.email === value
                              )?.email
                            : "Select member..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command className="w-full">
                          <CommandInput
                            placeholder="Search framework..."
                            className="w-full"
                          />
                          <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup className="w-full">
                              {users.map((framework) => (
                                <CommandItem
                                  key={framework.email}
                                  value={framework.email}
                                  onSelect={() => {
                                    setFieldValue("member_id", framework.id);
                                    setValue(framework.email);
                                    setOpens(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      value === framework.email
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {framework.email}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
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
