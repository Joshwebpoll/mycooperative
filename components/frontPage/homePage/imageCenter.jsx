"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import BouncingBlobCoop from "@/components/blob/blob";

const ImageCenter = () => {
  return (
    <section className="mx-auto lg:w-8/12 py-20 px-5 relative">
      <motion.div {...fadeInUp}>
        <Image
          src="/images/dashboard1.png"
          width={800}
          height={800}
          alt="dashboard"
          className="mix-blend-multiply"
        />
      </motion.div>

      <BouncingBlobCoop
        position="top-10 right-5"
        size={120}
        colorStart="#00B894"
        colorEnd="#74B9FF"
      />
    </section>
  );
};

export default ImageCenter;
