import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const About = () => {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="rounded-3xl bg-darkBlue p-6 text-main-50 sm:p-10">
              <h2 className="py-4 text-lg font-semibold sm:text-xl">
                Welcome to my portfolio
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-base sm:text-lg">
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
            <div className="rounded-3xl bg-darkGreen p-6 text-darkBlue sm:p-10">
              <h2 className="py-4 text-lg font-semibold sm:text-xl">
                My history
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-base sm:text-lg">
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
            <div className="rounded-3xl bg-lightBlue p-6 text-darkBlue sm:p-10">
              <h2 className="py-4 text-lg font-semibold sm:text-xl">
                My services
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-base sm:text-lg">
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
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};
