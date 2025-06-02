"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";

import { motion } from "framer-motion";
const LoanSettings = () => {
  return (
    <section>
      <motion.div
        {...fadeInUp}
        className="mx-auto lg:max-w-10/12 py-20 px-10 rounded-xl shadow-xl mb-20"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center ">
          <div className="">
            <Badge className="mb-3">Uninterrupted Funds Supply</Badge>

            <h3 className="text-[30px] font-bold mb-2">
              Flexible Loan options for you and your business.
            </h3>
            <p className="text-gray-700 text-[16px]">
              Enjoy Loan Products that meet all your life goals from your
              personal to business to education and property.
            </p>
          </div>
          <div className=" rounded-sm">
            <Image
              src="/images/bg2.jpg"
              width={600}
              height={600}
              alt="frequently ask question"
              className="mix-blend-multiply rounded-sm"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LoanSettings;
