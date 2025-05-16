import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/frontPage/homePage/heroSection";
import { Navbar } from "@/components/frontPage/homePage/navBar";
export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    // </div>
    <div className="px-16">
      
      {/* <Navbar /> */}
      <HeroSection />
    </div>
  );
}
