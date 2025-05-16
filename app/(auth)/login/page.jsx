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
import useSWR from "swr";
import { useRouter } from "next/navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email, please try again")
    .required("Email is required"),
  password: Yup.string().min(6, "Too short!").required("Password is required"),
});

export default function LoginPage() {
  const fetcher = (url) => apiClient.get(url).then((res) => res.data.user);
  const { login, loading, users, isUserLoading, fetchProfile } = useAuthStore();
  const [show, setShow] = useState(false);
  const router = useRouter();
  console.log(users);
  // const { data, isLoading, mutate, error } = useSWR(
  //   "/api/user/profile",
  //   fetcher
  // );

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  // if (data.status === true) {
  //   if (data?.user || data?.user?.role === "user") {
  //     router.push("/user/dashboard");
  //   }
  // }
  // useEffect(() => {
  //   if (users && users.role === "user") {
  //     router.replace("/user/dashboard");
  //   }
  // }, [users]);

  // if (isUserLoading) {
  //   return "Hello word";
  // }

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
              <CardTitle className="text-xl">Welcome back</CardTitle>
              <CardDescription>
                Login with your Apple or Google account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    // console.log(token);
                    await login(values.email, values.password, router);
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
                        <div className="grid gap-2 relative ">
                          <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                              href="/forget_password"
                              className="ml-auto text-sm underline-offset-4 hover:underline"
                            >
                              Forgot your password?
                            </Link>
                          </div>

                          <Input
                            type={show ? "text" : "password"}
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            autoComplete="off"
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
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5"
                        >
                          {loading ? <Loading /> : "Login"}
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
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
