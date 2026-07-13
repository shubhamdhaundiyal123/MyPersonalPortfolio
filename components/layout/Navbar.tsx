"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-[#030712]/60">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <Link href="/" className="text-3xl font-black">
          <span className="text-blue-500">S</span>D.
        </Link>

        <nav className="hidden md:flex gap-10">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-[#111827]"
          >
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-5 border-b border-white/10"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
