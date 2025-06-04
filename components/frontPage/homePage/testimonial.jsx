"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah A.",
    role: "School Teacher",
    message:
      "Joining our co-op was one of the best decisions. I now save consistently and accessed a loan stress-free.",
  },
  {
    name: "Chidi M.",
    role: "Small Business Owner",
    message:
      "The cooperative helped me grow my shop with a quick and affordable loan. They truly support members!",
  },
  {
    name: "Aisha K.",
    role: "Fashion Designer",
    message:
      "Transparent, reliable, and empowering. I’ve grown my finances and invested in a project I believe in.",
  },
  {
    name: "Musa I.",
    role: "Farmer",
    message:
      "With support from the co-op, I secured funds for farming and paid back easily after harvest.",
  },
];

// const testimonies = [
//   {
//     id: 1,
//     name: "Adebimpe Ayodele",
//     description:
//       "Joining Araromi cooperative was one of the best financial decisions I've made. I was able to save consistently and access a low-interest loan to pay my child’s school fees without stress.",
//     image: "/images/joinus.jpg",
//   },
//   {
//     id: 2,
//     name: "Adebimpe Ayodele",
//     description:
//       "Joining Araromi cooperative was one of the best financial decisions I've made. I was able to save consistently and access a low-interest loan to pay my child’s school fees without stress.",
//     image: "/images/joinus.jpg",
//     occupation: "School Teacher",
//   },
//   {
//     id: 3,
//     occupation: "Small Business Owner",
//     description:
//       "The support I received from the co-operative helped me expand my grocery store. I got a quick loan without the usual bank stress, and their team truly cares about members’ growth.",
//     image: "/images/joinus.jpg",
//     name: "Chidi M",
//   },
//   {
//     id: 4,
//     occupation: "Fashion Designer",
//     description:
//       "I love how transparent and organized this cooperative is. I started with little savings, but now I’ve grown financially and even invested in one of their community projects!",
//     image: "/images/joinus.jpg",
//     name: "Aisha Kaosara",
//   },
//   {
//     id: 5,
//     occupation: "Civil Servant",
//     description:
//       "Unlike other places, this co-op keeps things simple and honest. The monthly savings plans are flexible, and I received my full returns without delay at the end of the year!",
//     image: "/images/joinus.jpg",
//     name: "Uche E.",
//   },
// ];

const Testimonials = () => {
  return (
    <section
      className="bg-[#f3f5fa] py-16 mb-20
    "
    >
      <motion.div {...fadeInUp} className="max-w-10/12 mx-auto px-5 ">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Members Say
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/1 sm:basis-1/2 md:basis-1/4"
              >
                <Card className="h-full rounded-sm shadow-xl my-3 border-none">
                  <CardContent className="p-6 flex flex-col gap-4 my-3">
                    <Quote size={23} color="#206bc4" />
                    <p className="text-gray-600 italic">
                      "{testimonial.message}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                {/* 
                <div className="bg-white p-5 rounded-sm shadow-xl my-5">
                  <Quote size={23} color="#206bc4" />
                  <p className="text-gray-600 italic">
                    "{testimonial.message}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Testimonials;
