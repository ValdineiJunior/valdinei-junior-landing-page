"use client";
import { Github, Linkedin, MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

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
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/5543996367035",
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

const CopyableText = ({
  text,
  label,
  copyText,
}: {
  text: string;
  label: string;
  copyText?: string;
}) => {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-800">{text}</p>
      </div>
      <button
        onClick={() => copyToClipboard(copyText || text)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-2"
        aria-label="Copy"
      >
        {copied ? (
          <>
            <Check className="h-5 w-5 text-green-500 sm:h-4 sm:w-4" />
            <span className="hidden lg:inline">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-5 w-5 sm:h-4 sm:w-4" />
            <span className="hidden lg:inline">Copy</span>
          </>
        )}
      </button>
    </div>
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

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
        <CopyableText
          label="Email Address"
          text="valdineidepaulajunior@gmail.com"
        />
        <CopyableText
          label="Phone Number"
          text="+55 (43) 99636-7035"
          copyText="+5543996367035"
        />
      </div>
    </div>
  );
};
