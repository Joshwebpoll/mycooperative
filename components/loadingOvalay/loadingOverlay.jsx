// components/LoadingOverlay.tsx
"use client";

import { Loader2 } from "lucide-react";

export default function LoadingOverlay() {
  // if (!show) return null;

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
    //   <div className="p-4 bg-white rounded-xl flex items-center gap-3 shadow-lg">
    //     <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
    //     <span className="text-sm font-medium text-gray-700">Loading...</span>
    //   </div>
    // </div>
    // <div className="absolute top-50 right-[50%]">
    //   <div className="p-4 bg-white rounded-xl flex items-center gap-3 shadow-lg">
    //     <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
    //     {/* <span className="text-sm font-medium text-gray-700">
    //           Loadingsss...
    //         </span> */}
    //   </div>
    // </div>
    <div>
      <div className="absolute top-0 start-0 size-full bg-white/50 rounded-lg dark:bg-neutral-800/40"></div>

      <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="p-4 bg-white rounded-xl flex items-center gap-3 shadow-lg">
          <div
            className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-[#206bc4] rounded-full dark:text-blue-500"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
