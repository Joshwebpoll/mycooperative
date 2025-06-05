"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "CEO, Acme Corp",
//     quote:
//       "This service completely transformed our business. Highly recommended!",
//     image: "/images/nafisat.jpg",
//   },
//   {
//     name: "Jane Smith",
//     role: "Marketing Lead, BrightTech",
//     quote: "Outstanding support and amazing results. Couldn’t ask for more.",
//     image: "/images/testimonial2.jpg",
//   },
//   {
//     name: "Samuel Green",
//     role: "Founder, Greenworks",
//     quote: "Absolutely loved the experience. Our team is very satisfied.",
//     image: "/images/testimonial3.jpg",
//   },
//   {
//     name: "Lisa Adams",
//     role: "CTO, NovaSoft",
//     quote: "We saw a 300% increase in engagement. Fantastic team!",
//     image: "/images/testimonial4.jpg",
//   },
//   {
//     name: "Mark Lee",
//     role: "Product Manager, Waypoint",
//     quote: "Their process is smooth, efficient, and delivers real results.",
//     image: "/images/testimonial5.jpg",
//   },
// ];
const testimonials = [
  {
    image: "/images/nafisat.jpg",
    name: "Sarah A.",
    role: "School Teacher",
    quote:
      "Joining our co-op was one of the best decisions. I now save consistently and accessed a loan stress-free.",
  },
  {
    image: "/images/nafisat.jpg",
    name: "Chidi M.",
    role: "Small Business Owner",
    quote:
      "The cooperative helped me grow my shop with a quick and affordable loan. They truly support members!",
  },
  {
    image: "/images/nafisat.jpg",
    name: "Aisha K.",
    role: "Fashion Designer",
    quote:
      "Transparent, reliable, and empowering. I’ve grown my finances and invested in a project I believe in.",
  },
  {
    image: "/images/nafisat.jpg",
    name: "Musa I.",
    role: "Farmer",
    quote:
      "With support from the co-op, I secured funds for farming and paid back easily after harvest.",
  },
];
export default function TestimonialsCarousel() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [index, setIndex] = useState(0);

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerSlide(1);
    else if (width < 1024) setItemsPerSlide(2);
    else setItemsPerSlide(3);
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (i) => setIndex(i);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const currentItems = testimonials.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="bg-[#f3f5fa] py-16 mb-20 ">
      <div className="relative lg:max-w-10/12 mx-auto px-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold  mb-8">What Our Members Say</h2>
          <div className="space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel with Swipe */}
        <div {...swipeHandlers}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className={`grid gap-6 ${
                itemsPerSlide === 1
                  ? "grid-cols-1"
                  : itemsPerSlide === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {currentItems.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-sm shadow-xl p-6 flex flex-col items-center text-center"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 shadow"
                  />
                  <p className="text-sm text-gray-600 italic">"{t.quote}"</p>
                  <div className="mt-4">
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-black" : "bg-gray-300"
              } hover:bg-black transition-colors`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
