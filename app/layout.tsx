import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glamour & Glow — Luxury Makeup & Beauty",
  description:
    "Discover premium makeup and beauty products curated for the modern woman. Shop foundations, lipsticks, eyeshadows, and more at Glamour & Glow.",
  keywords: "makeup, beauty, cosmetics, lipstick, foundation, eyeshadow, luxury beauty",
  openGraph: {
    title: "Glamour & Glow — Luxury Makeup & Beauty",
    description: "Premium makeup and beauty products for the modern woman.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-[#1A1A1A] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}