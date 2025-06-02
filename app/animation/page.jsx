// // pages/index.js (or any component)
// "use client";
// // components/AboutPage.js
// import { motion } from "framer-motion";

// const fadeInUp = {
//   initial: { y: 60, opacity: 0 },
//   whileinview: { y: 0, opacity: 1 },
//   transition: { duration: 0.8, ease: "easeOut" },
//   viewport: { once: true, amount: 0.4 },
// };

// const Homepage = () => {
//   return (
//     <main className="bg-gray-50 text-gray-800">
//       {/* === Hero Section === */}
//       <section className="bg-[url('/images/construction-hero.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center px-6">
//         <motion.div
//           {...fadeInUp}
//           className="text-center bg-black bg-opacity-60 p-8 rounded-xl"
//         >
//           <h1 className="text-5xl font-bold mb-4">Building Your Vision</h1>
//           <p className="text-lg mb-6">
//             Quality Construction & Reliable Services
//           </p>
//           <div className="flex justify-center gap-4">
//             <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition">
//               Get a Quote
//             </button>
//             <button className="bg-transparent border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
//               Our Projects
//             </button>
//           </div>
//         </motion.div>
//       </section>

//       {/* === Services Section === */}
//       <section className="py-20 px-6">
//         <motion.div {...fadeInUp} className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12">Our Services</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               "Residential Construction",
//               "Commercial Building",
//               "Renovations & Remodeling",
//               "Project Management",
//               "Architectural Design",
//               "Interior Fit-Outs",
//             ].map((service, idx) => (
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 key={idx}
//                 className="bg-white shadow-md p-6 rounded-lg"
//               >
//                 <h3 className="font-semibold text-xl">{service}</h3>
//                 <p className="mt-2 text-sm text-gray-600">
//                   Professional, timely, and cost-effective service delivery.
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* === Why Choose Us === */}
//       <section className="bg-gray-100 py-20 px-6">
//         <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Trusted Experts",
//                 desc: "Over 15 years of industry experience.",
//               },
//               {
//                 title: "Quality Materials",
//                 desc: "We only use the highest-grade materials.",
//               },
//               {
//                 title: "On-Time Delivery",
//                 desc: "We prioritize deadlines and efficiency.",
//               },
//             ].map((item, idx) => (
//               <div key={idx} className="p-6 bg-white shadow rounded">
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//                 <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* === Testimonials Section === */}
//       <section className="py-20 px-6 bg-white">
//         <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 name: "Sarah J.",
//                 feedback: "Reliable and professional from start to finish!",
//               },
//               {
//                 name: "Mike T.",
//                 feedback:
//                   "Excellent quality. Project completed ahead of schedule.",
//               },
//               {
//                 name: "Linda K.",
//                 feedback: "They transformed our old house beautifully!",
//               },
//             ].map((t, idx) => (
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 key={idx}
//                 className="bg-gray-100 p-6 rounded shadow"
//               >
//                 <p className="italic">"{t.feedback}"</p>
//                 <p className="mt-4 font-bold text-right">— {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* === Team Section === */}
//       <section className="py-20 px-6 bg-gray-50">
//         <motion.div {...fadeInUp} className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-10">Meet the Team</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: "John Doe", role: "Lead Engineer" },
//               { name: "Emily Smith", role: "Architect" },
//               { name: "Robert Lee", role: "Project Manager" },
//             ].map((member, idx) => (
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 key={idx}
//                 className="bg-white p-6 rounded shadow text-center"
//               >
//                 <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
//                 <h4 className="text-xl font-semibold">{member.name}</h4>
//                 <p className="text-sm text-gray-500">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* === Contact Section === */}
//       <section className="py-20 px-6 bg-white">
//         <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
//           <form className="grid gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-4 border rounded"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="p-4 border rounded"
//             />
//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="p-4 border rounded"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </motion.div>
//       </section>

//       {/* === Location Section === */}
//       <section className="h-96">
//         <iframe
//           className="w-full h-full"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.319011032677!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjAiTiAxMjLCsDI1JzA2LjgiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </section>
//     </main>
//   );
// };

// export default Homepage;
