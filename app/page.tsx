import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <Tabs defaultValue="account" className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full bg-black">
        <div>
          <TabsList>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
        </div>
      </header>
      <main className="flex-1">
        <TabsContent value="about">
          <h1>About Me</h1>
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
        <TabsContent value="education">
          <h1>Education</h1>
        </TabsContent>
        <TabsContent value="contact">
          <h1>Contact</h1>
        </TabsContent>
      </main>
      <footer className="py-6">Created by Valdinei de Paula Junior</footer>
    </Tabs>
  );
}
