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
import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { bvnValidationSchema } from "@/components/verificationValidation/vaerificationValidation";
import verificationStore from "../userStore/verificationStore";
import Loading from "@/components/loading_spinner/loading";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import apiClient from "@/lib/axios";
import useSWR, { mutate } from "swr";
export default function bvnVerifcation() {
  const verifyingBvn = verificationStore((state) => state.verifyingBvn);
  const isLoadingBvn = verificationStore((state) => state.isLoadingBvn);
  const personalUser = verificationStore((state) => state.personalUser);
  const getSingleUser = verificationStore((state) => state.getSingleUser);
  const isUserLoading = verificationStore((state) => state.isUserLoading);
  console.log(personalUser);
  const [date, setDate] = useState();
  //CHANGED FROM USEFFECT TO SWR
  // useEffect(() => {
  //   getSingleUser();
  // }, []);
  const fetcher = (url) => apiClient.get(url).then((res) => res.data.user);
  const { data, isLoading, mutate, error } = useSWR(
    "/api/user/personal_user",
    fetcher
  );
  console.log(data, error, "swr");
  if (isLoading) {
    return (
      <div className="flex w-full justify-center py-5 md:p-5">
        <div className="w-full max-w-md  ">
          <Skeleton className="h-[400px]   bg-[#e1e6f0]" />
        </div>
      </div>
    );
  }

  if (data.bvn !== null) {
    return (
      <div className="flex w-full justify-center py-5 md:p-5">
        <div className="w-full max-w-md ">
          <Card className='shadow-xl rounded-xl'>
            <CardHeader>
              <div className="flex justify-between item-center">
                <CardTitle className="text-[16px]">Bvn Details</CardTitle>
                <Badge className="text-[13px] bg-green-100 text-green-800">
                  Verified
                </Badge>
              </div>
              <CardDescription>
                Below is the details of Your Bvn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-3">
                <h1 className="text-[15px]">Bvn Number</h1>
                <p className="uppercase text-[13.5px">{data.bvn}</p>
              </div>
              <hr className="mb-3 border-b border-[#f2f2f2]" />
              <div className="flex justify-between  mb-3">
                <h1 className="text-[15px]">Full Name</h1>
                <p className="uppercase text-[13.5px]">{`${data.name} ${data.surname} ${data.lastname}`}</p>
              </div>
              <hr className="mb-3 border-b border-[#f2f2f2]" />
              <div className="flex justify-between mb-3">
                <h1 className="text-[15px]">Phone Number</h1>
                <p className="uppercase text-[13.5px]">{`${data.phone_number}`}</p>
              </div>
              <hr className="mb-3 border-b border-[#f2f2f2]" />
              <div className="flex justify-between ">
                <h1 className="text-[15px]">Gender</h1>
                <p className="uppercase text-[13.5px]">{`${data.gender}`}</p>
              </div>
            </CardContent>
          </Card>
          {/* <div className="flex justify-between">
            <h1>Bvn Number</h1>
            <h1>{personalUser.bvn}</h1>
          </div> */}
        </div>
      </div>
    );
  }
  return (
    // container mx-auto py-5 shadow rounded bg-white
    <div className="flex w-full justify-center py-5 md:p-5">
      <div className="w-full max-w-md  ">
        <Card className="shadow-xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Bvn Verification</CardTitle>
            <CardDescription>
              Enter the details below to verify your Bvn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                bvn: "",
                bvn_phone_number: "",
                date_of_birth: "",
                gender: "",
              }}
              validationSchema={bvnValidationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  await verifyingBvn(values);
                  await mutate();
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
                      <Label htmlFor="bvn">Bvn</Label>
                      <Input
                        id="bvn"
                        type="number"
                        value={values.bvn}
                        onChange={handleChange}
                        placeholder="Enter your Bvn"
                      />
                      <CustomErrorMessage name="bvn" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="bvn">Bvn Number</Label>
                      <Input
                        id="bvn_phone_number"
                        type="text"
                        value={values.bvn_phone_number}
                        onChange={handleChange}
                        placeholder="Enter your Bvn Number"
                      />
                      <CustomErrorMessage name="bvn_phone_number" />
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

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isLoadingBvn ? <Loading /> : "Verify Bvn"}
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
