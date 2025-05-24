"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useRef, useState } from "react";
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
import contributionStore from "../../adminStore/contributionStore";
import { notificationSchema } from "../validationSchema";
import NotificationStores from "../../adminStore/notificationStores";

const CreateNotification = () => {
  const fetchUsers = contributionStore((state) => state.fetchUsers);
  const users = contributionStore((state) => state.users);
  const createNotification = NotificationStores(
    (state) => state.createNotification
  );
  const isCreating = NotificationStores((state) => state.isCreating);
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  console.log(users);
  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          user_id: "",
          title: "",
          message: "",
          type: "",
        }}
        validationSchema={notificationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await createNotification(values);
            resetForm();
            console.log(values.type);
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
        }) => {
          const [opengurantor, setOpenGurantor] = useState(false);
          const triggerRef = useRef(null);
          const [width, setWidth] = useState(0);

          useEffect(() => {
            if (triggerRef.current) {
              setWidth(triggerRef.current.offsetWidth);
            }
          }, [triggerRef.current, open]);

          const selectedLabel =
            users.find((opt) => opt.id === values.user_id)?.name ||
            "Select User";
          return (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="  lg:col-span-2 p-6  bg-[#ffffff] shadow-xl rounded-xl">
                  <div className="mb-3">
                    <Label htmlFor="title" className="text-[14px] mb-1">
                      Title
                    </Label>

                    <Input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter title"
                      onChange={handleChange}
                      value={values.title}
                      className=""
                    />
                    <CustomErrorMessage name="title" />
                  </div>
                  <div className="mb-3">
                    <Label htmlFor="type" className="text-[14px] mb-1">
                      Select Type
                    </Label>
                    <Select
                      value={values.type}
                      onValueChange={(val) => setFieldValue("type", val)}
                    >
                      <SelectTrigger className="w-[100%] ">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Sending Type</SelectLabel>
                          <SelectItem value="all">All User</SelectItem>
                          <SelectItem value="single">Specific User</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <CustomErrorMessage name="type" />
                  </div>
                  <div className="mb-3">
                    <Label htmlFor="email" className="text-[14px] mb-1">
                      Choose User
                    </Label>

                    <Popover open={opengurantor} onOpenChange={setOpenGurantor}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          ref={triggerRef}
                          className="w-full border px-3 py-2 text-left text-sm rounded-md bg-white"
                        >
                          {selectedLabel}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0"
                        style={{ width }}
                        align="start"
                      >
                        {values.type === "single" && (
                          <Command>
                            <CommandInput placeholder="Search Guarantor..." />
                            <CommandList className="h-50">
                              <CommandEmpty>No results found.</CommandEmpty>
                              <CommandGroup>
                                {users.map((option) => (
                                  <CommandItem
                                    key={option.id}
                                    value={option.name}
                                    onSelect={() => {
                                      setFieldValue(
                                        "user_id",

                                        option.id
                                      );
                                      setOpenGurantor(false);
                                    }}
                                  >
                                    {option.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        )}
                      </PopoverContent>
                    </Popover>
                  </div>
                  

                  <div className="mb-3">
                    <Label className="text-[14px] mb-2" htmlFor="message">
                      Message
                    </Label>
                    <Textarea
                      placeholder="Type your message here."
                      id="message"
                      name="message"
                      onChange={handleChange}
                      value={values.message}
                      className="h-50"
                    />
                    <CustomErrorMessage name="message" />
                  </div>
                </div>
                <div>
                  <Card className="shadow-xl">
                    <CardHeader>
                      <CardTitle>Publish</CardTitle>
                    </CardHeader>
                    <hr />
                    <CardContent className="grid gap-4">
                      {/* <div className="mb-3">
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
                    </div> */}
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
                          {isCreating ? <Loading /> : "Save"}
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
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateNotification;
