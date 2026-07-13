import { Github, ExternalLink } from "lucide-react";

interface Props {
  github: string;
  live: string;
}

export default function ProjectButtons({ github, live }: Props) {
  return (
    <div className="flex gap-4 mt-8">
      {github && (
        <a
          href={github}
          target="_blank"
          className="rounded-xl border border-white/10 px-5 py-3 flex items-center gap-2 hover:border-blue-500 transition"
        >
          <Github size={18} />
          GitHub
        </a>
      )}

      {live && (
        <a
          href={live}
          target="_blank"
          className="rounded-xl bg-blue-600 px-5 py-3 flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      )}
    </div>
  );
}
