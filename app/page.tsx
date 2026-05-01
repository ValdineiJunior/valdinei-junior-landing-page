import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Portfolio } from "@/components/Portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <Tabs defaultValue="about" className="flex min-h-screen flex-col bg-[#09090b]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/90 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 py-4 md:flex-row md:items-center">
            <div className="space-y-1">
              <span className="block text-lg font-semibold tracking-tight text-zinc-100 md:text-xl">
                Valdinei de Paula Junior
              </span>
              <span className="text-sm text-zinc-400">Frontend Engineer</span>
            </div>
            <TabsList className="flex w-full flex-wrap justify-start md:w-auto">
              <TabsTrigger
                value="about"
                className="text-sm sm:text-base"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="portfolio"
                className="text-sm sm:text-base"
              >
                Portfolio
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="text-sm sm:text-base"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="text-sm sm:text-base"
              >
                Contact
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <TabsContent value="about" className="mt-4">
            <About />
          </TabsContent>
          <TabsContent value="portfolio" className="mt-4">
            <Portfolio />
          </TabsContent>
          <TabsContent value="skills" className="mt-4">
            <Skills />
          </TabsContent>
          <TabsContent value="contact" className="mt-4">
            <Contact />
          </TabsContent>
        </div>
      </main>
      <footer className="border-t border-white/10 bg-[#09090b] py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-zinc-400">
                © {new Date().getFullYear()} Valdinei de Paula Junior. All
                rights reserved.
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ValdineiJunior"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-zinc-100"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/valdinei-junior-software-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-zinc-100"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5543996367035"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-zinc-100"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Tabs>
  );
}
