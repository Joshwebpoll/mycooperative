"use client";

import { fadeInUp } from "@/lib/animations";
import { CheckCircle, Hand, List, Users, Wallet } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import BouncingBlobCoop from "@/components/blob/blob";

const Services = () => {
  return (
    <section className="mx-auto lg:w-10/12 pb-28 px-5 relative">
      <BouncingBlobCoop
        position="top-10 left-5"
        size={120}
        colorStart="#00B894"
        colorEnd="#74B9FF"
      />
      <motion.div {...fadeInUp}>
        <div className="text-center mb-10">
          <span className="inline-block mb-3 px-2 py-1 text-xs font-bold tracking-wide text-indigo-900 uppercase bg-indigo-200 rounded">
            we steady innovating
          </span>
          <h1 className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl">
            Our Services
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {/* <div className="bg-white shadow-md rounded-xl p-6">
          <div className=" mb-2">
            <div className="bg-blue-100 p-3 rounded-full inline-block ">
              <Hand className="w-8 h-8 text-[#206bc4]" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Community Programs</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              <span>Financial literacy workshops</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              <span>
                Affordable loans for personal, business, and emergency needs
              </span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              <span>Educational scholarships and grants</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              <span>Community development projects</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              <span>Emergency assistance fund</span>
            </div>
          </div>
        </div> */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <div className=" mb-2">
              <div className="bg-blue-100 p-3 rounded-full inline-block ">
                <Hand className="w-6 h-6 text-[#206bc4]" />
              </div>
            </div>
            <h3 className="text-[18px] font-semibold mb-4">Business Support</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Small business loans and microfinance</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Business development training and mentorship</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Group purchasing programs for better rates</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Marketing and networking opportunities</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <div className=" mb-2">
              <div className="bg-blue-100 p-3 rounded-full inline-block ">
                <Users className="w-6 h-6 text-[#206bc4]" />
              </div>
            </div>
            <h3 className="text-[18px] font-semibold mb-4">Member Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Dividend sharing from cooperative profits</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Lower fees and better rates than traditional banks</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Democratic participation in all major decisions</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Access to exclusive member-only services and events</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <div className=" mb-2">
              <div className="bg-blue-100 p-3 rounded-full inline-block ">
                <Wallet className="w-6 h-6 text-[#206bc4]" />
              </div>
            </div>
            <h3 className="text-[18px] font-semibold mb-4">
              {" "}
              Financial Services
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span> Savings accounts with competitive interest rates</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>
                  Affordable loans for personal, business, and emergency needs
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Investment opportunities and financial planning</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>Money transfer and payment services</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
