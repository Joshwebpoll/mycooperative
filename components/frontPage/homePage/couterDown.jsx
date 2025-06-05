"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { bounceIn } from "@/lib/animations";
const CountDown = () => {
  const [counters, setCounters] = useState({
    members: 0,
    savings: 0,
    disbursed: 0,
    satisfaction: 0,
  });
  const [statsVisible, setStatsVisible] = useState(false);
  // Counter animation
  useEffect(() => {
    if (statsVisible) {
      const targets = {
        members: 500,
        savings: 50,
        disbursed: 100,
        satisfaction: 95,
      };
      const duration = 2000;

      Object.entries(targets).forEach(([key, target]) => {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCounters((prev) => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounters((prev) => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 16);
      });
    }
  }, [statsVisible]);
  // Stats visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "stats-section") {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById("stats-section");
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="py-20 bg-[#206bc4] mb-20">
      <motion.div className="mx-auto lg:max-w-10/12 px-5">
        <div id="stats-section" className="grid md:grid-cols-4 gap-4 ">
          <div
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="text-lg md:text-4xl font-bold text-blue-600 mb-2">
              {counters.members}+
            </div>
            <div className="text-gray-600 text-base md:text-lg">
              Active Members
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className=" text-lg md:text-4xl font-bold text-green-600 mb-2">
              ₦{counters.savings}M+
            </div>
            <div className="text-gray-600 text-base md:text-lg">
              Total Savings
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="text-lg md:text-4xl font-bold text-purple-600 mb-2">
              {counters.satisfaction}%
            </div>
            <div className="text-gray-600 text-base md:text-lg">
              Member Satisfaction
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="text-lg md:text-4xl font-bold text-amber-600 mb-2">
              {counters.disbursed}
            </div>
            <div className="text-gray-600 text-base md:text-lg">
              Disbursed Loan
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CountDown;
