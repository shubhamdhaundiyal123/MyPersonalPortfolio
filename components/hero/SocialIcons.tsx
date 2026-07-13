"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-5 mt-10">
      <a href="https://github.com/shubhamdhaundiyal123" target="_blank">
        <FaGithub size={26} className="hover:text-blue-500 duration-300" />
      </a>

      <a
        href="https://www.linkedin.com/in/shubham-dhaundiyal-242617188"
        target="_blank"
      >
        <FaLinkedin size={26} className="hover:text-blue-500 duration-300" />
      </a>

      <a href="mailto:shubhamdhaundiyal789@gmail.com">
        <FaEnvelope size={26} className="hover:text-blue-500 duration-300" />
      </a>
    </div>
  );
}
