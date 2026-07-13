"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

interface Props {
  icon: any;
  value: string;
  title: string;
}

export default function AchievementCard({ icon: Icon, value, title }: Props) {
  const numericValue = parseFloat(value);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-white/10 bg-[#111827] p-6"
    >
      <Icon className="w-10 h-10 text-blue-500 mb-4" />

      <h3 className="text-4xl font-bold">
        <CountUp end={numericValue} duration={2} />
        {value.includes("+") && "+"}
        {value.includes("%") && "%"}
      </h3>

      <p className="text-gray-400 mt-2">{title}</p>
    </motion.div>
  );
}
