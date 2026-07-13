"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  project: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    technologies: string[];
    features: string[];
    github: string;
    demo: string;
  };
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500 transition-all"
    >
      <div className="relative h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <p className="text-blue-400 text-sm">{project.subtitle}</p>

        <h3 className="text-3xl font-bold mt-2">{project.title}</h3>

        <p className="text-gray-400 mt-6 leading-7">{project.description}</p>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600/20 border border-blue-500 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <h4 className="font-semibold mb-3">Highlights</h4>

          <ul className="space-y-2 text-gray-400">
            {project.features?.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>

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

          {project.demo && (
            <a
              href={project.demo}
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
