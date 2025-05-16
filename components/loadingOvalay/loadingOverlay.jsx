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
    <div className="absolute top-50 right-[50%]">
      <div className="p-4 bg-white rounded-xl flex items-center gap-3 shadow-lg">
        <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
        {/* <span className="text-sm font-medium text-gray-700">
              Loadingsss...
            </span> */}
      </div>
    </div>
  );
}
