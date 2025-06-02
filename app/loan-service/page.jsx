"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/frontPage/homePage/navBar";
import Footer from "@/components/frontPage/homePage/footer";
import { Hand } from "lucide-react";
import CallToAction2 from "@/components/frontPage/homePage/callAction2";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
const LoanServicePage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#37517e] py-28 mb-20">
        <motion.div
          {...fadeInUp}
          className="mx-auto lg:w-9/12 text-center text-white px-5"
        >
          <h1 className=" text-4xl font-bold mb-3">Loan Service</h1>
          <p>
            Transforming Lives Through Collective Action - Experience the Power
            of Cooperative Where Your Contributions Build Dreams and Your
            Participation Shapes Decisions
          </p>
        </motion.div>
      </section>

      <section className="mx-auto  lg:w-10/12 pb-20 ">
        <motion.div {...fadeInUp}>
          <div className="text-center mb-7">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Affordable Loans for Every Need
            </h3>
            <p className="max-w-2xl w-full mx-auto">
              Our competitive loan products are designed with our members'
              success in mind. Enjoy lower interest rates, flexible terms, and
              personalized service
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pb-[30px]  px-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-5 py-10 rounded-xl shadow-lg"
            >
              <div className=" mb-2">
                <div className="bg-blue-100 p-3 rounded-full inline-block ">
                  <Hand className="w-6 h-6  text-[#206bc4]" />
                </div>
              </div>
              <h5 className="text-[16px] font-semibold mb-2">Personal Loans</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ">
                <li>Schedule a consultation</li>
                <li>Attend an information session</li>
                <li>Begin your membership application</li>
                <li>Learn about special launch promotions</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-5 py-10 rounded-xl shadow-lg"
            >
              <div className=" mb-2">
                <div className="bg-blue-100 p-3 rounded-full inline-block ">
                  <Hand className="w-6 h-6  text-[#206bc4]" />
                </div>
              </div>
              <h5 className="text-[16px] font-semibold mb-2">Business Loans</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Support for small businesses and entrepreneurs</li>
                <li>Working capital and equipment financing</li>
                <li>Business development guidance included</li>
                <li>Competitive rates for members</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-5 py-10 rounded-xl shadow-lg"
            >
              <div className=" mb-2">
                <div className="bg-blue-100 p-3 rounded-full inline-block ">
                  <Hand className="w-6 h-6  text-[#206bc4]" />
                </div>
              </div>
              <h5 className="text-[16px] font-semibold mb-2">
                Emergency Loans
              </h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Fast approval for urgent needss</li>
                <li>Minimal documentation required</li>
                <li>Compassionate consideration of circumstances</li>
                <li>Reasonable repayment terms</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <CallToAction2 />

      <Footer />
    </div>
  );
};

export default LoanServicePage;
