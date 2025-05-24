"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Hand } from "lucide-react";
import { useAuthStore } from "../authStore/userAuthStore";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";

import Loading from "@/components/loading_spinner/loading";
import AlertError from "@/components/alertError/alerterror";
import { toast } from "sonner";
import apiClient from "@/lib/axios";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import { useRouter } from "next/navigation";

const resetSchema = Yup.object().shape({
  otp: Yup.string()
    .required("otp code is required")
    .matches(/^\d{6}$/, "otp code must be exactly 6 digits"),
});

export default function VerifyEmail() {
  const {
    login,
    loading,
    users,
    token,
    resetPassword,
    isVerifyLoading,
    // verifyOtp,
    // resendOtp,
    verifyUserEmail,
    isResendOtpLoading,
  } = useAuthStore();
  const [show, setShow] = useState(false);
  const router = useRouter();
  //Handle Reset Code
  const handleResetCode = async () => {
    await resendOtp();
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Hand className="size-4" />
          </div>
          Araromi Cooperative
        </a>

        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Verify Email</CardTitle>
              <CardDescription>
                Please Enter the code sent to your Email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={{ email_otp: "" }}
                //validationSchema={resetSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    await verifyUserEmail(values, router);
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
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6">
                      <div className="flex flex-col gap-4"></div>

                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="email_otp">
                            Email Verification Code
                          </Label>

                          <Input
                            type="text"
                            name="email_otp"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={values.email_otp}
                            placeholder="Email Verification Code"
                          />
                          <CustomErrorMessage name="email_otp" />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5"
                        >
                          {isVerifyLoading ? <Loading /> : "Verify Email"}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="text-center text-sm">
                Don&apos;t get code or expired?{" "}
                <Button
                  variant="link"
                  onClick={handleResetCode}
                  className="underline underline-offset-4"
                >
                  {isResendOtpLoading ? "Resending Code" : "Resend code"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
