"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 max-w-2xl mx-auto text-gray-400"
        >
          My professional journey building scalable enterprise applications,
          solving complex problems, and delivering high-quality software.
        </motion.p>

        <Timeline />
      </div>
    </section>
  );
}
