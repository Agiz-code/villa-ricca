"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <footer className="bg-stone-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-emerald-950 mb-6 block"
            >
              VILLA RICA
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed">
              Redefining sustainable luxury for the world&apos;s most discerning
              travelers.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400 mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-stone-600 text-sm">
              <li>
                <a href="/suites" className="hover:text-emerald-900">
                  The Estate
                </a>
              </li>
              <li>
                <a href="/dining" className="hover:text-emerald-900">
                  Private Dining
                </a>
              </li>
              <li>
                <a href="/experiences" className="hover:text-emerald-900">
                  Experiences
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-stone-600 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={14} /> <span>+234 802 694 6108</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} /> <span>ricaresortsvilla@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400 mb-6">
              Newsletter & Feedback
            </h4>
            <p className="text-stone-400 text-[10px] mb-4 uppercase tracking-wider">
              Join our newsletter for exclusive seasonal updates.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div
                className={`flex bg-white p-1 rounded-full border transition-all ${
                  status === "success"
                    ? "border-emerald-500"
                    : "border-stone-200"
                }`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    status === "success" ? "Thank you!" : "Enter your email"
                  }
                  disabled={status !== "idle"}
                  className="bg-transparent px-4 py-2 outline-none text-sm w-full disabled:text-emerald-800"
                />
                <button
                  type="submit"
                  disabled={status !== "idle" || !email}
                  className={`p-2 rounded-full transition-all ${
                    status === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-emerald-900 text-white hover:bg-emerald-800"
                  }`}
                >
                  {status === "loading" ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : status === "success" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </button>
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-6 left-2 text-[10px] text-emerald-700 font-bold uppercase tracking-tighter"
                  >
                    Guest Relations has received your request.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-10 text-center text-stone-400 text-xs uppercase tracking-widest">
          © 2024 Villa Rica Hotels & Resorts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
