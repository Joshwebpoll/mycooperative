"use client";

import { Button } from "@/components/ui/button";
import { Hand } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
const ServiceCard = () => {
  return (
    <section className="bg-[#05212f] py-28 mb-28 ">
      <motion.div {...fadeInUp} className="lg:w-8/12 px-5">
        <div className="mx-auto w-[90%]">
          <h1 className=" text-xl md:text-3xl font-bold text-white leading-normal capitalize mb-4">
            Empowering our members by providing sustainable financial solutions
            that enhance their economic well-being.
          </h1>
          <Button size="lg">Get Started</Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceCard;
