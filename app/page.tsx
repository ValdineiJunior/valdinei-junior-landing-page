import { About } from "@/components/About";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <Tabs defaultValue="about" className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full bg-lightBlue">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <TabsList className="flex w-full flex-wrap justify-center gap-2 py-4">
            <TabsTrigger value="about" className="text-sm sm:text-base">
              About Me
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="text-sm sm:text-base">
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="experience" className="text-sm sm:text-base">
              Experience
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-sm sm:text-base">
              Skills
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-sm sm:text-base">
              Contact
            </TabsTrigger>
          </TabsList>
        </div>
      </header>
      <main className="mx-auto w-full flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TabsContent value="about" className="mt-4">
            <About />
          </TabsContent>
          <TabsContent value="portfolio" className="mt-4">
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </TabsContent>
          <TabsContent value="experience" className="mt-4">
            <h1 className="text-2xl font-bold">Experience</h1>
          </TabsContent>
          <TabsContent value="skills" className="mt-4">
            <h1 className="text-2xl font-bold">Skills</h1>
          </TabsContent>
          <TabsContent value="contact" className="mt-4">
            <h1 className="text-2xl font-bold">Contact</h1>
          </TabsContent>
        </div>
      </main>
      <footer className="h-20 content-center bg-lightBlue">
        <div className="mx-auto w-full max-w-7xl px-4 text-center text-sm sm:px-6 sm:text-base lg:px-8">
          Created by Valdinei de Paula Junior
        </div>
      </footer>
    </Tabs>
  );
}
