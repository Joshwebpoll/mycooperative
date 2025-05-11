"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { use, useEffect, useState } from "react";
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
import Loading from "@/components/loading_spinner/loading";
import userStores from "../../../adminStore/userStore";
import { Skeleton } from "@/components/ui/skeleton";
// import toast from "react-hot-toast";

// const LoginSchema = Yup.object().shape({
//   account_number: Yup.string()
//     .String("Invalid email, please try again")
//     .required("Email is required"),
//   amount_contributed: Yup.string()
//     .min(6, "Too short!")
//     .required("Password is required"),
// });

const EditUser = ({ params }) => {
  const { user } = use(params);
  const [date, setDate] = React.useState();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { Singleuser, getSingleUser, singleUser, sucessMessage, loading } =
    userStores();
  console.log(singleUser);
  useEffect(() => {
    getSingleUser(user);
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // await EditUsers(values);
      toast.success("Created contribution successfully");
    } catch (err) {
      toast.error(err.msg);
    }
  };

  if (loading) {
    return <Skeleton className="w-[100%] h-full rounded-full shadow-lg" />;
  }

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          name: singleUser.name || "",
          surname: singleUser.surname || "",
          lastname: singleUser.lastname || "",
          email: singleUser.email || "",
          username: singleUser.username || "",
          phone_number: singleUser.phone_number || "",
          username: singleUser.username || "",
          status: singleUser.status || "",
        }}
        enableReinitialize={true}
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
                  <Label htmlFor="name" className="text-[14px] mb-1">
                    First Name
                  </Label>

                  <Input
                    type="text"
                    id="amount_contributed"
                    placeholder="First Name"
                    value={values.name}
                    onChange={handleChange}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="surname" className="text-[14px] mb-1">
                    Surname
                  </Label>

                  <Input
                    type="text"
                    id="surname"
                    placeholder="Surname"
                    value={values.surname}
                    onChange={handleChange}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="lastname" className="text-[14px] mb-1">
                    Last Name
                  </Label>

                  <Input
                    type="text"
                    id="lastname"
                    placeholder="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="email" className="text-[14px] mb-1">
                    Email
                  </Label>

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Member Account Number"
                    onChange={handleChange}
                    value={values.email}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="phone_number" className="text-[14px] mb-1">
                    Phone Number
                  </Label>

                  <Input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={values.phone_number}
                    className="py-5"
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="username" className="text-[14px] mb-1">
                    Username
                  </Label>

                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={values.username}
                    className="py-5"
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
                        Select status
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enable">Enable</SelectItem>
                        <SelectItem value="disable">Disable</SelectItem>
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

export default EditUser;
