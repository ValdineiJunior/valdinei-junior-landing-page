const skills = [
  {
    category: "Frontend Development",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Shadcn",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    color: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:bg-blue-500/20",
  },
  {
    category: "Backend & APIs",
    items: [
      "RESTful APIs",
      "GraphQL",
      "Node.js",
      "SQL",
      "Express",
      "Axios",
      "React Hook Form",
      "Zod",
      "Yup",
    ],
    color: "bg-green-500/10",
    borderColor: "border-green-500/20",
    hoverColor: "hover:bg-green-500/20",
  },
  {
    category: "Testing & Tools",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Stripe",
      "Git",
      "Scrum",
      "Agile",
      "English",
      "Portuguese",
    ],
    color: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:bg-purple-500/20",
  },
  {
    category: "Advanced Concepts",
    items: [
      "App Router",
      "Server Components",
      "React Hooks",
      "Context API",
      "Styled components",
      "ES6+",
    ],
    color: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:bg-orange-500/20",
  },
];

const SkillCard = ({
  category,
  items,
  color,
  borderColor,
  hoverColor,
}: {
  category: string;
  items: string[];
  color: string;
  borderColor: string;
  hoverColor: string;
}) => {
  return (
    <div
      className={`rounded-2xl p-6 ${color} border ${borderColor} shadow-lg transition-all duration-300 ${hoverColor} hover:scale-[1.02] hover:shadow-xl`}
    >
      <h3 className="mb-4 text-xl font-semibold text-gray-800">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-200 bg-white/50 px-3 py-1 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-white hover:shadow-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Skills & Expertise
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          A comprehensive overview of my technical skills and professional
          expertise
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.category} {...skill} />
        ))}
      </div>
    </div>
  );
};
