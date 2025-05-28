import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/frontPage/homePage/navBar";
import Footer from "@/components/frontPage/homePage/footer";
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#37517e] py-28 mb-20">
        <div className="mx-auto lg:w-9/12 text-center text-white">
          <h1 className="  font-bold text-4xl">Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            quasi.
          </p>
        </div>
      </section>

      <section className="mx-auto lg:w-9/12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-[30px] items-center">
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
      <Footer />
    </div>
  );
};

export default AboutPage;
