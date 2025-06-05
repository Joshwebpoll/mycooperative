"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";

const features = [
  {
    image: "/images/plant.png",
    title: "Member-Owned & Transparent",
    description:
      "We operate with full transparency and accountability — no hidden charges, no surprises.",
  },
  {
    image: "/images/recycle-sign.png",
    title: "Affordable Loans",
    description:
      "Access low-interest loans quickly with flexible repayment options designed for members.",
  },
  {
    image: "/images/reduce.png",
    title: "Profit Sharing & Dividends",
    description:
      "Earn yearly dividends from cooperative profits — your savings work harder here.",
  },
  {
    image: "/images/reuse.png",
    title: "Emergency Support",
    description:
      "We stand by our members with fast, supportive assistance in times of financial need.",
  },
  {
    image: "/images/product-life.png",
    title: "Flexible Contribution Plans",
    description:
      "Save daily, weekly, or monthly — tailored to your income pattern.",
  },
  {
    image: "/images/finance.png",
    title: "Financial Growth & Empowerment",
    description:
      "Enjoy access to trainings, investment opportunities, and tools to grow your wealth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 mb-20">
      <motion.div {...fadeInUp} className="max-w-11/12 mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We are committed to building financial security and community wealth
            through trusted cooperative principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-xl p-6  transition"
            >
              <div className=" gap-4">
                <div className="mb-3">
                  <Image
                    src={feature.image}
                    width={40}
                    height={40}
                    //   loader={imageLoader}
                    alt="Araromi cooperative"
                    className=" rounded-sm animate-bounce"
                  />
                </div>
                <div>
                  <h3 className="text-base  md:text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
