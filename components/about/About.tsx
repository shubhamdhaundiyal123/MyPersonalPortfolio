"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";
import TechBadge from "./TechBadge";

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "MySQL",
  "Redux",
  "AWS",
  "Docker",
  "Kafka",
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/profile.png"
              alt="profile"
              width={420}
              height={420}
              className="rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 leading-8 text-lg">
              I'm a MERN Full Stack Developer with 2.3+ years of professional
              experience building scalable enterprise applications. My expertise
              spans frontend architecture, backend API development, performance
              optimization, authentication systems, and cloud technologies.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <InfoCard title="Experience" value="2.3+ Years" />

              <InfoCard title="Projects" value="3 Enterprise" />

              <InfoCard title="Frontend" value="React / Next" />

              <InfoCard title="Backend" value="Node / Nest" />
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {technologies.map((tech) => (
                <TechBadge key={tech} title={tech} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
