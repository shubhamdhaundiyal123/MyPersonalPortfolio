"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    highlights: string[];
    github: string;
    live: string;
  };
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden mt-4 rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-sm text-blue-400 font-medium">{project.category}</p>

        <h3 className="text-3xl font-bold mt-2">{project.title}</h3>

        <p className="mt-5 text-gray-400 leading-7">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mt-7">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Highlights</h4>

          <ul className="space-y-2 text-gray-400">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <span className="text-blue-400">✔</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 hover:border-blue-500 transition"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
