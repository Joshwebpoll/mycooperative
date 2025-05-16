"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
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
  email: Yup.string()
    .email("Invalid email, please try again")
    .required("Email is required"),
});

export default function ForgetPassword() {
  const { login, loading, users, token, resetPassword, isForgetloading } =
    useAuthStore();
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Araromi Cooperative
        </a>

        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Forgot Password</CardTitle>
              <CardDescription>
                Please Enter Your Email to Reset Your Password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={resetSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    await resetPassword(values, router);
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
                          <Label htmlFor="email">Email</Label>

                          <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={values.email}
                          />
                          <CustomErrorMessage name="email" />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5"
                        >
                          {isForgetloading ? <Loading /> : "Send Otp"}
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
