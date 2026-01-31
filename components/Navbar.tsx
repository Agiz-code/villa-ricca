"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { id: "/", label: "Home" },
  { id: "/suites", label: "Suites" },
  { id: "/dining", label: "Dining" },
  { id: "/wellness", label: "Wellness" },
  { id: "/experiences", label: "Experiences" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const bgClass =
    scrolled || !isHome
      ? "bg-white/95 backdrop-blur-md py-4 shadow-sm"
      : "bg-transparent py-6";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-bold tracking-tighter ${
            scrolled || !isHome ? "text-stone-900" : "text-white"
          }`}
        >
          VILLA RICA
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              className={`text-sm uppercase tracking-widest transition-colors ${
                pathname === item.id
                  ? "text-emerald-900 font-bold"
                  : scrolled || !isHome
                  ? "text-stone-600 hover:text-emerald-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/suites"
            className="bg-emerald-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-all"
          >
            Book Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu
              size={28}
              className={
                scrolled || !isHome ? "text-emerald-900" : "text-white"
              }
            />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-light ${
                  pathname === item.id
                    ? "text-emerald-900 font-bold"
                    : "text-stone-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/suites"
              className="bg-emerald-900 text-white px-10 py-4 rounded-full text-lg"
            >
              Reserve a Room
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
