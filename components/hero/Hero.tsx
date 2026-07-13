"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

import Typing from "./Typing";
import Stats from "./Stats";
import Background from "./Background";

export default function Hero() {
  const handleResumeDownload = () => {
    console.log("✅ Download button clicked");

    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Shubham_Dhaundiyal_Resume.pdf";

      document.body.appendChild(link);

      console.log("📄 Triggering download...");
      link.click();

      document.body.removeChild(link);

      console.log("✅ Download triggered successfully");
    } catch (error) {
      console.error("❌ Download failed:", error);
    }
  };

  return (
    <section
      className="
    relative
    isolate
    min-h-screen
    overflow-hidden
    flex
    items-center
    justify-center
    pt-28
    sm:pt-32
    lg:pt-22
  "
    >
      {/* Background */}
      <Background />

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          sm:px-8
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        "
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 font-semibold mb-5">👋 Hello, I'm</p>

          <h1
            className="
              text-[2.3rem]
              leading-none
              font-black
              tracking-tight

              sm:text-5xl
              sm:leading-tight

              md:text-6xl
              lg:text-7xl
            "
          >
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

          <div className="mt-10">
            <button
              onClick={handleResumeDownload}
              className="
      group
      relative
      inline-flex
      items-center
      justify-center
      gap-3
      overflow-hidden
      rounded-xl
      border
      border-blue-500/40
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      px-8
      py-4
      font-semibold
      text-white
      shadow-lg
      shadow-blue-500/20
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-2xl
      hover:shadow-blue-500/40
      active:scale-95
    "
            >
              {/* Animated Background */}
              <span
                className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        transition-transform
        duration-700
        group-hover:translate-x-full
      "
              />

              {/* Icon */}
              <Download
                size={20}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
              />

              {/* Text */}
              <span className="relative z-10">Download Resume</span>
            </button>
          </div>

          <div className="mt-10">
            <Stats />
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative mt-7">
            {/* <div className="absolute -inset-4 rounded-full bg-blue-500 blur-3xl opacity-30" /> */}

            <Image
              src="/profile1.png"
              alt="profile"
              width={420}
              height={420}
              priority
              className="relative z-10 rounded-full border-4 border-blue-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
