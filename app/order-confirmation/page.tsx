"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Package, Truck, MapPin, ShoppingBag, ChevronRight, Star, Gift, Clock } from 'lucide-react';
import { BRAND } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
} from "@/lib/motion";

// ─── Mock Order Data ─────────────────────────────────────────────────────────

const ORDER = {
  number: "GG-2024-48291",
  date: "January 28, 2025",
  estimatedDelivery: "February 3–5, 2025",
  status: "Confirmed",
  paymentMethod: "Visa ending in 4242",
  shippingAddress: {
    name: "Sophia Laurent",
    line1: "456 Rose Garden Lane",
    line2: "Apt 7B",
    city: "New York",
    state: "NY",
    zip: "10012",
  },
  items: [
    {
      id: "p1",
      name: "Velvet Matte Lipstick",
      shade: "Berry Crush",
      qty: 2,
      price: 28,
      image:
        "https://m.media-amazon.com/images/I/61G10KYuIBL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "p2",
      name: "Luminous Glow Foundation",
      shade: "Honey",
      qty: 1,
      price: 52,
      image:
        "https://www.hourglasscosmetics.com/cdn/shop/files/2000x2000_72dpi_0004_HG_SHADEFINDER_SHADE_CHARTS-SPRING26-R23_6e1d9d5b-704e-487f-86f8-33bb77f52823.jpg?v=1768593929&width=480",
    },
    {
      id: "p6",
      name: "Champagne Highlighter",
      shade: "Rose Gold",
      qty: 1,
      price: 38,
      image:
        "https://m.media-amazon.com/images/I/71zqLhfh4dL._AC_UF1000,1000_QL80_.jpg",
    },
  ],
  subtotal: 146,
  shipping: 0,
  tax: 12.41,
  total: 158.41,
};

const STEPS = [
  { label: "Order Placed", icon: CheckCircle, done: true },
  { label: "Processing", icon: Package, done: true },
  { label: "Shipped", icon: Truck, done: false },
  { label: "Delivered", icon: MapPin, done: false },
];

const RECOMMENDED = [
  {
    id: "r1",
    name: "Rose Blush Duo",
    price: 34,
    rating: 4.9,
    image: "https://media.ulta.com/i/ulta/2608438?w=800&h=800&fmt=auto",
  },
  {
    id: "r2",
    name: "Volume Lash Mascara",
    price: 22,
    rating: 4.8,
    image:
      "https://kyliecosmetics.com/cdn/shop/products/PDPBeforeandAftersInfographics_AllLashTypes_650929a9-46f9-44a1-b3b4-eb8424c02e27.jpg?crop=center&height=1024&v=1753211420&width=1024",
  },
  {
    id: "r3",
    name: "Smoky Eye Palette",
    price: 45,
    rating: 4.7,
    image:
      "https://i5.walmartimages.com/seo/Black-Smokey-Eyeshadow-Palette-Eye-Black-Makeup-9-Colors-Black-Silver-Gray-White-Eyeshadow-Makeup-Palette-Waterproof-Cool-Toned-Matte-Glitter-Eyeshad_58efe4c6-d0d7-47b4-b616-a1fd37466b58.36d5e27d0c361650f4c192eab26a8c9f.jpeg",
  },
  {
    id: "r4",
    name: "Satin Lip Gloss",
    price: 18,
    rating: 4.7,
    image:
      "http://unfilteredbeautyco.com/cdn/shop/products/IMG_0152_1200x.jpg?v=1632340684",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function OrderConfirmationPage() {
  const [copiedOrder, setCopiedOrder] = useState(false);

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(ORDER.number).catch(() => {});
    setCopiedOrder(true);
    setTimeout(() => setCopiedOrder(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF8FA]">
      {/* ── Hero / Confirmation Banner ── */}
      <section className="relative bg-gradient-to-br from-[#F9C6D0] via-[#FFE4EC] to-[#FFFFFF] pt-32 pb-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A0B0]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F9C6D0]/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Animated check */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg shadow-[#E8A0B0]/30 mb-6"
          >
            <CheckCircle className="w-12 h-12 text-[#E8A0B0]" strokeWidth={1.5} />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-[0.2em] uppercase text-[#E8A0B0] mb-3"
          >
            Thank you for your order
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Order Confirmed!
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#1A1A1A]/60 text-lg mb-8 max-w-xl mx-auto"
          >
            Your glamour is on its way. We&apos;ve sent a confirmation email to
            your inbox with all the details.
          </motion.p>

          {/* Order number pill */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md shadow-[#E8A0B0]/20"
          >
            <span className="text-sm text-[#1A1A1A]/50">Order&nbsp;#</span>
            <span
              className="font-semibold text-[#1A1A1A] tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {ORDER.number}
            </span>
            <button
              onClick={handleCopyOrder}
              className="text-xs text-[#E8A0B0] hover:text-[#c97a90] font-medium transition-colors"
            >
              {copiedOrder ? "Copied!" : "Copy"}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Order Tracker ── */}
      <section className="py-12 bg-white border-b border-[#F9C6D0]/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-center text-xl font-semibold text-[#1A1A1A] mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Order Status
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-between relative"
          >
            {/* Progress line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#F9C6D0]/60 z-0" />
            <div
              className="absolute top-5 left-0 h-0.5 bg-[#E8A0B0] z-0 transition-all duration-700"
              style={{ width: "40%" }}
            />

            {STEPS.map((step) => (
              <div
                key={step.label}
                className="relative z-10 flex flex-col items-center gap-2"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors ${
                    step.done
                      ? "bg-[#E8A0B0] text-white"
                      : "bg-white border-2 border-[#F9C6D0] text-[#1A1A1A]/30"
                  }`}
                >
                  <step.icon size={18} strokeWidth={1.8} />
                </div>
                <span
                  className={`text-xs font-medium text-center ${
                    step.done ? "text-[#E8A0B0]" : "text-[#1A1A1A]/40"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Estimated delivery */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-[#1A1A1A]/60"
          >
            <Clock size={15} className="text-[#E8A0B0]" />
            <span>
              Estimated delivery:{" "}
              <strong className="text-[#1A1A1A]">{ORDER.estimatedDelivery}</strong>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Order Summary + Shipping ── */}
      <section className="py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Items list */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-4">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Items
            </h2>

            {ORDER.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm border border-[#F9C6D0]/30 hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#FFE4EC]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://placehold.co/80x80/FFE4EC/E8A0B0?text=G%26G";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/50 mt-0.5">
                    Shade: {item.shade}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50">Qty: {item.qty}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-semibold text-[#1A1A1A] text-sm">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/40">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Summary sidebar */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Price breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F9C6D0]/30">
              <h3
                className="text-lg font-bold text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Order Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#1A1A1A]/70">
                  <span>Subtotal</span>
                  <span>${ORDER.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#1A1A1A]/70">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-[#1A1A1A]/70">
                  <span>Tax</span>
                  <span>${ORDER.tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-[#F9C6D0]/50 pt-3 mt-3 flex justify-between font-bold text-[#1A1A1A]">
                  <span>Total</span>
                  <span>${ORDER.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F9C6D0]/30">
              <h3
                className="text-lg font-bold text-[#1A1A1A] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shipping To
              </h3>
              <div className="text-sm text-[#1A1A1A]/70 space-y-0.5">
                <p className="font-semibold text-[#1A1A1A]">
                  {ORDER.shippingAddress.name}
                </p>
                <p>{ORDER.shippingAddress.line1}</p>
                {ORDER.shippingAddress.line2 && (
                  <p>{ORDER.shippingAddress.line2}</p>
                )}
                <p>
                  {ORDER.shippingAddress.city}, {ORDER.shippingAddress.state}{" "}
                  {ORDER.shippingAddress.zip}
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F9C6D0]/30">
              <h3
                className="text-lg font-bold text-[#1A1A1A] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Payment
              </h3>
              <p className="text-sm text-[#1A1A1A]/70">{ORDER.paymentMethod}</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Perks / What Happens Next ── */}
      <section className="py-16 bg-gradient-to-br from-[#FFE4EC] to-[#FFF8FA]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-[#1A1A1A] text-center mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Happens Next?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-[#1A1A1A]/60 mb-12 max-w-xl mx-auto"
          >
            We&apos;re already preparing your order with care. Here&apos;s what
            to expect over the next few days.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Package,
                title: "Carefully Packed",
                desc: "Every product is wrapped in our signature blush tissue paper and sealed with a Glamour & Glow ribbon — perfect for gifting or treating yourself.",
              },
              {
                icon: Truck,
                title: "Express Shipped",
                desc: "Your order ships within 1–2 business days via our premium courier partner. You&apos;ll receive a tracking link the moment it leaves our warehouse.",
              },
              {
                icon: Gift,
                title: "Surprise Gift Inside",
                desc: "Every order includes a complimentary beauty sample chosen just for you, plus a personalised thank-you card from our team.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#F9C6D0]/30 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFE4EC] mb-4">
                  <card.icon className="w-7 h-7 text-[#E8A0B0]" strokeWidth={1.5} />
                </div>
                <h3
                  className="font-semibold text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                  {card.title === "Express Shipped"
                    ? "Your order ships within 1–2 business days via our premium courier partner. You'll receive a tracking link the moment it leaves our warehouse."
                    : card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── You May Also Love ── */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-[#1A1A1A] text-center mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            You May Also Love
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-[#1A1A1A]/60 mb-10"
          >
            Complete your beauty routine with these fan favourites.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {RECOMMENDED.map((product) => (
              <motion.div
                key={product.id}
                variants={scaleIn}
                className="group bg-[#FFF8FA] rounded-2xl overflow-hidden border border-[#F9C6D0]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-[#FFE4EC]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://placehold.co/300x300/FFE4EC/E8A0B0?text=G%26G";
                    }}
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-[#1A1A1A] truncate">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={11} className="fill-[#E8A0B0] text-[#E8A0B0]" />
                    <span className="text-xs text-[#1A1A1A]/50">
                      {product.rating}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-[#E8A0B0] mt-1">
                    ${product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-16 bg-gradient-to-r from-[#E8A0B0] to-[#F9C6D0]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Keep Glowing
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/80 mb-8 text-lg"
          >
            Discover hundreds of luxury beauty products waiting to elevate your
            everyday routine.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#E8A0B0] font-semibold rounded-full hover:bg-[#FFE4EC] transition-colors duration-200 shadow-md"
            >
              <ShoppingBag size={18} />
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white font-semibold rounded-full hover:bg-[#333] transition-colors duration-200"
            >
              View All Products
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
