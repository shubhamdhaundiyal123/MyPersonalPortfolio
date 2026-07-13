"use client";

import TimelineCard from "./TimelineCard";

export default function Timeline() {
  return (
    <div className="relative mt-24">
      <div className="absolute left-2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500" />

      <div className="space-y-16">
        <TimelineCard
          duration="May 2024 - Present"
          title="MERN Full Stack Developer"
          company="Panorama Software Solutions Pvt Ltd. NOIDA"
          description="Working on enterprise SaaS products with React, Next.js, Node.js, NestJS, AWS and Micro Frontend architecture."
          technologies={[
            "React",
            "Next.js",
            "Node",
            "NestJS",
            "AWS",
            "Docker",
            "Kafka",
          ]}
        />

        {/* <TimelineCard
          title="BotX"
          description="Developed a configurable Conversational AI SaaS platform with Micro Frontend architecture, security enhancements, caching, scheduler implementation, AWS monitoring, and REST APIs."
          technologies={[
            "React",
            "Redux",
            "NestJS",
            "TypeORM",
            "CloudWatch",
            "Security",
          ]}
        />

        <TimelineCard
          title="Hawkeye"
          description="Migrated React application to Next.js, implemented SSR, Scheduler, Redux integration, and optimized performance."
          technologies={["React", "Next.js", "SSR", "Redux", "Scheduler"]}
        />

        <TimelineCard
          title="HealthConnect"
          description="Built healthcare dashboards, appointment management, JWT authentication, RBAC, secure AWS S3 document uploads, and REST APIs."
          technologies={["React", "Node", "MongoDB", "JWT", "RBAC", "AWS"]}
        /> */}
      </div>
    </div>
  );
}
