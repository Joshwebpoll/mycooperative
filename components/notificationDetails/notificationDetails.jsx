"use client";

// // // NotificationBell.jsx
// // import apiClient from "@/lib/axios";
// // import * as Popover from "@radix-ui/react-popover";
// // import { Bell, BellIcon } from "lucide-react";
// // import { useState } from "react";
// // import useSWR from "swr";

// // const notifications = [
// //   { id: 1, message: "New comment on your post" },
// //   { id: 2, message: "Your order has been shipped" },
// //   { id: 3, message: "New follower: John Doe" },
// // ];

// // export default function NotificationBellDetails() {
// //   const fetcher = (url) => apiClient.get(url).then((res) => res.data);
// //   const { data, isLoading } = useSWR("/api/user/get_notification", fetcher);
// //   const [open, setOpen] = useState(false);
// //   console.log(data);
// //   return (
// //     <Popover.Root open={open} onOpenChange={setOpen}>
// //       <Popover.Trigger asChild>
// //         {/* <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
// //           <Bell className="h-6 w-6 text-gray-700" />
// //           {data?.all.length > 0 && (
// //             <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
// //               {data?.all.length}
// //             </span>
// //           )}
// //         </button> */}

// //         <div className="relative">
// //           {/* Bell Icon wrapped in a button */}
// //           <button className="p-2 hover:bg-gray-200 rounded-full focus:outline-none">
// //             <BellIcon className="h-6 w-6 text-gray-700" />
// //           </button>

// //           {/* Badge for notification count */}
// //           {data?.all.length > 0 && (
// //             <span className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
// //               {data?.all.length ?? 0}
// //             </span>
// //           )}
// //         </div>
// //       </Popover.Trigger>

// //       <Popover.Portal>
// //         <Popover.Content
// //           sideOffset={10}
// //           className="w-64 rounded-2xl shadow-lg bg-white p-4 border border-gray-200"
// //         >
// //           <h4 className="font-semibold text-sm text-gray-700 mb-2">
// //             Notifications
// //           </h4>
// //           <ul className="space-y-2 max-h-60 overflow-auto">
// //             {data?.all.length > 0 ? (
// //               data?.all.map((notif) => (
// //                 <li
// //                   key={notif.id}
// //                   className="text-[13.5px] text-gray-600 bg-gray-50 p-1 rounded-lg hover:bg-gray-100 transition"
// //                 >
// //                   {notif.data.message}
// //                 </li>
// //               ))
// //             ) : (
// //               <li className="text-sm text-gray-500 italic">No notifications</li>
// //             )}
// //           </ul>
// //         </Popover.Content>
// //       </Popover.Portal>
// //     </Popover.Root>
// //   );
// // }

// // components/NotificationBell.tsx
// // components/NotificationBell.tsx

import { motion, AnimatePresence } from "framer-motion";
import apiClient from "@/lib/axios";
import * as Popover from "@radix-ui/react-popover";
import { Bell, BellIcon } from "lucide-react";
import { useState } from "react";
import useSWR from "swr";

const mockNotifications = [
  {
    id: 1,
    title: "Project Updated",
    message: "The marketing project has a new update.",
    read: false,
  },
  {
    id: 2,
    title: "Payment Received",
    message: "Your invoice has been paid successfully.",
    read: false,
  },
  {
    id: 3,
    title: "Access Granted",
    message: "You’ve been added to the Design team.",
    read: true,
  },
];

export default function NotificationDetails() {
  const fetcher = (url) => apiClient.get(url).then((res) => res.data);
  const { data, isLoading } = useSWR("/api/user/get_notification", fetcher);
  //   const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };
  console.log(data);
  return (
    // <Popover.Root open={open} onOpenChange={setOpen}>
    //   <Popover.Trigger asChild>
    //     <button
    //       aria-label="Open notifications"
    //       className="relative p-2 rounded-full hover:bg-muted transition-colors"
    //     >
    //       <Bell className="h-5 w-5 text-muted-foreground" />
    //       {unreadCount > 0 && (
    //         <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-medium shadow">
    //           {unreadCount}
    //         </span>
    //       )}
    //     </button>
    //   </Popover.Trigger>

    //   <Popover.Portal>
    //     <Popover.Content
    //       sideOffset={10}
    //       align="end"
    //       className="w-64 rounded-2xl shadow-lg bg-black p-4 border border-gray-200"
    //       asChild
    //     >
    //       <AnimatePresence>
    //         {open && (
    //           <motion.div
    //             initial={{ opacity: 0, y: -8 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             exit={{ opacity: 0, y: -8 }}
    //             transition={{ duration: 0.2 }}
    //           >
    //             <h4 className="font-semibold text-sm text-gray-700 mb-2">
    //               Notifications
    //             </h4>
    //             <ul className="space-y-2 max-h-60 overflow-auto">
    //               {notifications.length > 0 ? (
    //                 notifications.map((notif) => (
    //                   <li
    //                     key={notif.id}
    //                     className="text-sm text-gray-600 bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition"
    //                   >
    //                     {notif.message}
    //                   </li>
    //                 ))
    //               ) : (
    //                 <li className="text-sm text-gray-500 italic">
    //                   No notifications
    //                 </li>
    //               )}
    //             </ul>
    //           </motion.div>
    //         )}
    //       </AnimatePresence>
    //     </Popover.Content>
    //   </Popover.Portal>
    // </Popover.Root>
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          aria-label="Open notifications"
          className="relative p-2 rounded-sm hover:bg-muted transition-colors"
        >
          <Bell className="h-5 w-5 text-muted-foreground" />
          {data?.all.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-medium shadow">
              {data?.all.length}
            </span>
          )}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={10}
          className="w-64 rounded-2xl shadow-lg bg-white p-4 border border-gray-200"
          align="end"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-sm text-gray-700 mb-2">
                  Notifications
                </h4>
                <ul className="space-y-2 max-h-60 overflow-auto">
                  {data?.all.length > 0 ? (
                    data?.all.map((notif) => (
                      <li
                        key={notif.id}
                        className="text-[12.5px] text-gray-600 bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition"
                      >
                        {notif.data.message}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-500 italic">
                      No notifications
                    </li>
                  )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
