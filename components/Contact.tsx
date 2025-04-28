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
          Feel free to reach out to me through any of these platforms. I&apos;m
          always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
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
          I&apos;m currently available for freelance work and full-time
          positions. If you have a project that you want to get started, think
          you need my help with something, or just fancy saying hello, then get
          in touch.
        </p>
      </div>
    </div>
  );
};
