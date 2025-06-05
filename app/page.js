import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/frontPage/homePage/heroSection";
import { Navbar } from "@/components/frontPage/homePage/navBar";
import Navbar2 from "@/components/frontPage/navBar2";
import AboutSection from "@/components/frontPage/homePage/aboutSection";
import Services from "@/components/frontPage/homePage/services";
import ServiceCard from "@/components/frontPage/homePage/serviceCard";
import FrequentAskQuestion from "@/components/frontPage/homePage/faq";
import CallToAction from "@/components/frontPage/homePage/callToAction";
import Footer from "@/components/frontPage/homePage/footer";
import ImageCenter from "@/components/frontPage/homePage/imageCenter";
import Testimonials from "@/components/frontPage/homePage/testimonial";
import WhyChooseUs from "@/components/frontPage/homePage/whyChooseUs";
import LoanSettings from "@/components/frontPage/homePage/loanSettings";
import HeroSections from "@/components/frontPage/homePage/HeroBg";
import CallToAction2 from "@/components/frontPage/homePage/callAction2";
import CountDown from "@/components/frontPage/homePage/couterDown";
import TestimonialsCarousel from "@/components/frontPage/homePage/testimonial2";
import ServiceList from "@/components/frontPage/homePage/iconList";
import ServiceCategory from "@/components/frontPage/homePage/iconList";
import ServiceCategories from "@/components/frontPage/homePage/iconList";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    // </div>
    <div>
      <Navbar />

      <HeroSections />
      <ImageCenter />
      <AboutSection />
      <Services />

      <ServiceCard />
      <FrequentAskQuestion />
      <CallToAction />
      <WhyChooseUs />
      <CountDown />
      <LoanSettings />
      {/* <Testimonials /> */}
      <TestimonialsCarousel />
      <CallToAction2 />

      <Footer />
    </div>
  );
}
