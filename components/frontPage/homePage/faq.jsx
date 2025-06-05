"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

const FrequentAskQuestion = () => {
  return (
    <section className=" py-20 mb-28 bg-[#f3f5fa]">
      <motion.div {...fadeInUp} className="mx-auto lg:w-11/12 px-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-[30px]">
          <div>
            <Image
              src="/images/faqs.png"
              width={500}
              height={500}
              alt="frequently ask question"
              className="mix-blend-multiply"
            />
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="bg-white px-5 rounded-sm mb-3"
              >
                <AccordionTrigger className=" text-base md:text-lg hover:no-underline ">
                  What is a cooperative society?
                </AccordionTrigger>
                <AccordionContent className="text-[15px]  md:text-base text-gray-700">
                  A cooperative is an autonomous association of people united
                  voluntarily to meet their common economic, social, and
                  cultural needs through a jointly owned and democratically
                  controlled enterprise.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white px-5 rounded-sm mb-3"
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline ">
                  How is a cooperative different from a bank?
                </AccordionTrigger>
                <AccordionContent className="text-[15px]  md:text-base text-gray-700">
                  Unlike banks owned by shareholders, cooperatives are owned by
                  members who use the services. Profits are returned to members
                  as dividends, and each member has equal voting rights
                  regardless of their investment amount.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white px-5 rounded-sm mb-3"
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline ">
                  What are the benefits of joining?
                </AccordionTrigger>
                <AccordionContent className="text-[15px]  md:text-base text-gray-700">
                  Members enjoy better rates on loans, higher returns on
                  savings, dividend payments, democratic participation in
                  decision-making, and access to financial education and
                  community programs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white px-5 rounded-sm mb-3"
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline ">
                  How much does membership cost?
                </AccordionTrigger>
                <AccordionContent className="text-[15px]  md:text-base text-gray-700">
                  Membership requires a one-time fee of $[Amount] and a minimum
                  share purchase of $[Amount]. There are no hidden fees or
                  charges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white px-5 rounded-sm mb-3"
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline ">
                  Are my deposits safe?
                </AccordionTrigger>
                <AccordionContent className="text-[15px]  md:text-base text-gray-700">
                  Yes, we maintain strict financial controls, regular audits,
                  and appropriate insurance coverage to protect member deposits
                  and investments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white px-5 rounded-sm mb-3"
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline ">
                  Can I withdraw my shares?
                </AccordionTrigger>
                <AccordionContent className="text-[15px]  md:text-base text-gray-700">
                  Yes, members can withdraw shares according to our bylaws,
                  typically with appropriate notice to ensure cooperative
                  stability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FrequentAskQuestion;
