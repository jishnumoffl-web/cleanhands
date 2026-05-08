"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-sm z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-900">
          <img src="/images/llogo.webp" alt="" className="h-16" />
        </h1>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>

          <button className="bg-yellow-400 px-5 py-2 rounded-full font-semibold">
            Book Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white p-6 flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
