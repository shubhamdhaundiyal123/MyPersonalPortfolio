"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function SocialIcon({
  href,
  icon: Icon,
  label,
}: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="
      h-12
      w-12
      rounded-xl
      border
      border-white/10
      bg-white/5
      flex
      items-center
      justify-center
      hover:border-blue-500
      hover:bg-blue-500/10
      transition-all
      duration-300
      hover:-translate-y-1
      "
    >
      <Icon className="w-5 h-5" />
    </Link>
  );
}