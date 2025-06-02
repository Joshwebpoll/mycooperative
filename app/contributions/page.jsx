"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/frontPage/homePage/navBar";
import Footer from "@/components/frontPage/homePage/footer";
import { Hand } from "lucide-react";
import HeroSection from "@/components/frontPage/homePage/HeroBg";
import CallToAction2 from "@/components/frontPage/homePage/callAction2";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
const ContributionPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#37517e] py-28 mb-20">
        <motion.div
          {...fadeInUp}
          className="mx-auto lg:w-9/12 text-center text-white px-5"
        >
          <h1 className=" text-4xl font-bold mb-3">Contributions | Savings</h1>
          <p>
            {" "}
            Join the Cooperative Revolution - Where Fair Financial Services Meet
            Community Development and Every Member Becomes an Owner,
            Stakeholder, and Beneficiary
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
              Our contribution programs are designed to help members build
              wealth while supporting the cooperative's growth and community
              development initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pb-[30px]  px-5">
            <div className="px-5 py-10 rounded-xl shadow-lg">
              <div className=" mb-2">
                <div className="bg-blue-100 p-3 rounded-full inline-block ">
                  <Hand className="w-8 h-8 text-[#206bc4]" />
                </div>
              </div>
              <h5 className="text-[16px] font-semibold mb-2">
                Monthly Contribution
              </h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ">
                <li>Competitive returns on your monthly contributions</li>
                <li>Flexible monthly contribution amounts</li>
                <li>Easy access to your funds when needed</li>
                <li>Monthly statements and progress tracking</li>
                <li>Automatic monthly deduction options available</li>
              </ul>
            </div>
            <div className="px-5 py-10 rounded-xl shadow-lg">
              <div className=" mb-2">
                <div className="bg-blue-100 p-3 rounded-full inline-block ">
                  <Hand className="w-8 h-8 text-[#206bc4]" />
                </div>
              </div>
              <h5 className="text-[16px] font-semibold mb-2">
                Special Contribution Programs
              </h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Daily contribution plans with automatic deductions</li>
                <li>
                  Goal-based contribution programs (education, housing,
                  business)
                </li>
                <li>Higher returns for longer-term commitments</li>
                <li>Bonus returns for consistent contributors</li>
              </ul>
            </div>
            <div className="px-5 py-10 rounded-xl shadow-lg">
              <div className=" mb-2">
                <div className="bg-blue-100 p-3 rounded-full inline-block ">
                  <Hand className="w-8 h-8 text-[#206bc4]" />
                </div>
              </div>
              <h5 className="text-[16px] font-semibold mb-2">
                Community Development Contributions
              </h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Direct investment in local community projects</li>
                <li>Higher returns while supporting community growth</li>
                <li>Transparent reporting on project impact</li>
                <li>Members vote on funded projects</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
      <CallToAction2 />

      <Footer />
    </div>
  );
};

export default ContributionPage;
