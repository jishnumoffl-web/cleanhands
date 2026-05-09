"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3, MessageCircleMore } from "lucide-react";

export default function ContactPage() {
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
              Contact Us
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
              Get In Touch
              <br />
              With Our Team
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">
              Contact CleanHands Cleaning Solutions for residential cleaning and
              housekeeping services in Ambalapuzha, Alappuzha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone size={26} />,
                title: "Phone Number",
                value: "+91 7025725364",
              },
              {
                icon: <Mail size={26} />,
                title: "Email Address",
                value: "Cleanhands77@gmail.com",
              },
              {
                icon: <MapPin size={26} />,
                title: "Location",
                value: "Kollam, kottayam, pathanamthitta, alappuzha",
              },
              {
                icon: <Clock3 size={26} />,
                title: "Working Hours",
                value: "9 AM - 7 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] p-8 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0f3d33] text-yellow-400 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-600 leading-7">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 bg-white overflow-hidden">
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
                Send Enquiry
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
                Let’s Discuss
                <br />
                Your Cleaning Needs
              </h2>

              <p className="text-gray-600 leading-8 mt-8">
                Fill out the enquiry form and our team will contact you shortly
                for residential cleaning and housekeeping services.
              </p>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/917025725364"
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold mt-10 hover:scale-105 transition duration-300"
              >
                <MessageCircleMore size={22} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* FORM */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f8faf8] rounded-[32px] p-8 md:p-10 space-y-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white border border-gray-100 p-5 rounded-2xl outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white border border-gray-100 p-5 rounded-2xl outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-gray-100 p-5 rounded-2xl outline-none"
              />

              <select className="w-full bg-white border border-gray-100 p-5 rounded-2xl outline-none">
                <option>Select Service</option>
                <option>Deep Cleaning</option>
                <option>Kitchen Cleaning</option>
                <option>Bathroom Cleaning</option>
                <option>Housekeeping</option>
                <option>Sofa Cleaning</option>
              </select>

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full bg-white border border-gray-100 p-5 rounded-2xl outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0f3d33] text-white py-5 rounded-2xl font-semibold hover:bg-black transition duration-300"
              >
                Send Enquiry
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[32px] overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=Ambalapuzha,Alappuzha&output=embed"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f3d33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready for a
            <br />
            Cleaner Home?
          </h2>

          <p className="text-gray-300 leading-8 mt-6">
            Contact CleanHands Cleaning Solutions today for professional
            cleaning services.
          </p>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold mt-10 hover:scale-105 transition duration-300"
          >
            <MessageCircleMore size={22} />
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
