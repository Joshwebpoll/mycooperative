"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function ReferralLink({ referralUrl }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Invite & Earn
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          value={referralUrl}
          readOnly
          className="flex-1 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg px-4 py-2 focus:outline-none"
        />
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-lg"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Share this link and get rewards for every friend who signs up.
      </p>

      {/* <div className="mt-5 grid grid-cols-2 gap-4 text-center text-sm text-gray-600">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-lg font-bold text-gray-800">12</div>
          <div>Referrals</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-lg font-bold text-gray-800">$60</div>
          <div>Earned</div>
        </div>
      </div> */}
    </div>
  );
}
