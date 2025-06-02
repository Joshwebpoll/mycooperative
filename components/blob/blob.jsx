"use client";

import { motion } from "framer-motion";

const BouncingBlobCoop = ({
  size = 100,
  position = "top-5 left-5",
  colorStart = "#007BFF",
  colorEnd = "#00D4FF",
  zIndex = "-z-10",
}) => {
  return (
    <motion.span
      className={`absolute ${position} ${zIndex}`}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill={`url(#coopBlobGradient)`} />
        <defs>
          <linearGradient
            id="coopBlobGradient"
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={colorStart} stopOpacity="0.4" />
            <stop offset="1" stopColor={colorEnd} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.span>
  );
};

export default BouncingBlobCoop;
