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
  Eye,
  EyeOff,
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
import contributionStore from "../../adminStore/contributionStore";
import adminRoleStore from "../../adminStore/adminroleStore";
import { AdminvalidationSchema } from "./validationSchema";

const CreateAdmin = () => {
  const [date, setDate] = React.useState();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);

  const { users, fetchUsers, sucessMessage, loading, isCreatingLoading } =
    contributionStore();
  const createContributions = contributionStore(
    (state) => state.createContributions
  );
  const fetchAllRoleWithOutPagination = adminRoleStore(
    (state) => state.fetchAllRoleWithOutPagination
  );
  const allRolesPag = adminRoleStore((state) => state.allRolesPag);
  useEffect(() => {
    fetchAllRoleWithOutPagination();
  }, []);
  console.log(allRolesPag);

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          email: "",
          first_name: "",
          last_name: "",
          password: "",
          username: "",
          confirm_password: "",
          phone_number: "",
          role: "",
          status: "",
        }}
        validationSchema={AdminvalidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            // await createContributions(values);
            console.log(values);
            // resetForm();
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
                <div className="">
                  <div className="mb-3">
                    <Label className="text-[14px] mb-1" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="email" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-[14px] mb-1" htmlFor="first_name">
                      First Name
                    </Label>
                    <Input
                      name="first_name"
                      id="first_name"
                      type="first_name"
                      placeholder="First Name"
                      value={values.first_name}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="first_name" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-[14px] mb-1" htmlFor="last_name">
                      Last Name
                    </Label>
                    <Input
                      name="last_name"
                      id="last_name"
                      type="text"
                      placeholder="Last Name"
                      value={values.last_name}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="last_name" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-[14px] mb-1" htmlFor="username">
                      Username
                    </Label>
                    <Input
                      name="username"
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="username" />
                  </div>
                  <div className="mb-3">
                    <Label className="text-[14px] mb-1" htmlFor="phone_number">
                      Phone Number
                    </Label>
                    <Input
                      name="phone_number"
                      id="phone_number"
                      type="number"
                      placeholder="Phone Number"
                      value={values.phone_number}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="phone_number" />
                  </div>
                  <div className="mb-3 relative space-y-1">
                    <Label className="text-[14px] mb-1" htmlFor="password">
                      Password
                    </Label>

                    <Input
                      name="password"
                      id="password"
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShow((s) => !s)}
                      className="absolute right-2 top-[38px] h-auto px-1"
                    >
                      {show ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                    <CustomErrorMessage name="password" />
                  </div>
                </div>
              </div>

              <div>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Publish</CardTitle>
                  </CardHeader>
                  <hr />
                  <CardContent className="grid gap-4">
                    <div className="mb-3">
                      <Label htmlFor="roles" className="text-[14px] mb-1">
                        Roles
                      </Label>
                      <Select
                        value={String(values.role)} // Ensure string for matching
                        onValueChange={(val) =>
                          setFieldValue("role", Number(val))
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          {allRolesPag.map((data) => (
                            <SelectItem key={data.id} value={String(data.id)}>
                              {data.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <CustomErrorMessage name="role" />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="email" className="text-[14px] mb-1">
                        Status
                      </Label>
                      <Select
                        value={values.status}
                        onValueChange={(val) => setFieldValue("status", val)}
                      >
                        <SelectTrigger className="w-[100%] ">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enable">Enable</SelectItem>
                          <SelectItem value="disable">Disable</SelectItem>
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

export default CreateAdmin;
