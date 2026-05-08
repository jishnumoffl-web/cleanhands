"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bath,
  CookingPot,
  Sofa,
  Building2,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
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
              Our Services
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
              Professional
              <br />
              Cleaning Solutions
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">
              Premium residential cleaning and housekeeping services in
              Ambalapuzha, Alappuzha with trusted professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Cleaning",
                icon: <Sparkles size={28} />,
                image:
                  "https://copilot.microsoft.com/th/id/BCO.c473bd09-d794-47ec-afa7-cbe043b9d797.png",
              },
              {
                title: "Bathroom Cleaning",
                icon: <Bath size={28} />,
                image:
                  "https://copilot.microsoft.com/th/id/BCO.06ea5f2e-30c4-4df9-b258-5823c702373b.png",
              },
              {
                title: "Kitchen Cleaning",
                icon: <CookingPot size={28} />,
                image:
                  "https://copilot.microsoft.com/th/id/BCO.ba94ef85-49cf-4fb9-bcc5-364353bd5554.png",
              },
              {
                title: "Sofa Cleaning",
                icon: <Sofa size={28} />,
                image:
                  "https://copilot.microsoft.com/th/id/BCO.60a34f68-e4e3-4f9e-8de2-da079fc3bfc8.png",
              },
              {
                title: "Apartment Cleaning",
                icon: <Building2 size={28} />,
                image:
                  "https://copilot.microsoft.com/th/id/BCO.4767f20f-ee49-4a7f-924c-2cf969bf0302.png",
              },
              {
                title: "Housekeeping",
                icon: <ShieldCheck size={28} />,
                image:
                  "https://copilot.microsoft.com/th/id/BCO.81b9de5c-490c-43a7-b5b1-31ae8aa6d999.png",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition duration-500"
              >
                {/* IMAGE */}
                <div className="overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-white text-green-900 flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>

                  <p className="text-gray-600 leading-8 mt-5">
                    Reliable and professional cleaning solutions with premium
                    quality and trusted staff.
                  </p>

                  <button className="flex items-center gap-2 mt-8 text-green-900 font-semibold group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
              Why Choose Our Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Quality Cleaning
              <br />
              with Trusted Experts
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: "Verified Professionals",
              },
              {
                icon: <Sparkles size={28} />,
                title: "Premium Cleaning",
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

      {/* PROCESS */}
      <section className="py-24 bg-[#0f3d33] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-yellow-400 text-sm font-semibold tracking-[3px] uppercase">
              Simple Process
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Easy Cleaning
              <br />
              Booking Process
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Book Service",
              "Schedule Visit",
              "Cleaning Process",
              "Enjoy Clean Home",
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-[28px] p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>

                <h3 className="text-lg md:text-xl font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="py-24 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://copilot.microsoft.com/th/id/BCO.1f637e6a-e02e-4379-ac95-3198611fe209.png"
              alt="Cleaning Team"
              className="rounded-[32px] w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
              Service Benefits
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
              Trusted Cleaning
              <br />
              for Every Home
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              We provide modern residential cleaning solutions with attention to
              detail and customer satisfaction.
            </p>

            <div className="space-y-5 mt-10">
              {[
                "Experienced Cleaning Team",
                "Eco Friendly Products",
                "Affordable Service Packages",
                "Quick Booking Process",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-900 flex items-center justify-center">
                    <BadgeCheck size={22} />
                  </div>

                  <h3 className="text-lg font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Book Professional
            <br />
            Cleaning Today
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            Experience premium residential cleaning services with CleanHands
            Cleaning Solutions.
          </p>

          <button className="bg-[#0f3d33] text-white px-8 py-4 rounded-full font-semibold mt-10 hover:bg-black transition duration-300">
            Book Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
