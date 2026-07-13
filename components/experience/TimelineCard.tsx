"use client";

import { motion } from "framer-motion";

interface TimelineCardProps {
  title: string;
  company?: string;
  duration?: string;
  description: string;
  technologies: string[];
}

export default function TimelineCard({
  title,
  company,
  duration,
  description,
  technologies,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative ml-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 transition-all"
    >
      <div className="absolute -left-[46px] top-10 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#030712]" />

      {duration && <p className="text-blue-400 text-sm mb-2">{duration}</p>}

      <h3 className="text-3xl font-bold">{title}</h3>

      {company && <p className="text-gray-400 mt-1">{company}</p>}

      <p className="text-gray-300 mt-6 leading-8">{description}</p>

      <div className="flex flex-wrap gap-3 mt-8">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
