"use client";

import { motion } from "framer-motion";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">Featured Projects</h2>

          <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
            A selection of enterprise applications that showcase my experience
            in building scalable, secure and high-performance web solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {projects?.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
