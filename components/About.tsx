import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const About = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="rounded-3xl bg-darkBlue p-10 text-main-50">
              <h2 className="py-4 text-xl">Welcome to my portfolio</h2>
              <ul className="list-disc space-y-2 pl-5 text-lg">
                <li>
                  Hi, I am Valdinei, a software developer passionate about
                  technology.
                </li>
                <li>
                  Specialize in cutting-edge technologies, including React,
                  Next.js, and TypeScript.
                </li>
                <li>
                  My work on these projects adheres to high-quality development
                  processes.
                </li>
                <li>
                  I have experience in creating interactive and responsive
                  applications.
                </li>
                <li>
                  I am able to break down requirements into measurable and
                  achievable tasks.
                </li>
                <li>
                  If you are looking for a developer with a keen eye for detail
                  and a drive for quality, please get in touch.
                </li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="rounded-3xl bg-darkGreen p-10 text-darkBlue">
              <h2 className="py-4 text-xl">My history</h2>
              <ul className="list-disc space-y-2 pl-5 text-lg">
                <li>
                  Specialize in cutting-edge technologies, including React,
                  Next.js, and TypeScript.
                </li>
                <li>
                  My work on these projects adheres to high-quality development
                  processes.
                </li>
                <li>
                  I have experience in creating interactive and responsive
                  applications.
                </li>
                <li>
                  I am able to break down requirements into measurable and
                  achievable tasks.
                </li>
                <li>
                  If you are looking for a developer with a keen eye for detail
                  and a drive for quality, please get in touch.
                </li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="rounded-3xl bg-lightBlue p-10 text-darkBlue">
              <h2 className="py-4 text-xl">My services</h2>
              <ul className="list-disc space-y-2 pl-5 text-lg">
                <li>
                  Hi, I am Valdinei, a software developer passionate about
                  technology.
                </li>
                <li>
                  Specialize in cutting-edge technologies, including React,
                  Next.js, and TypeScript.
                </li>
                <li>
                  My work on these projects adheres to high-quality development
                  processes.
                </li>
                <li>
                  I have experience in creating interactive and responsive
                  applications.
                </li>
                <li>
                  I am able to break down requirements into measurable and
                  achievable tasks.
                </li>
                <li>
                  If you are looking for a developer with a keen eye for detail
                  and a drive for quality, please get in touch.
                </li>
              </ul>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
