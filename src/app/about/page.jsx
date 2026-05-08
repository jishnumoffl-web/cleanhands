"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Clock3, BadgeCheck } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
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
              About CleanHands
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
              Trusted Cleaning
              <br />
              Experts in
              <br />
              Alappuzha
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">
              We provide professional residential cleaning and housekeeping
              services with trusted staff, modern cleaning methods, and
              affordable pricing.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ABOUT SECTION */}
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
              src="https://copilot.microsoft.com/th/id/BCO.7c063b69-efe5-4d0e-a78f-3ae4e6dd1bca.png"
              alt="Cleaning Team"
              className="rounded-[32px] w-full h-[600px] object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-4xl font-bold text-green-900">5+</h3>

              <p className="text-gray-600 mt-1">Years Experience</p>
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
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
              Creating Clean &
              <br />
              Healthy Homes
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              CleanHands Cleaning Solutions is a trusted residential cleaning
              company in Ambalapuzha, Alappuzha. We focus on delivering premium
              cleaning experiences with attention to detail and customer
              satisfaction.
            </p>

            <div className="space-y-5 mt-10">
              {[
                "Professional & Verified Staff",
                "Eco Friendly Cleaning Products",
                "Affordable Residential Cleaning",
                "Fast & Reliable Service",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-900">
                    <BadgeCheck size={22} />
                  </div>

                  <h3 className="text-lg font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* OUR MISSION SECTION */}
      <section className="py-24 bg-[#f8faf8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
                Our Mission
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
                Delivering Cleaner,
                <br />
                Healthier Spaces
              </h2>

              <p className="text-gray-600 leading-8 mt-8">
                Our mission is to provide reliable and high-quality cleaning
                services that make every home feel fresh, healthy, and
                stress-free.
              </p>

              {/* LIST */}
              <div className="space-y-5 mt-10">
                {[
                  "Trusted Residential Cleaning",
                  "Modern Cleaning Methods",
                  "Eco Friendly Products",
                  "Affordable Service Packages",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-900 flex items-center justify-center">
                      <CheckCircle2 size={22} />
                    </div>

                    <h3 className="text-lg font-semibold">{item}</h3>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://copilot.microsoft.com/th/id/BCO.1f637e6a-e02e-4379-ac95-3198611fe209.png"
                alt="Mission"
                className="rounded-[32px] w-full h-[550px] object-cover"
              />

              {/* FLOATING BOX */}
              <div className="absolute bottom-6 right-6 bg-white rounded-3xl p-6 shadow-xl">
                <p className="text-gray-500 text-sm">Trusted by</p>

                <h3 className="text-4xl font-bold text-green-900 mt-2">500+</h3>

                <p className="text-gray-600 mt-1">Happy Customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* WHY TRUST US */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
              Why Trust Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Reliable Cleaning
              <br />
              for Modern Homes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: "Verified Staff",
              },
              {
                icon: <Sparkles size={28} />,
                title: "Premium Quality",
              },
              {
                icon: <Clock3 size={28} />,
                title: "On-Time Service",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-[#f8f8f8] rounded-[32px] p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0f3d33] text-yellow-400 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready for a
            <br />
            Spotless Home?
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            Book professional cleaning services today with CleanHands Cleaning
            Solutions.
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
