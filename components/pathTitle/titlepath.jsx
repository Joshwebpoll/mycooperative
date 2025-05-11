"use client";

import { usePathname } from "next/navigation";

export default function DynamicTitle() {
  const pathname = usePathname(); // e.g., "/user/repayment"
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1]; // "repayment"
  const capitalized =
    lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  return (
    <div className="">
      <h1>{capitalized}</h1>
    </div>
  );
}
