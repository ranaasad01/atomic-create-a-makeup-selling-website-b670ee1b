"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Heart, Search } from 'lucide-react';
import { navLinks, BRAND, CTA } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F9C6D0]/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-serif text-xl md:text-2xl font-bold tracking-wide text-[#1A1A1A] group-hover:text-[#E8A0B0] transition-colors duration-200"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {BRAND.name}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#E8A0B0] font-sans">
              {BRAND.tagline}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLinkHref(link.href)}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative text-sm font-medium tracking-wide text-[#1A1A1A]/80 hover:text-[#E8A0B0] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E8A0B0] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              aria-label="Search"
              className="p-2 text-[#1A1A1A]/70 hover:text-[#E8A0B0] transition-colors duration-200"
            >
              <Search size={18} />
            </button>
            <button
              aria-label="Wishlist"
              className="p-2 text-[#1A1A1A]/70 hover:text-[#E8A0B0] transition-colors duration-200 relative"
            >
              <Heart size={18} />
            </button>
            <button
              aria-label="Cart"
              className="p-2 text-[#1A1A1A]/70 hover:text-[#E8A0B0] transition-colors duration-200 relative"
            >
              <ShoppingBag size={18} />
            </button>
            <Link
              href={getLinkHref(CTA.href)}
              onClick={(e) => handleAnchorClick(e, CTA.href)}
              className="ml-2 px-5 py-2 bg-[#E8A0B0] text-white text-sm font-medium tracking-wide rounded-full hover:bg-[#d48fa0] transition-colors duration-200 shadow-sm"
            >
              {CTA.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              aria-label="Cart"
              className="p-2 text-[#1A1A1A]/70 hover:text-[#E8A0B0] transition-colors"
            >
              <ShoppingBag size={20} />
            </button>
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1A1A1A]/70 hover:text-[#E8A0B0] transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-md border-t border-[#F9C6D0]/40"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => {
                      handleAnchorClick(e, link.href);
                      setIsOpen(false);
                    }}
                    className="block py-3 text-base font-medium text-[#1A1A1A]/80 hover:text-[#E8A0B0] border-b border-[#FFE4EC] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
                className="pt-4"
              >
                <Link
                  href={getLinkHref(CTA.href)}
                  onClick={(e) => {
                    handleAnchorClick(e, CTA.href);
                    setIsOpen(false);
                  }}
                  className="block w-full text-center px-6 py-3 bg-[#E8A0B0] text-white font-medium rounded-full hover:bg-[#d48fa0] transition-colors duration-200"
                >
                  {CTA.label}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}