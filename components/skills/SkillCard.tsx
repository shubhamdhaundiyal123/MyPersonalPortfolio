"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-5
      py-3
      backdrop-blur-xl
      hover:border-blue-500
      hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
      transition-all
      cursor-default
      "
    >
      {name}
    </motion.div>
  );
}
