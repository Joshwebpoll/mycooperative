"use client";

import { fadeInUp } from "@/lib/animations";
import { CheckCircle, Hand, List, Users, Wallet } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import BouncingBlobCoop from "@/components/blob/blob";
const services = [
  {
    title: "Business Support",
    points: [
      "Small business loans and microfinance",
      "Business development training and mentorship",
      "Group purchasing programs for better rates",
      "Marketing and networking opportunities",
    ],
  },
  {
    title: "Member Benefits",
    points: [
      "Dividend sharing from cooperative profits",
      "Lower fees and better rates than traditional banks",
      "Democratic participation in all major decisions",
      "Access to exclusive member-only services and events",
    ],
  },
  {
    title: "Financial Services",
    points: [
      " Savings accounts with competitive interest rates",
      " Affordable loans for personal, business, and emergency needs",
      "Investment opportunities and financial planning",
      "Money transfer and payment services",
    ],
  },
];

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

        {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <div className=" mb-2">
              <div className="bg-blue-100 p-3 rounded-full inline-block ">
                <Hand className="w-6 h-6 text-[#206bc4]" />
              </div>
            </div>
            <h3 className="text-base  md:text-lg font-semibold mb-4">
              Business Support
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Small business loans and microfinance
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Business development training and mentorship
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Group purchasing programs for better rates
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Marketing and networking opportunities
                </span>
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
            <h3 className="text-base  md:text-lg font-semibold mb-4">
              Member Benefits
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Dividend sharing from cooperative profits
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Lower fees and better rates than traditional banks
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Democratic participation in all major decisions
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Access to exclusive member-only services and events
                </span>
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
            <h3 className="text-base  md:text-lg font-semibold mb-4">
              {" "}
              Financial Services
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  {" "}
                  Savings accounts with competitive interest rates
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Affordable loans for personal, business, and emergency needs
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Investment opportunities and financial planning
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-[15px] md:text-base text-gray-600">
                  Money transfer and payment services
                </span>
              </div>
            </div>
          </motion.div>
        </div> */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={i}
              className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <ul className="space-y-2 text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold leading-tight">
                      ✔
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
