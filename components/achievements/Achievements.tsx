"use client";

import AchievementCard from "./AchievementCard";
import { achievements } from "./achievementsData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">Achievements</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <AchievementCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
