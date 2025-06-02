"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function CallToAction2() {
  return (
    <section className="">
      <motion.div
        {...fadeInUp}
        className="max-w-10/12 mx-auto text-center bg-primary text-white py-16 px-4 rounded-xl mb-20  my-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-[16px] md:text-[18px] text-white/90 mb-8">
          Join our cooperative society today and start building wealth, saving
          smarter, and accessing reliable support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className=" bg-white text-[#206bc4] hover:bg-white">
            <Link href="/register">Become a Member</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
