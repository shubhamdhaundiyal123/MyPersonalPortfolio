"use client";

import { motion } from "framer-motion";
import { skills } from "./skillsData";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto">
            Technologies I use to build scalable, secure and high-performance
            enterprise applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {skills.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
