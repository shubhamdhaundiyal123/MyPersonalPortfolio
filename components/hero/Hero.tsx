"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Typing from "./Typing";
import Stats from "./Stats";
import SocialIcons from "./SocialIcons";
import Background from "./Background";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Background />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10" />

      <div className="max-w-7xl w-full px-8 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 font-semibold mb-5">👋 Hello, I'm</p>

          <h1 className="text-6xl font-black leading-tight">
            SHUBHAM
            <br />
            DHAUNDIYAL
          </h1>

          <div className="mt-8">
            <Typing />
          </div>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            Building scalable enterprise applications using React, Next.js,
            Node.js, TypeScript and MongoDB.
          </p>

          <div className="mt-10 flex gap-5 mb-4">
            <button className="border border-gray-500 px-7 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Download Resume
            </button>
          </div>

          <SocialIcons />

          <Stats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative mt-7">
            <div className="absolute -inset-4 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            <Image
              src="/profile1.png"
              alt="profile"
              width={420}
              height={420}
              className="rounded-full border-4 border-blue-500 relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
