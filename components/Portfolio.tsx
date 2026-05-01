import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Cube Lessons",
    description:
      "An interactive application designed to help users learn and practice solving the Rubik's Cube, featuring step-by-step guides, timers, and study resources.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/cube-lessons.PNG",
    githubUrl: "https://github.com/ValdineiJunior/cube-lessons",
    liveUrl: "https://cube-lessons.vercel.app",
  },
  {
    title: "Beautysalon",
    description:
      "A comprehensive beauty salon management system that streamlines appointment scheduling, client management, and service tracking for salons and spas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/Beautysalon.png",
    githubUrl: "https://github.com/ValdineiJunior/OriginSix",
    liveUrl: "https://valdineijunior.github.io/OriginSix/",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition-colors hover:border-white/20">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-zinc-100">
          {project.title}
        </h3>
        <p className="mb-4 text-zinc-400">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <section className="py-12">
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Portfolio
        </p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-100">
          Selected projects
        </h2>
        <p className="max-w-2xl text-zinc-400">
          Here are some of the projects I&apos;ve worked on. Each project
          represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
