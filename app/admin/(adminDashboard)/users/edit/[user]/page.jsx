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

import { toast } from "sonner";
import Loading from "@/components/loading_spinner/loading";
import userStores from "../../../adminStore/userStore";
import { Skeleton } from "@/components/ui/skeleton";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import adminRoleStore from "../../../adminStore/adminroleStore";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const EditUser = ({ params }) => {
  const { user } = use(params);
  const [date, setDate] = React.useState();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { Singleuser, getSingleUser, singleUser, sucessMessage, loading } =
    userStores();
  const updateUser = userStores((state) => state.updateUser);
  const updateLoading = userStores((state) => state.updateLoading);
  const allRolesPag = adminRoleStore((state) => state.allRolesPag);
  const fetchAllRoleWithOutPagination = adminRoleStore(
    (state) => state.fetchAllRoleWithOutPagination
  );
  useEffect(() => {
    fetchAllRoleWithOutPagination();
  }, []);
  useEffect(() => {
    getSingleUser(user);
  }, []);

  // if (loading) {
  //   return <Skeleton className="w-[100%] h-full rounded-full shadow-lg" />;
  // }

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          name: singleUser?.name || "",
          surname: singleUser?.surname || "",
          lastname: singleUser?.lastname || "",
          email: singleUser?.email || "",
          username: singleUser?.username || "",
          phone_number: singleUser?.phone_number || "",
          username: singleUser?.username || "",
          status: singleUser?.status || "",
          role: singleUser?.roles?.[0] || "",
          userid: singleUser?.id,
          date_of_birth: singleUser?.date_of_birth || "",
          country: singleUser?.country || "",
          state: singleUser?.state || "",
          address: singleUser?.address || "",
          city: singleUser?.city || "",
          gender: singleUser?.gender || "",
        }}
        enableReinitialize={true}
        //validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await updateUser(values);
            console.log(values);
          } catch (err) {
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
                {/* <div className="mb-3">
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
                </div> */}
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
                <div className="mb-3">
                  <Label htmlFor="address" className="text-[14px] mb-1">
                    Address
                  </Label>

                  <Input
                    type="text"
                    id="address"
                    placeholder="Address"
                    onChange={handleChange}
                    value={values.address}
                    className="py-5"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                  <div className="mb-3">
                    <Label htmlFor="state" className="text-[14px] mb-1">
                      State
                    </Label>

                    <Input
                      type="text"
                      id="state"
                      placeholder="State"
                      onChange={handleChange}
                      value={values.state}
                      className="py-5"
                    />
                  </div>
                  <div className="mb-3">
                    <Label htmlFor="address" className="text-[14px] mb-1">
                      Country
                    </Label>

                    <Input
                      type="text"
                      id="country"
                      placeholder="Country"
                      onChange={handleChange}
                      value={values.country}
                      className="py-5"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                  <div className="mb-3">
                    <Label htmlFor="address" className="text-[14px] mb-1">
                      City
                    </Label>

                    <Input
                      type="text"
                      id="city"
                      placeholder="City"
                      onChange={handleChange}
                      value={values.city}
                      className="py-5"
                    />
                  </div>
                  <div className="mb-3">
                    <Label htmlFor="address" className="text-[14px] mb-1">
                      Gender
                    </Label>

                    <Select
                      value={values.gender}
                      onValueChange={(val) => setFieldValue("gender", val)}
                      name="gender"
                    >
                      <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder="Select a Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Gender</SelectLabel>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mb-3">
                  <Label htmlFor="date_of_birth" className="text-[14px] mb-1">
                    Date of Birth
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
                        {values.date_of_birth ? (
                          format(values.date_of_birth, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 py-5" align="start">
                      <Calendar
                        disabled={(date) => date > new Date()}
                        mode="single"
                        selected={values.date_of_birth}
                        onSelect={(date) =>
                          setFieldValue(
                            "date_of_birth",
                            date?.toISOString().split("T")[0]
                          )
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <CustomErrorMessage name="date_of_birth" />
                </div>
              </div>
              <div>
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
                          value={values.role} // Ensure string for matching
                          onValueChange={(val) => setFieldValue("role", val)}
                          className="h-25"
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            {allRolesPag.map((data) => (
                              <SelectItem key={data.id} value={data.name}>
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
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="enable">Enable</SelectItem>
                            <SelectItem value="disable">Disable</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        size="lg"
                        className="me-3 rounded-1 cursor-pointer "
                      >
                        <Save />
                        {updateLoading ? <Loading /> : "Save"}
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
                    </CardFooter>
                  </Card>
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
