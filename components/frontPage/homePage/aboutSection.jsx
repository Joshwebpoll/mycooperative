"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <section className="bg-[#f3f5fa] py-28 mb-28">
      <div className="mx-auto lg:w-11/12 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
          <div className=" rounded ">
            <Image
              src="/images/dashboard.png"
              width={900}
              height={900}
              //   loader={imageLoader}
              alt="Picture of the author"
            />
          </div>
          <div className=" rounded ">
            <p className="mb-8 max-w-xl  md:text-['16px'] text-muted-foreground">
              Araromi Cooperative Society is a registered and member-owned
              cooperative society established to promote financial inclusion,
              shared prosperity, and mutual support among its members. We have
              grown into a trusted financial platform dedicated to uplifting
              individuals and small businesses through collaborative financial
              services.
            </p>
            <p className="mb-8 max-w-xl  md:text-['16px'] text-muted-foreground">
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
              <Link href="/about_us">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
