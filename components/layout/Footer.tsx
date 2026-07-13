"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black">
              <span className="text-blue-500">SD</span>.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              MERN Full Stack Developer with 2.3+ years of experience building
              scalable enterprise web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

            <div className="space-y-4">
              <Link href="#about" className="block hover:text-blue-500">
                About
              </Link>

              <Link href="#experience" className="block hover:text-blue-500">
                Experience
              </Link>

              <Link href="#skills" className="block hover:text-blue-500">
                Skills
              </Link>

              <Link href="#projects" className="block hover:text-blue-500">
                Projects
              </Link>

              <Link href="#contact" className="block hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Connect</h3>

            <div className="flex gap-5">
              <a
                href="https://github.com/shubhamdhaundiyal123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-dhaundiyal-242617188"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:shubhamdhaundiyal789@gmail.com"
                aria-label="Email"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-8 flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-blue-500"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center text-gray-400">
          © 2026 Shubham Dhaundiyal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
