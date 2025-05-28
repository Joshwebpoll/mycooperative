"use client";

import { LoginForm } from "@/components/loginForm/login-form";
import { Hand } from "lucide-react";

import { useState } from "react";
import { useAdminStore } from "../stores/useAuthStore";

export default function () {
  const { login } = useAdminStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleLogin = async () => {
  //   await login(email, password);
  // };
  //console.log(email, password);
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Hand className="size-4" />
            </div>
            Araromi Cooperative
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm
     
            />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
