"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Badge } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
// background-image: linear-gradient(to right, white, transparent), url();
export default function HeroSections() {
  return (
    <motion.section {...fadeInUp} className="relative py-20 ">
    
      <div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "linear-gradient(to right, white, transparent), url('/images/herobg.png')",
          }}
        ></div>

        {/* Content */}
        <div
          {...fadeInUp}
          className="relative z-10 flex items-center h-full px-8 md:px-16"
        >
          <div className=" max-w-xl">
            <span className="inline-flex mb-3 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-[#206bc4] text-white dark:bg-white dark:text-neutral-800">
              Transforming lives and changing lives
            </span>
            <h1 className="text-2xl md:text-[45px]  mb-4 text-black">
              Welcome to{" "}
              <span className="text-[#F9A825]">
                Araromi Cooperative Society
              </span>
            </h1>
            <p className="text-lg md:text-['16px'] mb-6 text-gray-600">
              Empowering our members through community-driven financial
              solutions. At Araromi cooperative society, we believe in the power
              of unity and shared success. Join our cooperative and experience a
              secure, transparent, and rewarding way to save, invest, and grow
              together.
            </p>
            <Button size="lg" className=" ">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
