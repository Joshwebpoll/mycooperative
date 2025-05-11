import { NextRequest } from "next/server";

export async function GET(NextRequest) {
  const cookie = request.headers.get("cookie") || "";
  const res = await fetch("http://localhost:8000/api/profile", {
    headers: {
      Cookie: cookie,
      Accept: "application/json",
    },
    credentials: "include",
  });
  console.log(res);
}
