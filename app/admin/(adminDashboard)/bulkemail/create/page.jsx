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
import MultiSelect from "../multiSelectOption/multiSelect";
import bulkEmailStore from "../../adminStore/bulkemailStore";

const CreateBulkEmail = () => {
  const isCreatingLoading = bulkEmailStore((state) => state.isCreatingLoading);
  const createBulkEmail = bulkEmailStore((state) => state.createBulkEmail);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[100%] ">
      <Formik
        initialValues={{
          subject: "",
          message: "",
          users: [],
        }}
        // validationSchema={notificationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await createBulkEmail(values);
            // resetForm();
            console.log(values);
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
          return (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="  lg:col-span-2 p-6  bg-[#ffffff] shadow-xl rounded-xl">
                  <div className="mb-3">
                    <Label htmlFor="subject" className="text-[14px] mb-1">
                      Subject
                    </Label>

                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter subject"
                      onChange={handleChange}
                      value={values.subject}
                      className=""
                    />
                    <CustomErrorMessage name="subject" />
                  </div>

                  <MultiSelect name="users" />

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
                    {/* <CardContent className="grid gap-4"></CardContent> */}
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
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateBulkEmail;
