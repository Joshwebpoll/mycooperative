"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DynamicTitle from "../pathTitle/titlepath";

// Full path to breadcrumb label array
const breadcrumbMap = {
  "/user/dashboard": [{ href: "/user/dashboard", label: "Dashboard" }],
  "/user/profile": [
    { href: "/user/dashboard", label: "Dashboard" },
    { href: "/user/profile", label: "Profile" },
  ],
  "/user/loan": [
    { href: "/user/dashboard", label: "Dashboard" },
    { href: "/user/loan", label: "Loan" },
  ],
  "/user/contribution": [
    { href: "/user/dashboard", label: "Dashboard" },
    { href: "/user/contribution", label: "Contribution" },
  ],
  "/user/repayment": [
    { href: "/user/dashboard", label: "Dashboard" },
    { href: "/user/repayment", label: "Repayment" },
  ],
  "/user/members": [
    { href: "/user/dashboard", label: "Dashboard" },
    { href: "/user/members", label: "Member" },
  ],
  // Add more mappings as needed
};

export default function Breadcrumb() {
  const pathname = usePathname();

  const breadcrumbs = breadcrumbMap[pathname];

  if (!breadcrumbs) return null; // Show nothing if route not mapped

  return (
    <div>
      {/* <DynamicTitle /> */}
      <nav className="text-sm text-gray-600 p-5">
        <ol className="flex items-center space-x-1">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center space-x-1">
                {index > 0 && <span className="mx-1">/</span>}
                {isLast ? (
                  <span className="text-gray-500 capitalize">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:underline capitalize"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
