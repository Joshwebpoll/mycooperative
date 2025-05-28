import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/frontPage/homePage/navBar";
import Footer from "@/components/frontPage/homePage/footer";
import LoanServicePage from "../loan-service/page";
import CallToAction2 from "@/components/frontPage/homePage/callAction2";
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#37517e] py-28 mb-20">
        <div className="mx-auto lg:w-9/12 text-center text-white px-5">
          <h1 className=" text-4xl font-bold mb-4">About Us</h1>
          <p>
            A cooperative society build with the aims of tranforming lives and
            tranforming finance
          </p>
        </div>
      </section>

      <section className="mx-auto  lg:w-10/12 pb-20 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-[30px] items-center px-5">
          <div>
            <Image
              src="/images/faqs.png"
              width={500}
              height={500}
              alt="frequently ask question"
              className="mix-blend-multiply"
            />
          </div>
          <div className="px-5">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              fugiat maxime at laboriosam, accusamus animi ipsum tempora! Totam
              sit quam consequuntur quidem est iste, voluptas praesentium
              corporis porro atque repellat ipsa sequi quibusdam impedit?
              Voluptatibus dignissimos ipsa perspiciatis aliquid placeat,
              tenetur ea dolore obcaecati libero nostrum non reprehenderit nam
              sapiente?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              fugiat maxime at laboriosam, accusamus animi ipsum tempora! Totam
              sit quam consequuntur quidem est iste, voluptas praesentium
              corporis porro atque repellat ipsa sequi quibusdam impedit?
              Voluptatibus dignissimos ipsa perspiciatis aliquid placeat,
              tenetur ea dolore obcaecati libero nostrum non reprehenderit nam
              sapiente?
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto lg:w-7/12 pb-20 px-5 ">
        <div className="text-center">
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
        </div>
      </section>

      <section className="mx-auto lg:w-7/12 px-5 pb-20">
        <div className="text-center">
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
        </div>
      </section>
      <CallToAction2 />
      <Footer />
    </div>
  );
};

export default AboutPage;
