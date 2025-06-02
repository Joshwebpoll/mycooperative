"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Hand } from "lucide-react";

import { Suspense, useEffect, useState } from "react";
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
import { useRouter, useSearchParams } from "next/navigation";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
export const dynamic = "force-dynamic";
const RegisterSchema = Yup.object().shape({
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
  const [show, setShow] = useState(false);
  const [ref, setRef] = useState(null);
  const searchParams = useSearchParams();
  useEffect(() => {
    setRef(searchParams.get("ref"));
  }, [searchParams]);

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
              <CardTitle className="text-xl">Welcome back</CardTitle>
              <CardDescription>
                Fill the form below to register an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading...</div>}>
                <Formik
                  initialValues={{
                    email: "",
                    first_name: "",
                    password: "",
                    referral_code: ref ? ref : "",
                    username: "",
                    confirm_password: "",
                    phone_number: "",
                  }}
                  validationSchema={RegisterSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    try {
                      await register(values, router);
                    } catch (err) {
                      console.log(err);
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  {({
                    isSubmitting,
                    values,
                    touched,
                    handleSubmit,
                    handleChange,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="flex flex-col gap-4"></div>

                        <div className="grid gap-6">
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              placeholder="Email"
                              value={values.email}
                              onChange={handleChange}
                            />
                            <CustomErrorMessage name="email" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="first_name">First Name</Label>
                            <Input
                              name="first_name"
                              id="first_name"
                              type="first_name"
                              placeholder="First Name"
                              value={values.first_name}
                              onChange={handleChange}
                            />
                            <CustomErrorMessage name="first_name" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                              name="username"
                              id="username"
                              type="text"
                              placeholder="Username"
                              value={values.username}
                              onChange={handleChange}
                            />
                            <CustomErrorMessage name="username" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone_number">Phone Number</Label>
                            <Input
                              name="phone_number"
                              id="phone_number"
                              type="number"
                              placeholder="Phone Number"
                              value={values.phone_number}
                              onChange={handleChange}
                            />
                            <CustomErrorMessage name="phone_number" />
                          </div>
                          <div className="grid gap-2 relative space-y-1">
                            <Label htmlFor="password">Password</Label>

                            <Input
                              name="password"
                              id="password"
                              type={show ? "text" : "password"}
                              placeholder="Password"
                              value={values.password}
                              onChange={handleChange}
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
                          <div className="grid gap-2">
                            <Label htmlFor="confirm_password">
                              ConfirmPassword
                            </Label>

                            <Input
                              name="confirm_password"
                              id="confirm_password"
                              type="password"
                              placeholder="Confirm Password"
                              value={values.confirm_password}
                              onChange={handleChange}
                            />

                            <CustomErrorMessage name="confirm_password" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="referral_code">
                              Referral Code (Optional)
                            </Label>
                            <Input
                              name="referral_code"
                              id="referral_code"
                              type="text"
                              placeholder="Referral Code"
                              value={values.referral_code}
                              onChange={handleChange}
                            />
                          </div>

                          <Button
                            type="submit"
                            //disabled={isSubmitting}
                            className="w-full"
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
                    </form>
                  )}
                </Formik>
              </Suspense>
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
