"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Camera as Instagram, MessageCircle as Twitter, Globe as Facebook, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, BRAND } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const footerSections = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "#shop" },
      { label: "Bestsellers", href: "#bestsellers" },
      { label: "New Arrivals", href: "#new-arrivals" },
      { label: "Sale", href: "#shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "#contact" },
      { label: "Shipping & Returns", href: "#contact" },
      { label: "Order Tracking", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#about" },
      { label: "Press", href: "#about" },
      { label: "Sustainability", href: "#about" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Newsletter Strip */}
      <div className="bg-gradient-to-r from-[#E8A0B0] to-[#F9C6D0]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Join the Glamour Circle
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Get 15% off your first order + exclusive beauty tips.
            </p>
          </motion.div>
          <motion.form
            variants={fadeInUp}
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto gap-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-full text-[#1A1A1A] text-sm outline-none focus:ring-2 focus:ring-white/50 bg-white/90"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>
        </motion.div>
      </div>

      {/* Main Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {BRAND.name}
              </span>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#E8A0B0] mt-0.5">
                {BRAND.tagline}
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {BRAND.description}
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-white/60 hover:text-[#E8A0B0] text-sm transition-colors duration-200"
              >
                <Mail size={14} />
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 text-white/60 hover:text-[#E8A0B0] text-sm transition-colors duration-200"
              >
                <Phone size={14} />
                {BRAND.phone}
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                {BRAND.address}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
                { icon: Twitter, href: BRAND.social.twitter, label: "Twitter" },
                { icon: Facebook, href: BRAND.social.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#E8A0B0] hover:border-[#E8A0B0] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={getLinkHref(link.href)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm text-white/60 hover:text-[#E8A0B0] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={11} className="text-[#E8A0B0] fill-[#E8A0B0]" /> for beauty lovers
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white/70 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}