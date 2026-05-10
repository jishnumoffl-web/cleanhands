"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, BadgeDollarSign, Clock3 } from "lucide-react";
import { PhoneCall, CalendarDays, Sparkles, House } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Star, Quote } from "lucide-react";

export default function Hero() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen bg-[#0f3d33] text-white flex items-center pt-24 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-cover"></div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center relative z-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Professional Cleaning Services
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
              Bringing Peace
              <br />
              of Mind with
              <br />
              Every Clean
            </h1>

            <p className="text-gray-300 text-lg mt-6 leading-8 max-w-xl">
              CleanHands Cleaning Solutions provides reliable residential
              cleaning & housekeeping services in Kollam, kottayam,
              pathanamthitta, alappuzha. Experience spotless cleaning with
              trusted professionals.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
                Book Now
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
                View Services
              </button>
            </div>

            {/* TRUSTED */}
            <div className="flex items-center gap-10 mt-14 flex-wrap">
              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-300">Happy Homes</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">5+</h2>
                <p className="text-gray-300">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">100%</h2>
                <p className="text-gray-300">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

            <img
              src="/images/hero.webp"
              alt="Cleaning Service"
              className="relative z-10 w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white text-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
                Why Choose Us
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Simple, Trusted
                <br />
                Cleaning Service
              </h2>
            </div>

            <p className="text-gray-500 max-w-sm leading-7 text-sm md:text-base">
              Professional cleaning with modern methods and reliable staff.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Eco Friendly",
                icon: <Leaf size={28} />,
              },
              {
                title: "Verified Staff",
                icon: <ShieldCheck size={28} />,
              },
              {
                title: "Affordable",
                icon: <BadgeDollarSign size={28} />,
              },
              {
                title: "Fast Service",
                icon: <Clock3 size={28} />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-[#f8f8f8] hover:bg-[#0f3d33] rounded-[28px] p-6 md:p-8 transition-all duration-500"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 text-green-900 group-hover:text-yellow-400 transition duration-500">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-semibold group-hover:text-white transition duration-500 leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADING */}
          <div className="text-center mb-16">
            <p className="text-green-900 font-semibold mb-4">OUR SERVICES</p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Professional Cleaning Solutions
            </h2>
          </div>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Deep Cleaning",
                image: "/images/deep.webp",
              },
              {
                title: "Kitchen Cleaning",
                image: "/images/kitchen.webp",
              },
              {
                title: "Bathroom Cleaning",
                image: "/images/bathroom.webp",
              },
              {
                title: "Commercial deep cleaning",
                image: "/images/house.webp",
              },
              {
                title: "Apartment Cleaning",
                image: "/images/apartment.webp",
              },
              {
                title: "Upholstery cleaning",
                image: "/images/sofa.webp",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition duration-500"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-6">
                    Reliable and affordable residential cleaning services with
                    premium quality.
                  </p>

                  <button className="bg-green-900 text-white px-6 py-3 rounded-full hover:bg-black transition duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#f8faf8] text-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* HEADING */}
          <div className="text-center mb-16">
            <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
              Simple Process
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              How It Works
            </h2>
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Book Service",
                icon: <PhoneCall size={26} />,
                number: "01",
              },
              {
                title: "Schedule Visit",
                icon: <CalendarDays size={26} />,
                number: "02",
              },
              {
                title: "Cleaning Process",
                icon: <Sparkles size={26} />,
                number: "03",
              },
              {
                title: "Enjoy Clean Home",
                icon: <House size={26} />,
                number: "04",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-gray-100 rounded-[28px] p-6 md:p-8 hover:bg-[#0f3d33] transition-all duration-500 shadow-sm"
              >
                {/* STEP NUMBER */}
                <span className="absolute top-5 right-5 text-sm font-bold text-gray-200 group-hover:text-white/20 transition duration-500">
                  {item.number}
                </span>

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-[#f8f8f8] group-hover:bg-white flex items-center justify-center text-green-900 mb-6 transition duration-500">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-semibold leading-snug group-hover:text-white transition duration-500">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 bg-[#0f3d33] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT IMAGE */}
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
                className="rounded-[32px] w-full h-[500px] object-cover"
              />

              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 bg-white text-black rounded-3xl px-6 py-5 shadow-xl">
                <h3 className="text-3xl font-bold text-green-900">500+</h3>

                <p className="text-gray-600">Homes Cleaned</p>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-yellow-400 text-sm font-semibold tracking-[3px] uppercase">
                Our Experience
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
                Professional Cleaning
                <br />
                with Trusted Experts
              </h2>

              <p className="text-gray-300 leading-8 mt-6">
                CleanHands Cleaning Solutions delivers premium residential
                cleaning services with modern equipment and experienced
                professionals.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  {
                    icon: <ShieldCheck size={24} />,
                    title: "Trusted & Verified Team",
                  },
                  {
                    icon: <Sparkles size={24} />,
                    title: "Premium Cleaning Quality",
                  },
                  {
                    icon: <Clock3 size={24} />,
                    title: "On-Time Service",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHATSAPP ENQUIRY SECTION */}
      <section className="py-20 bg-[#0f3d33] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div>
                <span className="text-yellow-400 text-sm font-semibold tracking-[3px] uppercase">
                  Quick Enquiry
                </span>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
                  Need Cleaning
                  <br />
                  Service Today?
                </h2>

                <p className="text-gray-300 leading-8 mt-6 max-w-lg">
                  Send your enquiry directly on WhatsApp and get a fast response
                  from CleanHands Cleaning Solutions.
                </p>

                <a
                  href="https://wa.me/917025725364"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold mt-10 hover:scale-105 transition duration-300"
                >
                  <MessageCircleMore size={22} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* RIGHT FORM */}
              <motion.form
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-[28px] p-6 md:p-8 space-y-5"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#f7f7f7] text-black p-4 rounded-2xl outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#f7f7f7] text-black p-4 rounded-2xl outline-none"
                />

                <select className="w-full bg-[#f7f7f7] text-black p-4 rounded-2xl outline-none">
                  <option>Select Service</option>
                  <option>Deep Cleaning</option>
                  <option>Kitchen Cleaning</option>
                  <option>Bathroom Cleaning</option>
                  <option>Housekeeping</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full bg-[#f7f7f7] text-black p-4 rounded-2xl outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#0f3d33] text-white py-4 rounded-2xl font-semibold hover:bg-black transition duration-300"
                >
                  Send Enquiry
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL SECTION */}
      <section className="py-20 bg-white text-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* HEADING */}
          <div className="text-center mb-16">
            <span className="text-green-900 text-sm font-semibold tracking-[3px] uppercase">
              Client Reviews
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              What Our Customers Say
            </h2>
          </div>

          {/* TESTIMONIAL CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul Kumar",
                review:
                  "Very professional cleaning team. My home looks fresh and spotless after every service.",
              },
              {
                name: "Anjali Nair",
                review:
                  "Affordable pricing and excellent service quality. Highly recommended in Alappuzha.",
              },
              {
                name: "Arun Das",
                review:
                  "Fast response and friendly staff. The deep cleaning service was amazing.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-[#f8f8f8] rounded-[28px] p-8 relative"
              >
                {/* QUOTE ICON */}
                <div className="absolute top-6 right-6 text-green-100">
                  <Quote size={42} />
                </div>

                {/* STARS */}
                <div className="flex gap-1 text-yellow-400 mb-6">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>

                {/* REVIEW */}
                <p className="text-gray-600 leading-8 mb-8">{item.review}</p>

                {/* USER */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0f3d33]"></div>

                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>

                    <p className="text-sm text-gray-500">Happy Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#0f3d33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Need a Spotless
            <br />
            Home Today?
          </h2>

          <p className="text-gray-300 text-lg mt-6 leading-8">
            Book professional cleaning services in Ambalapuzha today.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold mt-10 hover:scale-105 transition duration-300">
            Book Cleaning Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
