"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/frontPage/homePage/navBar";
import Footer from "@/components/frontPage/homePage/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CallToAction2 from "@/components/frontPage/homePage/callAction2";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#37517e] py-28 mb-20">
        <motion.div
          {...fadeInUp}
          className="mx-auto lg:w-8/12 text-center text-white"
        >
          <h1 className="  font-bold text-4xl mb-3">Contact Us</h1>
          <p>
            Transforming Lives Through Collective Action - Experience the Power
            of Cooperative Where Your Contributions Build Dreams and Your
            Participation Shapes Decisions
          </p>
        </motion.div>
      </section>

      <section className="mx-auto lg:w-9/12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <motion.div {...fadeInUp} className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Get In Touch
            </h1>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              We'd love to talk about how we can help you.
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Fill in the form
              </h2>

              <form>
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      First Name
                    </label>
                    <Input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">
                      Phone Number
                    </label>
                    <Input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">
                      Details
                    </label>
                    <Textarea
                      placeholder="Type your message here."
                      id="message"
                      name="message"
                      // onChange={handleChange}
                      // value={values.message}
                      className="h-50"
                    />
                  </div>
                </div>

                <div className="mt-4 grid">
                  <Button>Send Message</Button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-neutral-800">
              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    Monthly Mettings
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    Every First Wenesday of Every Month
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    Time: 10:00am
                  </p>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    Phone Number
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    You can call us or Whatsapp us on the following numbers:
                  </p>
                  <a
                    className="mt-2 block items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    +2349059995290
                  </a>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    +2347036473695
                  </a>
                </div>
              </div>

              <div className=" flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    Our Address
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    You can easily visit us at our office:
                  </p>
                  <address className="mt-1 text-neutral-400 text-sm not-italic">
                    300 Bath Street, Tay House Glasgow G2 4JR, United Kingdom
                  </address>
                </div>
              </div>

              <div className=" flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    Contact us by email
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    If you wish to write us an email instead please use
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    info@araromicooperative.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <CallToAction2 />

      <Footer />
    </div>
  );
};

export default ContactPage;
