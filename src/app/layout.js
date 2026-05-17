import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Best Home Cleaning Service in Kollam & Kundara | Clean Hands Cleaning",
  description:
    "Professional home cleaning, deep cleaning, sofa cleaning, and office cleaning services in Kollam, Kundara, and across Kerala.",
  keywords: [
    "cleaning service kollam",
    "home cleaning kundara",
    "deep cleaning kollam",
    "sofa cleaning kerala",
    "office cleaning kollam",
    "clean hands cleaning",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
