"use client";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">CleanHands</h2>
          <p>
            Professional Residential Cleaning & Housekeeping Services in
            Ambalapuzha.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-4">Contact</h3>
          <p>Ambalapuzha, Alappuzha</p>
          <p>+91 9876543210</p>
          <p>cleanhands@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
