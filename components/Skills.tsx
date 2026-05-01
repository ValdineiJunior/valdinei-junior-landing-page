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
  },
];

const SkillCard = ({
  category,
  items,
}: {
  category: string;
  items: string[];
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-colors hover:border-white/20">
      <h3 className="mb-4 text-xl font-semibold text-zinc-100">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-zinc-100"
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
    <section className="py-12">
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Skills
        </p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-100">
          Skills & Expertise
        </h2>
        <p className="max-w-2xl text-zinc-400">
          A comprehensive overview of my technical skills and professional
          expertise
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.category} {...skill} />
        ))}
      </div>
    </section>
  );
};
