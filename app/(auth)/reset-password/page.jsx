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
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default function resetPassword() {
  const {
    login,
    loading,
    users,
    token,
    resetPassword,
    isForgetloading,
    isUpdateLoading,
    updatePassword,
  } = useAuthStore();
  const [show, setShow] = useState(false);
  const router = useRouter();

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
              <CardTitle className="text-xl">Update Password</CardTitle>
              <CardDescription>
                Please fil the form below to change your password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={{ password: "", confirm_password: "" }}
                validationSchema={resetSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    await updatePassword(values, router);
                    console.log(values);
                  } catch (err) {
                    toast.error(err.msg);
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
                          <Label htmlFor="password">Password</Label>

                          <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={values.password}
                          />
                          <CustomErrorMessage name="password" />
                        </div>
                      </div>
                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="confirm_password">
                            Confirm Password
                          </Label>

                          <Input
                            type="password"
                            name="confirm_password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={values.confirm_password}
                          />
                          <CustomErrorMessage name="confirm_password" />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5"
                        >
                          {isUpdateLoading ? <Loading /> : "Change Password"}
                        </Button>
                      </div>
                      <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                          href="/register"
                          className="underline underline-offset-4"
                        >
                          Sign up
                        </Link>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
