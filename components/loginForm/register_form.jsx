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

// export function RegisterComp({ className, ...props }) {
//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card>
//         <CardHeader className="text-center">
//           <CardTitle className="text-xl">Welcome back</CardTitle>
//           <CardDescription>
//             Login with your Apple or Google account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="grid gap-6">
//               <div className="flex flex-col gap-4"></div>

//               <div className="grid gap-6">
//                 <div className="grid gap-2">
//                   <Label htmlFor="first_name">First Name</Label>
//                   <Input
//                     id="first_name"
//                     type="text"
//                     placeholder="First Name"
//                     required
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="username">Username</Label>
//                   <Input
//                     id="username"
//                     type="text"
//                     placeholder="Username"
//                     required
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="m@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="phone_number">Phone Number</Label>
//                   <Input
//                     id="phone_number"
//                     type="number"
//                     placeholder="Phone Number"
//                     required
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <div className="flex items-center">
//                     <Label htmlFor="password">Password</Label>
//                   </div>
//                   <Input
//                     id="password"
//                     type="password"
//                     placeholder="••••••••"
//                     required
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <div className="flex items-center">
//                     <Label htmlFor="password">Confirm Password</Label>
//                   </div>
//                   <Input
//                     id="confirm_password"
//                     type="confirm_password"
//                     placeholder="••••••••"
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="w-full">
//                   Register
//                 </Button>
//               </div>
//               <div className="text-center text-sm">
//                 Don&apos;t have an account?{" "}
//                 <Link href="/login" className="underline underline-offset-4">
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//       <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
//         By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
//         and <a href="#">Privacy Policy</a>.
//       </div>
//     </div>
//   );
// }
