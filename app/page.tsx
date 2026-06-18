"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Heart, ShoppingBag, ArrowRight, Sparkles, Check, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline Data ────────────────────────────────────────────────────────────

const featuredProducts = [
  {
    id: "p1",
    name: "Velvet Matte Lipstick",
    brand: "Glamour & Glow",
    category: "Lipstick",
    price: 28,
    originalPrice: 38,
    rating: 4.9,
    reviewCount: 1240,
    image: "https://m.media-amazon.com/images/I/61G10KYuIBL._AC_UF1000,1000_QL80_.jpg",
    shades: ["Rose Petal", "Berry Crush", "Nude Bliss", "Classic Red"],
    badge: "Bestseller",
    description:
      "Long-wearing velvet matte formula that keeps lips hydrated for up to 12 hours.",
    isFeatured: true,
  },
  {
    id: "p2",
    name: "Luminous Glow Foundation",
    brand: "Glamour & Glow",
    category: "Foundation",
    price: 52,
    rating: 4.8,
    reviewCount: 876,
    image: "https://www.hourglasscosmetics.com/cdn/shop/files/2000x2000_72dpi_0004_HG_SHADEFINDER_SHADE_CHARTS-SPRING26-R23_6e1d9d5b-704e-487f-86f8-33bb77f52823.jpg?v=1768593929&width=480",
    shades: ["Ivory", "Sand", "Honey", "Caramel", "Espresso"],
    badge: "New",
    description:
      "Buildable coverage with a natural luminous finish. SPF 30 included.",
    isFeatured: true,
  },
  {
    id: "p3",
    name: "Smoky Eye Palette",
    brand: "Glamour & Glow",
    category: "Eyeshadow",
    price: 45,
    originalPrice: 60,
    rating: 4.7,
    reviewCount: 654,
    image: "https://i5.walmartimages.com/seo/Black-Smokey-Eyeshadow-Palette-Eye-Black-Makeup-9-Colors-Black-Silver-Gray-White-Eyeshadow-Makeup-Palette-Waterproof-Cool-Toned-Matte-Glitter-Eyeshad_58efe4c6-d0d7-47b4-b616-a1fd37466b58.36d5e27d0c361650f4c192eab26a8c9f.jpeg",
    shades: ["Midnight", "Taupe", "Champagne", "Onyx"],
    badge: "Sale",
    description:
      "12 richly pigmented shades from matte to shimmer for endless eye looks.",
    isFeatured: true,
  },
  {
    id: "p4",
    name: "Rose Blush Duo",
    brand: "Glamour & Glow",
    category: "Blush",
    price: 34,
    rating: 4.9,
    reviewCount: 432,
    image: "https://media.ulta.com/i/ulta/2608438?w=800&h=800&fmt=auto",
    shades: ["Peach Glow", "Berry Rose"],
    badge: "New",
    description:
      "Silky-smooth blush duo that blends effortlessly for a natural flush.",
    isFeatured: true,
  },
  {
    id: "p5",
    name: "Volume Lash Mascara",
    brand: "Glamour & Glow",
    category: "Mascara",
    price: 22,
    rating: 4.8,
    reviewCount: 2100,
    image: "https://kyliecosmetics.com/cdn/shop/products/PDPBeforeandAftersInfographics_AllLashTypes_650929a9-46f9-44a1-b3b4-eb8424c02e27.jpg?crop=center&height=1024&v=1753211420&width=1024",
    badge: "Bestseller",
    description:
      "Dramatic volume and length without clumping. Smudge-proof all day.",
    isFeatured: true,
  },
  {
    id: "p6",
    name: "Champagne Highlighter",
    brand: "Glamour & Glow",
    category: "Highlighter",
    price: 38,
    rating: 4.9,
    reviewCount: 789,
    image: "https://m.media-amazon.com/images/I/71zqLhfh4dL._AC_UF1000,1000_QL80_.jpg",
    shades: ["Champagne", "Rose Gold", "Pearl"],
    badge: "Limited",
    description:
      "Finely milled highlighter that delivers an ethereal, lit-from-within glow.",
    isFeatured: true,
  },
];

const newArrivals = [
  {
    id: "n1",
    name: "Satin Lip Gloss",
    category: "Lip Gloss",
    price: 18,
    rating: 4.7,
    image: "http://unfilteredbeautyco.com/cdn/shop/products/em2.jpg?v=1681762744",
    badge: "New",
  },
  {
    id: "n2",
    name: "Precision Eyeliner",
    category: "Eyeliner",
    price: 20,
    rating: 4.8,
    image: "http://unfilteredbeautyco.com/cdn/shop/products/em2.jpg?v=1681762744",
    badge: "New",
  },
  {
    id: "n3",
    name: "Bronzing Powder",
    category: "Bronzer",
    price: 36,
    rating: 4.6,
    image: "https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F886d9cb0-a087-6ac6-e873-104334cabc19&q=80&w=3840&av=v1",
    badge: "New",
  },
  {
    id: "n4",
    name: "Full Cover Concealer",
    category: "Concealer",
    price: 26,
    rating: 4.9,
    image: "https://www.narscosmetics.com/on/demandware.static/-/Sites-itemmaster_NARS/default/dw299f43fd/2023/March/Makeup/LagunaBronzer/Swatches/999NAC0000155_BronzingPowder_Laguna02_1.jpg",
    badge: "New",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Sophia Laurent",
    role: "Beauty Blogger",
    avatar: "https://www.kokiecosmetics.com/cdn/shop/files/sf107_fair_ivory_open_01.jpg?v=1720709124&width=1080",
    rating: 5,
    text: "The Velvet Matte Lipstick is absolutely divine. It stays on through coffee, meals, and everything in between. I've converted my entire friend group!",
    product: "Velvet Matte Lipstick",
  },
  {
    id: "t2",
    name: "Amara Osei",
    role: "Makeup Artist",
    avatar: "https://www.stay4skill.com/_next/image?url=https%3A%2F%2Fwugqzhebdtnnuxlxtwlt.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Favatars%2Famara-osei.jpg&w=3840&q=75",
    rating: 5,
    text: "As a professional MUA, I'm incredibly picky about foundations. The Luminous Glow Foundation is now my go-to for every client. The finish is unreal.",
    product: "Luminous Glow Foundation",
  },
  {
    id: "t3",
    name: "Isabella Chen",
    role: "Verified Customer",
    avatar: "https://nusports.com/images/2025/10/7/Chen_Isabella.jpg",
    rating: 5,
    text: "I've tried dozens of eyeshadow palettes and nothing compares to the Smoky Eye Palette. The pigmentation is insane and it lasts all night.",
    product: "Smoky Eye Palette",
  },
];

const valueProps = [
  {
    icon: Sparkles,
    title: "Luxury Formulas",
    description:
      "Every product is crafted with premium, skin-loving ingredients that deliver professional-grade results.",
  },
  {
    icon: Check,
    title: "Cruelty-Free",
    description:
      "We never test on animals. All products are certified cruelty-free and vegan-friendly.",
  },
  {
    icon: Heart,
    title: "Dermatologist Tested",
    description:
      "Formulated for all skin types and tested by leading dermatologists for safety and efficacy.",
  },
  {
    icon: ShoppingBag,
    title: "Free Shipping",
    description:
      "Complimentary shipping on all orders over $50. Easy 30-day returns, no questions asked.",
  },
];

const categories = [
  { name: "Lips", image: "https://media.istockphoto.com/id/1417281790/vector/free-shipping-banner-speech-bubble-label-sticker-ribbon-template-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=PtTThmDBdlVdtTJyJsaWK_uwK-Sbal8fLPHoueAoS9I=", count: 24 },
  { name: "Eyes", image: "https://media.istockphoto.com/id/1417281790/vector/free-shipping-banner-speech-bubble-label-sticker-ribbon-template-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=PtTThmDBdlVdtTJyJsaWK_uwK-Sbal8fLPHoueAoS9I=", count: 31 },
  { name: "Face", image: "https://cdn.hswstatic.com/gif/lips-different-skin-1.jpg", count: 28 },
  { name: "Cheeks", image: "https://cdn.hswstatic.com/gif/lips-different-skin-1.jpg", count: 16 },
];

const badgeColors: Record<string, string> = {
  New: "bg-[#E8A0B0] text-white",
  Bestseller: "bg-[#1A1A1A] text-white",
  Sale: "bg-rose-500 text-white",
  Limited: "bg-amber-500 text-white",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function StarRating({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={
            i <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
      {count !== undefined && (
        <span className="text-xs text-[#1A1A1A]/50 ml-1">({count})</span>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: (typeof featuredProducts)[0] }) {
  const [wished, setWished] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#F9C6D0]/30"
    >
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute top-3 left-3 z-10 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${badgeColors[product.badge] ?? "bg-gray-200 text-gray-700"}`}
        >
          {product.badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={() => setWished((w) => !w)}
        aria-label="Add to wishlist"
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors duration-200"
      >
        <Heart
          size={14}
          className={
            wished ? "fill-[#E8A0B0] text-[#E8A0B0]" : "text-[#1A1A1A]/50"
          }
        />
      </button>

      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-[#FFF0F3] to-[#FDE8EE] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] tracking-widest uppercase text-[#E8A0B0] font-medium mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-[#1A1A1A] text-sm leading-snug mb-1">
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} />

        {/* Shades */}
        {product.shades && product.shades.length > 0 && (
          <p className="text-[11px] text-[#1A1A1A]/50 mt-1.5">
            {product.shades.length} shades
          </p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-[#1A1A1A]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#1A1A1A]/40 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <motion.button
            whileTap={{ scale: 0.93 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E8A0B0] text-white text-xs font-medium rounded-full hover:bg-[#d4889a] transition-colors duration-200"
          >
            <ShoppingBag size={12} />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF0F3] via-[#FDE8EE] to-[#F9C6D0]/40 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#F9C6D0]/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8A0B0]/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-4 bg-[#E8A0B0]/10 px-4 py-1.5 rounded-full"
            >
              New Collection 2025
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Beauty
              <br />
              <span className="text-[#E8A0B0]">Elevated</span>
              <br />
              to Art.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
            >
              Discover luxury makeup crafted for the modern woman. Premium
              formulas, stunning pigments, and finishes that last from morning
              to midnight.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.a
                href="#shop"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E8A0B0] text-white font-semibold rounded-full shadow-lg shadow-[#E8A0B0]/30 hover:bg-[#d4889a] transition-colors duration-200"
              >
                Shop the Collection
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#bestsellers"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#E8A0B0] text-[#E8A0B0] font-semibold rounded-full hover:bg-[#E8A0B0]/5 transition-colors duration-200"
              >
                View Bestsellers
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              {["50K+ Happy Customers", "Cruelty-Free", "Free Returns"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 text-sm text-[#1A1A1A]/60"
                  >
                    <Check size={14} className="text-[#E8A0B0]" />
                    {badge}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right hero image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[340px] sm:w-[420px] h-[420px] sm:h-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F9C6D0] to-[#E8A0B0] rounded-[40px] rotate-3 opacity-40" />
              <img
                src="https://cdn.shopify.com/s/files/1/0901/2635/2717/files/Charlotte_Tilbury_Lithuania.jpg?v=1764582627"
                alt="Luxury makeup collection by Glamour & Glow"
                className="relative z-10 w-full h-full object-cover rounded-[36px] shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-[#FDE8EE] rounded-xl flex items-center justify-center">
                  <Star size={18} className="fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A]">
                    Top Rated
                  </p>
                  <p className="text-[10px] text-[#1A1A1A]/50">
                    4.9 / 5 from 50K+ reviews
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-3"
            >
              Browse by Category
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Find Your Perfect Look
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {categories.map((cat) => (
              <motion.a
                key={cat.name}
                href="#shop"
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0F3] to-[#F9C6D0]" />
                <img
                  src={cat.image}
                  alt={`${cat.name} makeup category`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-xl">{cat.name}</h3>
                  <p className="text-white/70 text-sm">{cat.count} products</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED / SHOP ──────────────────────────────────────────────── */}
      <section
        id="shop"
        className="py-24 bg-gradient-to-b from-[#FFF8F9] to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <motion.p
                variants={fadeInUp}
                className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-2"
              >
                Our Collection
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Featured Products
              </motion.h2>
            </div>
            <motion.a
              variants={fadeInUp}
              href="#shop"
              className="flex items-center gap-1 text-sm font-medium text-[#E8A0B0] hover:gap-2 transition-all duration-200"
            >
              View all products <ChevronRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BESTSELLERS BANNER ───────────────────────────────────────────── */}
      <section
        id="bestsellers"
        className="py-20 bg-gradient-to-r from-[#1A1A1A] to-[#2d2d2d] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A0B0] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F9C6D0] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInLeft}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-4">
                #1 Bestseller
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The Velvet Matte
                <br />
                <span className="text-[#E8A0B0]">Lipstick</span> Everyone
                <br />
                Is Talking About
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Over 1,200 five-star reviews. Our iconic Velvet Matte formula
                delivers rich, long-lasting color with a feather-light feel.
                Available in 12 stunning shades.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Rose Petal",
                  "Berry Crush",
                  "Nude Bliss",
                  "Classic Red",
                  "Mauve Dream",
                  "Coral Kiss",
                ].map((shade) => (
                  <span
                    key={shade}
                    className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                  >
                    {shade}
                  </span>
                ))}
              </div>
              <motion.a
                href="#shop"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8A0B0] text-white font-semibold rounded-full hover:bg-[#d4889a] transition-colors duration-200"
              >
                Shop Lipsticks <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInRight}
              className="flex justify-center"
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-[#E8A0B0]/20 rounded-full blur-2xl" />
                <img
                  src="https://m.media-amazon.com/images/I/61G10KYuIBL._AC_UF1000,1000_QL80_.jpg"
                  alt="Velvet Matte Lipstick bestseller"
                  className="relative z-10 w-full h-full object-cover rounded-3xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ─────────────────────────────────────────────────── */}
      <section id="new-arrivals" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-3"
            >
              Just Landed
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              New Arrivals
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#1A1A1A]/60 mt-3 max-w-md mx-auto"
            >
              Fresh formulas and new shades added to our collection this season.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {newArrivals.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-[#FFF8F9] rounded-2xl overflow-hidden border border-[#F9C6D0]/30 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-44 bg-gradient-to-br from-[#FFF0F3] to-[#FDE8EE] overflow-hidden">
                  <span className="absolute top-2 left-2 z-10 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#E8A0B0] text-white">
                    {item.badge}
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] tracking-widest uppercase text-[#E8A0B0] font-medium mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1A1A1A]">
                      ${item.price}
                    </span>
                    <StarRating rating={item.rating} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VALUE PROPS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#FFF8F9] to-[#FFF0F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-3"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Glamour & Glow Promise
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valueProps.map((vp) => {
              const Icon = vp.icon;
              return (
                <motion.div
                  key={vp.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm border border-[#F9C6D0]/30 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F9C6D0] to-[#E8A0B0] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-base mb-2">
                    {vp.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                    {vp.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-3"
            >
              Real Reviews
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Loved by Beauty Lovers
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#1A1A1A]/60 mt-3 max-w-md mx-auto"
            >
              Join over 50,000 customers who trust Glamour & Glow for their
              everyday beauty routine.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FFF8F9] rounded-2xl p-6 border border-[#F9C6D0]/30 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F9C6D0] to-[#E8A0B0] overflow-hidden flex-shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-[#E8A0B0]">{t.role}</p>
                  </div>
                </div>
                <p className="text-[10px] text-[#1A1A1A]/40 mt-3 tracking-wide uppercase">
                  Reviewed: {t.product}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-[#FFF0F3] to-[#FDE8EE]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInLeft}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9C6D0] to-[#E8A0B0]" />
                <img
                  src="https://media.allure.com/photos/5b310599fdd79a7edd5ebbed/16:9/w_2560%2Cc_limit/GG_Glowpowder_2000x2000_Stylized-2.jpg"
                  alt="Glamour & Glow brand story"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              {/* Stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 lg:right-0 bg-white rounded-2xl shadow-xl p-5 flex gap-6"
              >
                {[
                  { value: "50K+", label: "Customers" },
                  { value: "4.9★", label: "Avg Rating" },
                  { value: "100+", label: "Products" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold text-[#E8A0B0]">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-[#1A1A1A]/50 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-4"
              >
                Our Story
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Born from a Passion
                <br />
                for Timeless Beauty
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#1A1A1A]/65 leading-relaxed mb-5"
              >
                Glamour & Glow was founded in 2018 by beauty visionary Elena
                Marchetti, who believed that luxury makeup shouldn't be a
                privilege — it should be an experience every woman deserves.
                From our New York studio, we craft each formula with the finest
                ingredients sourced from around the world.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-[#1A1A1A]/65 leading-relaxed mb-8"
              >
                Every shade, every texture, every finish is obsessively tested
                to ensure it performs beautifully on all skin tones and types.
                We believe makeup is art — and you are the canvas.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                {[
                  "Sustainably Sourced",
                  "Vegan Formulas",
                  "Inclusive Shades",
                  "Dermatologist Tested",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-sm text-[#1A1A1A]/70 bg-white px-4 py-2 rounded-full border border-[#F9C6D0]/60"
                  >
                    <Check size={13} className="text-[#E8A0B0]" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#E8A0B0] to-[#F9C6D0] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative max-w-3xl mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get 15% Off Your First Order
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-lg mb-8"
          >
            Subscribe to our newsletter and be the first to know about new
            launches, exclusive offers, and beauty tips from our experts.
          </motion.p>
          <motion.form
            variants={fadeInUp}
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full text-[#1A1A1A] text-sm outline-none focus:ring-2 focus:ring-white/50 bg-white/90 placeholder:text-[#1A1A1A]/40"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-[#1A1A1A] text-white text-sm font-semibold rounded-full hover:bg-[#333] transition-colors duration-200 whitespace-nowrap"
            >
              Claim My 15% Off
            </motion.button>
          </motion.form>
          <motion.p variants={fadeInUp} className="text-white/60 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs tracking-[0.3em] uppercase text-[#E8A0B0] font-semibold mb-3"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We&apos;d Love to Hear From You
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                {
                  Icon: Mail,
                  label: "Email Us",
                  value: BRAND.email,
                  sub: "We reply within 24 hours",
                },
                {
                  Icon: Phone,
                  label: "Call Us",
                  value: BRAND.phone,
                  sub: "Mon–Fri, 9am–6pm EST",
                },
                {
                  Icon: MapPin,
                  label: "Visit Us",
                  value: BRAND.address,
                  sub: "By appointment only",
                },
              ].map(({ Icon, label, value, sub }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5 bg-[#FFF8F9] rounded-2xl border border-[#F9C6D0]/30"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-[#F9C6D0] to-[#E8A0B0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#E8A0B0] font-semibold mb-0.5">
                      {label}
                    </p>
                    <p className="font-medium text-[#1A1A1A] text-sm">
                      {value}
                    </p>
                    <p className="text-xs text-[#1A1A1A]/50 mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInRight}
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-[#FFF8F9] rounded-2xl border border-[#F9C6D0]/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F9C6D0] to-[#E8A0B0] rounded-full flex items-center justify-center mb-4">
                    <Check size={28} className="text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-[#1A1A1A]/60">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="space-y-4 bg-[#FFF8F9] p-8 rounded-2xl border border-[#F9C6D0]/30"
                >
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A]/70 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#F9C6D0]/60 bg-white text-sm text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#E8A0B0]/40 placeholder:text-[#1A1A1A]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A]/70 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm((f) => ({
                          ...f,
                          email: e.target.value,
                        }))
                      }
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#F9C6D0]/60 bg-white text-sm text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#E8A0B0]/40 placeholder:text-[#1A1A1A]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A]/70 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((f) => ({
                          ...f,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[#F9C6D0]/60 bg-white text-sm text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#E8A0B0]/40 placeholder:text-[#1A1A1A]/30 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 bg-[#E8A0B0] text-white font-semibold rounded-xl hover:bg-[#d4889a] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={16} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}