import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    location: "Remote",
    description: [
      "Led the development of a new customer portal using Next.js and TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with UX team to improve application performance by 30%",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "AWS"],
  },
  {
    company: "Digital Innovations",
    position: "Frontend Developer",
    period: "2020 - 2022",
    location: "São Paulo, Brazil",
    description: [
      "Developed and maintained multiple client-facing applications",
      "Implemented responsive designs for mobile and desktop platforms",
      "Integrated third-party APIs and services",
      "Participated in agile development processes",
    ],
    technologies: ["React", "JavaScript", "Redux", "Material UI", "REST APIs"],
  },
  {
    company: "WebTech Solutions",
    position: "Junior Developer",
    period: "2018 - 2020",
    location: "Curitiba, Brazil",
    description: [
      "Built and maintained company websites and web applications",
      "Collaborated with designers to implement UI/UX designs",
      "Fixed bugs and implemented new features",
      "Participated in daily stand-ups and sprint planning",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof experiences)[0];
}) => {
  return (
    <div className="relative pb-8 pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-gray-200 last:before:hidden">
      <div className="bg-blue-500 absolute left-[-4px] top-2 h-2 w-2 rounded-full"></div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">
            {experience.position}
          </h3>
          <span className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">
            {experience.period}
          </span>
        </div>

        <div className="mb-4 flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            <span>{experience.company}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        <ul className="mb-4 space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Professional Experience
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          A timeline of my professional journey, highlighting key roles and
          achievements
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
};
