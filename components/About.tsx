import { Code2, Rocket, Target, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const aboutSections = [
  {
    title: "Who I Am",
    icon: Users,
    content: [
      "Hi, I'm Valdinei, a passionate software developer with a strong focus on creating exceptional user experiences.",
      "I specialize in modern web technologies and love turning complex problems into simple, beautiful solutions.",
      "My journey in tech is driven by continuous learning and a commitment to writing clean, maintainable code.",
    ],
  },
  {
    title: "What I Do",
    icon: Code2,
    content: [
      "I develop modern web applications using React, Next.js, and TypeScript.",
      "I create responsive and accessible user interfaces with Tailwind CSS.",
      "I implement best practices in software development and maintain high code quality standards.",
    ],
  },
  {
    title: "My Approach",
    icon: Target,
    content: [
      "I focus on understanding user needs and business requirements thoroughly.",
      "I break down complex problems into manageable tasks.",
      "I prioritize clean architecture and scalable solutions.",
    ],
  },
  {
    title: "My Goals",
    icon: Rocket,
    content: [
      "To build innovative solutions that make a positive impact.",
      "To continuously improve my skills and stay updated with the latest technologies.",
      "To collaborate with teams that value quality and user experience.",
    ],
  },
];

const AboutSection = ({
  title,
  icon: Icon,
  content,
}: {
  title: string;
  icon: LucideIcon;
  content: string[];
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-colors hover:border-white/20">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-5 w-5 text-zinc-300" />
        <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
      </div>
      <ul className="space-y-3">
        {content.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const About = () => {
  return (
    <section className="py-12">
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-100">
          Building interfaces with clarity and purpose
        </h2>
        <p className="max-w-2xl text-zinc-400">
          A dedicated software developer passionate about creating exceptional
          digital experiences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {aboutSections.map((section) => (
          <AboutSection key={section.title} {...section} />
        ))}
      </div>
    </section>
  );
};
