"use client";

import SkillCard from "./SkillCard";

interface Props {
  title: string;
  items: string[];
}

export default function SkillCategory({ title, items }: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >
      <h3 className="text-2xl font-bold mb-8">{title}</h3>

      <div className="flex flex-wrap gap-4">
        {items.map((skill) => (
          <SkillCard key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
