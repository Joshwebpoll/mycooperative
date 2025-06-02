"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/frontPage/homePage/navBar";
import Footer from "@/components/frontPage/homePage/footer";
import LoanServicePage from "../loan-service/page";
import CallToAction2 from "@/components/frontPage/homePage/callAction2";
import { Users, Target, Award, Shield, Heart, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const AboutPage = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Unity & Cooperation",
      description:
        "We believe in the strength of collective effort and mutual support among our members.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Trust & Transparency",
      description:
        "Open communication and honest dealings form the foundation of our cooperative.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Community Care",
      description:
        "Supporting each member's growth and well-being is at the heart of what we do.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "Innovation",
      description:
        "Embracing modern solutions to better serve our members and community.",
    },
  ];

  const benefits = [
    "Competitive savings and loan rates",
    "Emergency financial assistance",
    "Investment opportunities",
    "Financial literacy programs",
    "Group insurance coverage",
    "Business development support",
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-[#37517e] py-28 mb-20">
        <motion.div
          {...fadeInUp}
          className="mx-auto lg:w-9/12 text-center text-white px-5"
        >
          <h1
            className=" text-4xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            About Us
          </h1>
          <p data-aos="fade-down" data-aos-duration="1200">
            A cooperative society build with the aims of tranforming lives and
            changing lives
          </p>
        </motion.div>
      </section>

      <section className="mx-auto  lg:w-10/12 pb-20 ">
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-[30px] items-center px-5"
        >
          <div>
            <Image
              src="/images/araromi_about.png"
              width={500}
              height={500}
              alt="frequently ask question"
              className="mix-blend-multiply"
            />
          </div>
          <div className="px-5">
            <p className="mb-3 text-gray-600 ">
              Founded with the vision of creating financial inclusion and
              economic empowerment, our cooperative society has grown from a
              small group of dedicated individuals to a thriving community of
              members working together towards common goals.
            </p>
            <p className="mb-3 text-gray-600 ">
              We understand that financial challenges can be overwhelming when
              faced alone. That's why we've built a platform where members can
              pool resources, share knowledge, and support each other's
              financial journey. Our cooperative operates on the principle that
              together, we can achieve what seems impossible individually.
            </p>
            <p className="text-gray-600">
              Through this application, we've modernized our operations while
              maintaining the personal touch and community spirit that defines
              cooperative societies. Every feature is designed with our members'
              needs in mind, making financial management more accessible and
              convenient than ever before.
            </p>
          </div>
        </motion.div>
      </section>
      <section className="mx-auto lg:w-7/12 pb-20 px-5 ">
        <motion.div {...fadeInUp} className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-5">Our Mission</h2>
          <p className="text-gray-600">
            To empower our members through collective economic action, provide
            accessible financial services, and strengthen our community through
            cooperation and mutual support.
          </p>
          <p className="text-gray-600">
            At Araromi Cooperative, we exist to bridge the gap between
            individual financial needs and collective economic strength. We are
            committed to creating opportunities where none existed before,
            transforming the traditional banking relationship from one of
            dependency to one of partnership and shared ownership.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto lg:w-7/12 px-5 pb-20">
        <motion.div {...fadeInUp} className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-5">Our Vision</h2>
          <p className="text-gray-600">
            A thriving community where every member achieves financial security
            and personal growth through the power of cooperation
          </p>
          <p className="text-gray-600">
            We envision a future where financial services serve people rather
            than profit margins, where every individual has access to the tools
            and support they need to build lasting prosperity. Our vision
            extends far beyond the walls of our cooperative to encompass a
            fundamental shift in how communities approach economic development
            and financial empowerment.
          </p>
        </motion.div>
      </section>
      <section data-aos="fade-right" className="mx-auto lg:w-10/12 px-5 pb-20">
        <motion.div {...fadeInUp} className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-5">
            Our Core Value
          </h2>
          {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4 animate-bounce">
                  {value.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* <section className="py-20">
        <div className="mx-auto lg:max-w-8/12 text-center">
          <h2 className="text-4xl  text-center font-bold text-gray-800 mb-5">
            Membership Benefit
          </h2>

          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </section> */}
      <CallToAction2 />
      <Footer />
    </div>
  );
};

export default AboutPage;
