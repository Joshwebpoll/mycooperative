"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
const AboutSection = () => {
  return (
    <section className="bg-[#f3f5fa] py-28 mb-28">
      <motion.div {...fadeInUp} className="mx-auto lg:w-11/12 px-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
          <div>
            <Image
              src="/images/araromi_coop.jpg"
              width={600}
              height={700}
              //   loader={imageLoader}
              alt="Araromi cooperative"
              className=" rounded-sm "
            />
          </div>
          <div>
            <p className="mb-8 max-w-xl text-[15px]  md:text-base text-gray-600">
              Araromi Cooperative Society is a registered and member-owned
              cooperative society established to promote financial inclusion,
              shared prosperity, and mutual support among its members. We have
              grown into a trusted financial platform dedicated to uplifting
              individuals and small businesses through collaborative financial
              services.
            </p>
            <p className="mb-8 max-w-xl  text-[15px]  md:text-base text-gray-600">
              Our cooperative brings together individuals who share common goals
              and work collectively to achieve what would be difficult to
              accomplish alone. Every member has an equal voice in
              decision-making, and every member benefits from our shared
              success.
            </p>
            <Button
              asChild
              className=" w-[102.86px] lg:w-[180px] h-[32px] lg:h-[40px] rounded-[10px]"
            >
              <Link href="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
