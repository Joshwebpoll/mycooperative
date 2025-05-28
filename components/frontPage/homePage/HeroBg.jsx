import { Button } from "@/components/ui/button";
import React from "react";
// background-image: linear-gradient(to right, white, transparent), url();
export default function HeroSections() {
  return (
    <section className="relative h-screen">
      {/* Background image with linear gradient overlay */}
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
      <div className="relative z-10 flex items-center h-full px-8 md:px-16">
        <div className="text-white max-w-xl">
          <h1 className="text-2xl md:text-[45px] font-bold mb-4 text-black">
            Welcome to Araromi Cooperative Society
          </h1>
          <p className="text-lg md:text-['16px'] mb-6 text-gray-700">
            Empowering our members through community-driven financial solutions.
            At Araromi cooperative society, we believe in the power of unity and
            shared success. Join our cooperative and experience a secure,
            transparent, and rewarding way to save, invest, and grow together.
          </p>
          <Button className=" w-[102.86px] lg:w-[180px] h-[32px] lg:h-[40px] rounded-[10px]">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
}
