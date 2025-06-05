"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// Society Building Community Through Shared Prosperity
const HeroSection = ({
  badge = "✨ Araromi Co-operative Society",
  heading = "Welcome to Araromi Co-operative.",
  description = "Empowering our members through community-driven financial solutions. At Araromi cooperative society, we believe in the power of unity and shared success. Join our cooperative and experience a secure, transparent, and rewarding way to save, invest, and grow together.",
  buttons = {
    primary: {
      text: "Join Now",
      url: "https://araromi.netlify.app/",
    },
    secondary: {
      text: "Learn More",
      url: "https://araromi.netlify.app/",
    },
  },
  image = {
    src: "https://araromi.netlify.app/images/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}) => {
  return (
    <section className="py-32">
      <div className="mx-auto lg:w-11/12 ">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-2xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-[15px] md:text-['16px'] text-muted-foreground">
              {description}
            </p>
            <div
              data-aos="fade-up"
              className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
            >
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
