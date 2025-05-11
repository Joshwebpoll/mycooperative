// app/api/login/route.ts
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST(request) {
  // Parse the request body (this is using the new Fetch API)
  const { email, password } = await request.json();
  console.log(email, password);

  // Call Laravel API for authentication
  const laravelRes = await fetch("http://localhost:8000/api/logout", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await laravelRes.json();

  // If login fails, return an error response
  if (!laravelRes.ok) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Set cookies
  const headers = new Headers();

  headers.set("Set-Cookie", [
    serialize("auth_tokens", data.token, {
      httpOnly: true, // Make cookie not accessible via JavaScript
      secure: process.env.NODE_ENV === "production", // Only use secure cookies in production
      path: "/", // Available across the whole site
      sameSite: "lax", // Prevents CSRF attacks
      maxAge: 60 * 60 * 24 * 7, // 7 days
    }),
    // serialize("user_role", data.role, {
    //   path: "/",
    //   maxAge: 60 * 60 * 24 * 7, // 7 days
    // }),
  ]);

  return NextResponse.json({ message: "Logged in successfully" }, { headers });
}
