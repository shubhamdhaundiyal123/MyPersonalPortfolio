"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "MERN Full Stack Developer",
        2000,
        "React.js Developer",
        2000,
        "Next.js Developer",
        2000,
        "Node.js Developer",
        2000,
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className="text-3xl font-semibold text-blue-400"
    />
  );
}
