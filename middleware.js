import { NextRequest, NextResponse } from "next/server";
import apiClient from "./lib/axios";

export async function middleware(request) {
  //   const cookie = request.headers.get("cookie") || "";
  const token = request.cookies.get("auth_tokens")      //?.value || "";
  const pathname = request.nextUrl.pathname;
  console.log(token, "lkjsjs");

  // const res = await fetch("http://localhost:8000/api/profile", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     Accept: "application/json",
  //   },
  // });

  // const ress = await res.json();
  // // console.log(ress.messages.role);

  // // console.log(res.status);
  // // const isAdminRoute = pathname.startsWith("/admin");
  // const isUserRoute = pathname.startsWith("/user");
  // console.log(isUserRoute);
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // // // if (isAdminRoute && role !== "admin") {
  // // //   return NextResponse.redirect(new URL("/login", request.url));
  // // // }
  // const role = ress.messages.role || "";
  // if (isUserRoute && role !== "user") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // return NextResponse.next();
}
export const config = {
  matcher: ["/user/:path*"],
};
