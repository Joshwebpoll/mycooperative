"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
const CallToAction = () => {
  return (
    <section className="mx-auto lg:w-10/12 pb-28 px-5">
      <motion.div {...fadeInUp}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-5 px-5">
            <div className="mb-5 ">
              <h3 className="text-[20px] md:text-[25px] font-semibold mb-2">
                Ready to Join Our Cooperative Family?
              </h3>
              <p className="mb-2 text-gray-700 text-[16px]">
                Take the first step toward financial empowerment and community
                building. Membership is open and we're here to help you succeed.
              </p>
              <h3 className="text-[18px] font-semibold mb-2">
                Contact us today to:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2 text-[16px]">
                <li>Schedule a consultation</li>
                <li>Attend an information session</li>
                <li>Begin your membership application</li>
                <li>Learn about special launch promotions</li>
              </ul>

              <p className="text-gray-700 text-[16px]">
                <strong>Join the Cooperative Movement</strong> Be part of
                something bigger than yourself. Together, we can achieve what
                none of us could accomplish alone. Your cooperative awaits!
              </p>
            </div>
            <Button className=" ">Become a Member</Button>
          </div>
          <div>
            <Image
              src="/images/membership.png"
              width={500}
              height={500}
              alt="frequently ask question"
              className="mix-blend-multiply rounded-sm"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
