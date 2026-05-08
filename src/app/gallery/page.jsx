"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Camera, Star, Quote, Sparkles } from "lucide-react";

export default function GalleryPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-24 bg-[#0f3d33] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 blur-3xl opacity-10 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-yellow-400 text-sm font-semibold tracking-[3px] uppercase">
              Our Gallery
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
              See Our
              <br />
              Cleaning Results
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">
              Explore our professional residential cleaning and housekeeping
              work across Ambalapuzha and Alappuzha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-24 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
              Cleaning Showcase
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Before & After
              <br />
              Cleaning Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/images/gallery1.jpg",
              "/images/gallery2.jpg",
              "/images/gallery3.jpg",
              "/images/gallery4.jpg",
              "/images/gallery5.jpg",
              "/images/gallery6.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[32px]"
              >
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* ICON */}
                <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white text-green-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <Camera size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEANING EXPERIENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://copilot.microsoft.com/th/id/BCO.1f637e6a-e02e-4379-ac95-3198611fe209.png"
              alt="Cleaning Service"
              className="rounded-[32px] w-full h-[600px] object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-4xl font-bold text-green-900">500+</h3>

              <p className="text-gray-600 mt-1">Successful Cleaning Projects</p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
              Professional Results
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
              Bringing Freshness
              <br />
              to Every Space
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              Our experienced cleaning team uses modern methods and professional
              equipment to deliver spotless results every time.
            </p>

            <div className="space-y-5 mt-10">
              {[
                "Deep Cleaning Solutions",
                "Professional Equipment",
                "Trusted Cleaning Experts",
                "Affordable Pricing",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-900 flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>

                  <h3 className="text-lg font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#0f3d33] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-sm font-semibold tracking-[3px] uppercase">
              Customer Reviews
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Kumar",
                review:
                  "Excellent cleaning service with professional staff and great results.",
              },
              {
                name: "Anjali Nair",
                review:
                  "Very reliable housekeeping service. Highly recommended.",
              },
              {
                name: "Arun Das",
                review:
                  "Affordable pricing and premium quality cleaning experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 relative"
              >
                {/* QUOTE */}
                <div className="absolute top-6 right-6 text-white/10">
                  <Quote size={50} />
                </div>

                {/* STARS */}
                <div className="flex gap-1 text-yellow-400 mb-6">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>

                <p className="text-gray-300 leading-8 mb-8">{item.review}</p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-400"></div>

                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <p className="text-gray-400 text-sm">Happy Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Need Professional
            <br />
            Cleaning Service?
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            Book trusted residential cleaning services today with CleanHands
            Cleaning Solutions.
          </p>

          <button className="bg-[#0f3d33] text-white px-8 py-4 rounded-full font-semibold mt-10 hover:bg-black transition duration-300">
            Book Cleaning Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
