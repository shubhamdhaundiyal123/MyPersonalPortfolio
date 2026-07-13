"use client";

import { Atom, Database } from "lucide-react";

import Image from "next/image";

export default function TechOrbit() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[560px] w-[560px] rounded-full border border-blue-500/20" />
      </div>

      {/* React */}

      <div className="absolute top-10 left-10 h-16 w-16 rounded-full bg-[#091525] border border-blue-500/20 flex items-center justify-center shadow-xl">
        <Atom className="text-cyan-400 w-8 h-8" />
      </div>

      {/* Node */}

      <div className="absolute top-14 right-10 h-16 w-16 rounded-full bg-[#091525] border border-blue-500/20 flex items-center justify-center">
        <Image src="/icons/node.png" width={34} height={34} alt="" />
      </div>

      {/* TS */}

      <div className="absolute bottom-24 left-14 h-16 w-16 rounded-full bg-[#091525] border border-blue-500/20 flex items-center justify-center">
        <Image src="/icons/typescript.png" width={34} height={34} alt="" />
      </div>

      {/* Mongo */}

      <div className="absolute bottom-20 right-12 h-16 w-16 rounded-full bg-[#091525] border border-blue-500/20 flex items-center justify-center">
        <Database className="text-green-500 w-8 h-8" />
      </div>
    </>
  );
}
