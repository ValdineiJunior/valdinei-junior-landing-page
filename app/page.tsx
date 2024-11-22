import { About } from "@/components/About";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <Tabs defaultValue="about" className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full bg-lightBlue">
        <div className="mx-auto w-full max-w-7xl">
          <TabsList>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
        </div>
      </header>
      <main className="mx-auto w-full flex-1 px-10">
        <TabsContent value="about">
          <About />
        </TabsContent>
        <TabsContent value="portfolio">
          <h1>Portfolio</h1>
        </TabsContent>
        <TabsContent value="experience">
          <h1>Experience</h1>
        </TabsContent>
        <TabsContent value="skills">
          <h1>Skills</h1>
        </TabsContent>
        <TabsContent value="contact">
          <h1>Contact</h1>
        </TabsContent>
      </main>
      <footer className="h-20 content-center bg-lightBlue">
        <div className="mx-auto w-full max-w-7xl px-1">
          Created by Valdinei de Paula Junior
        </div>
      </footer>
    </Tabs>
  );
}
