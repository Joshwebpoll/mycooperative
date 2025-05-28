import { Button } from "@/components/ui/button";
import { Hand } from "lucide-react";
import React from "react";

const ServiceCard = () => {
  return (
    <section className="bg-[#05212f] py-28 mb-28 ">
      <div className="lg:w-8/12 px-5">
        <div className="mx-auto w-[90%]">
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-normal capitalize mb-4">
            Empowering our members by providing sustainable financial solutions
            that enhance their economic well-being.
          </h1>
          <Button
            className=" w-[102.86px] lg:w-[180px] h-[32px] lg:h-[40px] rounded-[10px] font-bold"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
