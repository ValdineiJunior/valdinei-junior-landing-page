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
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {project.title}
        </h3>
        <p className="mb-4 text-gray-600">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
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
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">My Projects</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Here are some of the projects I&apos;ve worked on. Each project
          represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};
