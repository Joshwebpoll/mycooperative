"use client";

import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import clsx from "clsx";

const mockNotifications = [
  { id: 1, message: "New user signed up", time: "2m ago" },
  { id: 2, message: "Payment received", time: "1h ago" },
  { id: 3, message: "Server restarted", time: "3h ago" },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef < HTMLDivElement > null;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = mockNotifications.length;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-100 transition"
      >
        <Bell className="w-6 h-6 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
          <div className="p-4 font-semibold border-b">Notifications</div>
          <ul className="max-h-60 overflow-y-auto divide-y">
            {mockNotifications.map((notif) => (
              <li key={notif.id} className="p-4 text-sm hover:bg-gray-50">
                <div>{notif.message}</div>
                <div className="text-xs text-gray-400">{notif.time}</div>
              </li>
            ))}
          </ul>
          <div className="p-3 text-center text-sm text-blue-600 hover:underline cursor-pointer">
            View All
          </div>
        </div>
      )}
    </div>
  );
}
