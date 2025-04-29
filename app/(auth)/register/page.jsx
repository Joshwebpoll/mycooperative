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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  phone_number: Yup.string()
    .matches(
      /^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/,
      "Phone number is not valid"
    )
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  first_name: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
});

export default function RegisterPage() {
  const { register, loading, token } = useAuthStore();
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
                initialValues={{
                  email: "",
                  first_name: "",
                  password: "",

                  username: "",
                  confirm_password: "",
                  phone_number: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    console.log(values);
                    await register(
                      values.email,
                      values.first_name,
                      values.password,
                      values.username,
                      values.confirm_password,
                      values.phone_number
                    );

                    setTimeout(() => setSubmitting(false), 1000);
                  } catch (err) {
                    toast.error(err.msg);
                  }
                }}
              >
                {({ isSubmitting, touched }) => (
                  <Form>
                    <div className="grid gap-6">
                      <div className="flex flex-col gap-4"></div>

                      <div className="grid gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Field
                            as={Input}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-sm text-red-500 mt-1"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="first_name">First Name</Label>
                          <Field
                            as={Input}
                            name="first_name"
                            id="first_name"
                            type="first_name"
                            placeholder="First Name"
                          />
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            className="text-sm text-red-500 mt-1"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="username">Username</Label>
                          <Field
                            as={Input}
                            name="username"
                            id="username"
                            type="text"
                            placeholder="Username"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="text-sm text-red-500 mt-1"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="phone_number">Phone Number</Label>
                          <Field
                            as={Input}
                            name="phone_number"
                            id="phone_number"
                            type="number"
                            placeholder="Phone Number"
                          />
                          <ErrorMessage
                            name="phone_number"
                            component="div"
                            className="text-sm text-red-500 mt-1"
                          />
                        </div>
                        <div className="grid gap-2 relative space-y-1">
                          <Label htmlFor="password">Password</Label>

                          <Field
                            as={Input}
                            name="password"
                            id="password"
                            type={show ? "text" : "password"}
                            placeholder="••••••••"
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
                        <div className="grid gap-2">
                          <Label htmlFor="confirm_password">
                            ConfirmPassword
                          </Label>

                          <Field
                            as={Input}
                            name="confirm_password"
                            id="confirm_password"
                            type="password"
                            placeholder="••••••••"
                          />

                          <ErrorMessage
                            name="confirm_password"
                            component="div"
                            className="text-sm text-red-500 mt-1"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5"
                        >
                          {loading ? <Loading /> : "Register"}
                        </Button>
                      </div>
                      <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                          href="/login"
                          className="underline underline-offset-4"
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </Form>
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
