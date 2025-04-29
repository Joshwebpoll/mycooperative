"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
import { useAuthStore } from "../authStore/userAuthStore";
import { useState } from "react";
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
import toast from "react-hot-toast";
import Loading from "@/components/loading_spinner/loading";
import AlertError from "@/components/alertError/alerterror";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email, please try again")
    .required("Email is required"),
  password: Yup.string().min(6, "Too short!").required("Password is required"),
});

export default function LoginPage() {
  const { login, loading, users, token } = useAuthStore();
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
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
                    await login(values.email, values.password);
                    console.log(values);
                    setTimeout(() => setSubmitting(false), 1000);
                  } catch (err) {
                    toast.error(err.msg);
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
                          {/* <Field
                            as={Input}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                          /> */}
                          <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />

                          {/* <AlertError
                            error={
                              errors.email && touched.email && errors.email
                            }
                          /> */}
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-sm text-red-500 mt-1"
                          />
                        </div>
                        <div className="grid gap-2 relative ">
                          <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                              href="#"
                              className="ml-auto text-sm underline-offset-4 hover:underline"
                            >
                              Forgot your password?
                            </a>
                          </div>
                          {/* <Field
                            as={Input}
                            name="password"
                            id="password"
                            type={show ? "text" : "password"}
                            placeholder="••••••••"
                          /> */}
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
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-sm text-red-500 mt-1"
                          />
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
