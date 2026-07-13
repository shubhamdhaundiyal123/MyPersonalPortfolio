"use client";

export default function Background() {
  return (
    <>
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[170px]" />

      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
    </>
  );
}
