import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Portfolio } from "@/components/Portfolio";
import { Experience } from "@/components/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <Tabs defaultValue="about" className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full bg-lightBlue shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <span className="text-xl font-bold text-darkBlue">
                Valdinei de Paula Junior
              </span>
              <span className="hidden text-sm text-gray-600 md:inline">|</span>
              <span className="text-sm text-gray-600">Frontend Engineer</span>
            </div>
            <TabsList className="flex w-full flex-wrap justify-center gap-2 md:w-auto">
              <TabsTrigger
                value="about"
                className="text-sm transition-all duration-300 hover:scale-105 sm:text-base"
              >
                About Me
              </TabsTrigger>
              <TabsTrigger
                value="portfolio"
                className="text-sm transition-all duration-300 hover:scale-105 sm:text-base"
              >
                Portfolio
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="text-sm transition-all duration-300 hover:scale-105 sm:text-base"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="text-sm transition-all duration-300 hover:scale-105 sm:text-base"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="text-sm transition-all duration-300 hover:scale-105 sm:text-base"
              >
                Contact
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="min-h-[calc(100vh-12rem)]">
            <TabsContent value="about" className="mt-4">
              <About />
            </TabsContent>
            <TabsContent value="portfolio" className="mt-4">
              <Portfolio />
            </TabsContent>
            <TabsContent value="experience" className="mt-4">
              <Experience />
            </TabsContent>
            <TabsContent value="skills" className="mt-4">
              <Skills />
            </TabsContent>
            <TabsContent value="contact" className="mt-4">
              <Contact />
            </TabsContent>
          </div>
        </div>
      </main>
      <footer className="bg-lightBlue py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Valdinei de Paula Junior. All
                rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ValdineiJunior"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/valdinei-junior-software-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:valdineidepaulajunior@gmail.com"
                className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Tabs>
  );
}
