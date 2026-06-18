export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#shop" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const CTA = {
  label: "Shop Now",
  href: "#shop",
};

export const BRAND = {
  name: "Glamour & Glow",
  tagline: "Beauty Elevated",
  description:
    "Luxury makeup and beauty products crafted for the modern woman who demands the finest.",
  email: "hello@glamourandglow.com",
  phone: "+1 (800) 426-5687",
  address: "123 Beauty Boulevard, New York, NY 10001",
  social: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
  },
};

export type ProductCategory =
  | "Foundation"
  | "Lipstick"
  | "Eyeshadow"
  | "Blush"
  | "Mascara"
  | "Highlighter"
  | "Concealer"
  | "Bronzer"
  | "Lip Gloss"
  | "Eyeliner";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  shades?: string[];
  badge?: "New" | "Bestseller" | "Sale" | "Limited";
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedShade?: string;
}

export interface WishlistItem extends Product {}