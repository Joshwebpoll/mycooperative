"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Formik } from "formik";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ninValidationSchema } from "@/components/verificationValidation/vaerificationValidation";
export default function NinVerification() {
  const verifyingNin = verificationStore((state) => state.verifyingNin);
  const isLoadingBvn = verificationStore((state) => state.isLoadingBvn);
  const [date, setDate] = useState();
  return (
    <div className="flex w-full justify-center py-5 md:p-5">
      <div className="w-full max-w-sm  ">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Nin Verification</CardTitle>
            <CardDescription>
              Enter the details below to verify your Nin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                nin: "",
                nin_phone_number: "",
                date_of_birth: "",
                gender: "",
              }}
              validationSchema={ninValidationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  await verifyingNin(values);
                  console.log(values);
                } catch (error) {
                } finally {
                  setSubmitting(false);
                }
              }}
              enableReinitialize={true}
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
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-1">
                      <Label htmlFor="nin">Nin</Label>
                      <Input
                        id="nin"
                        type="number"
                        placeholder="Enter your Nin"
                        value={values.nin}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="bvn">Nin Number</Label>
                      <Input
                        id="nin_phone_number"
                        type="text"
                        placeholder="Enter your nin Number"
                        value={values.nin_phone_number}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="gender" className="text-[14px] mb-1">
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
                      <CustomErrorMessage name="gender" />
                    </div>
                    <div className="grid gap-1">
                      <Label
                        htmlFor="date_of_birth"
                        className="text-[14px] mb-1"
                      >
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
                        <PopoverContent
                          className="w-auto p-0 py-5"
                          align="start"
                        >
                          <Calendar
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

                    <Button type="submit" className="w-full">
                      Verify Bvn
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
