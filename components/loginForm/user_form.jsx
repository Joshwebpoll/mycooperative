// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { UserForm } from "@/components/loginForm/user_form";
// import Link from "next/link";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// export function UserFormLogin({
//   handleLogin,
//   email,
//   setEmail,
//   password,
//   setPassword,
//   className,
//   ...props
// }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data) => {
//     console.log("Login Data:", data);
//     // Handle login logic here
//   };
//   return (
//     // <div className={cn("flex flex-col gap-6", className)} {...props}>
//     //   <Card>
//     //     <CardHeader className="text-center">
//     //       <CardTitle className="text-xl">Welcome back</CardTitle>
//     //       <CardDescription>
//     //         Login with your Apple or Google account
//     //       </CardDescription>
//     //     </CardHeader>
//     //     <CardContent>
//     //       <form onSubmit={handleSubmit(onSubmit)}>
//     //         <div className="grid gap-6">
//     //           <div className="flex flex-col gap-4"></div>

//     //           <div className="grid gap-6">
//     //             <div className="grid gap-2">
//     //               <Label htmlFor="email">Email</Label>
//     //               <Input
//     //                 id="email"
//     //                 type="email"
//     //                 placeholder="m@example.com"
//     //                 {...register("email")}
//     //                 required
//     //               />
//     //             </div>
//     //             <div className="grid gap-2">
//     //               <div className="flex items-center">
//     //                 <Label htmlFor="password">Password</Label>
//     //                 <a
//     //                   href="#"
//     //                   className="ml-auto text-sm underline-offset-4 hover:underline"
//     //                 >
//     //                   Forgot your password?
//     //                 </a>
//     //               </div>
//     //               <Input
//     //                 id="password"
//     //                 type="password"
//     //                 placeholder="••••••••"
//     //                 {...register("email")}
//     //                 required
//     //               />
//     //             </div>
//     //             <Button type="submit" className="w-full">
//     //               Login
//     //             </Button>
//     //           </div>
//     //           <div className="text-center text-sm">
//     //             Don&apos;t have an account?{" "}
//     //             <Link href="/register" className="underline underline-offset-4">
//     //               Sign up
//     //             </Link>
//     //           </div>
//     //         </div>
//     //       </form>
//     //     </CardContent>
//     //   </Card>
//     //   <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
//     //     By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
//     //     and <a href="#">Privacy Policy</a>.
//     //   </div>
//     // </div>
//   );
// }
