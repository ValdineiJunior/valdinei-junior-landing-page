import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/ValdineiJunior",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/valdinei-junior-software-developer/",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:valdineidepaulajunior@gmail.com",
  },
  {
    name: "Phone",
    icon: Phone,
    url: "tel:+5543996367035",
  },
  {
    name: "Website",
    icon: Globe,
    url: "https://valdinei-junior.dev",
  },
];

const ContactLink = ({
  name,
  icon: Icon,
  url,
}: {
  name: string;
  icon: any;
  url: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white`}
    >
      <Icon className="h-6 w-6" />
      <span className="font-medium">{name}</span>
    </a>
  );
};

export const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          I&apos;m always up for a good chat — whether it&apos;s about a cool
          idea, a project you&apos;re working on, or just to say hey. You can
          find me on the platforms below. Don&apos;t be shy!
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link) => (
          <ContactLink key={link.name} {...link} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          Let&apos;s Work Together
        </h3>
        <p className="mx-auto max-w-2xl text-gray-600">
          Got something in mind? I&apos;m always open to interesting
          conversations, collaborations, or just swapping ideas. If you think we
          should connect, just drop me a message — I&apos;d love to hear from
          you.
        </p>
      </div>
    </div>
  );
};
