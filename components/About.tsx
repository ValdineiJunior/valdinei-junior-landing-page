import { Code2, Rocket, Target, Users } from "lucide-react";

const aboutSections = [
  {
    title: "Who I Am",
    icon: Users,
    content: [
      "Hi, I'm Valdinei, a passionate software developer with a strong focus on creating exceptional user experiences.",
      "I specialize in modern web technologies and love turning complex problems into simple, beautiful solutions.",
      "My journey in tech is driven by continuous learning and a commitment to writing clean, maintainable code.",
    ],
    color: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "What I Do",
    icon: Code2,
    content: [
      "I develop modern web applications using React, Next.js, and TypeScript.",
      "I create responsive and accessible user interfaces with Tailwind CSS.",
      "I implement best practices in software development and maintain high code quality standards.",
    ],
    color: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    title: "My Approach",
    icon: Target,
    content: [
      "I focus on understanding user needs and business requirements thoroughly.",
      "I break down complex problems into manageable tasks.",
      "I prioritize clean architecture and scalable solutions.",
    ],
    color: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    title: "My Goals",
    icon: Rocket,
    content: [
      "To build innovative solutions that make a positive impact.",
      "To continuously improve my skills and stay updated with the latest technologies.",
      "To collaborate with teams that value quality and user experience.",
    ],
    color: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
];

const AboutSection = ({
  title,
  icon: Icon,
  content,
  color,
  borderColor,
}: {
  title: string;
  icon: any;
  content: string[];
  color: string;
  borderColor: string;
}) => {
  return (
    <div
      className={`rounded-2xl p-6 ${color} border ${borderColor} shadow-lg transition-all duration-300 hover:shadow-xl`}
    >
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-6 w-6 text-gray-700" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3">
        {content.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-gray-600">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">About Me</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          A dedicated software developer passionate about creating exceptional
          digital experiences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {aboutSections.map((section) => (
          <AboutSection key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
};
