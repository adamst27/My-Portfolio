import Link from "next/link";
import { SparklesCore } from "@components/ui/sparkles";
import { Meteors } from "@components/ui/meteors";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";
import About from "@components/About";
const page = () => {
  return (
    <>
      <main className="overflow-hidden relative h-screen">
        <div className="w-full h-full flex flex-col bg-black items-center justify-center overflow-hidden">
          <Meteors number={20} />
          <h1 className="md:text-8xl text-6xl lg:text-9xl font-bold text-center text-white text-stroke relative z-20">
            Design, Code, Deploy.
          </h1>
          <div className="flex flex-row justify-between items-center z-50 absolute left-0 bottom-32 rounded-e-full text-black bg-white px-2 py-4 gap-2">
            <div className="shadow-md rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <div>
              <p>
                Based In <span className="font-bold">Morocco</span>
              </p>
            </div>
          </div>
          <div className="w-[40rem] h-40 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8">
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <Link
                href="https://www.instagram.com/stadworks_/"
                className="text-gray-500 hover:text-light"
                target="_blank"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/vitocorleone2g"
                className="text-gray-500 hover:text-light"
                target="_blank"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/adamst27"
                className="text-gray-500 hover:text-light"
                target="_blank"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <About />
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
          <div className="space-y-2 scrollable">
            <h2 className="text-3xl font-bold tracking-tighter mb-3 sm:text-4xl lg:text-6xl/none text-white">
              What can i do
            </h2>
          </div>
          <div className="scrollable w-full overflow-x-hidden">
            <InfiniteMovingCards
              items={services}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="scrollable w-full overflow-x-hidden">
            <InfiniteMovingCards
              items={softSkills}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden">
        <div className="call-to-action flex flex-col items-center justify-center h-screen px-8">
          <h2 className="text-xl font-bold tracking-tighter sm:text-4xl p-2 lg:text-6xl text-white call-to-action-heading">
            Let&apos;s work together
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex gap-2 z-10 items-center px-2 py-1 md:px-4 md:py-2 bg-violet-600 hover:bg-opacity-75 text-white font-bold rounded-full shadow-md"
          >
            Get Started
            <svg
              className="-ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="absolute inset-0 z-0 p-4 rounded-lg">
          <svg
            className="w-full h-full animate-pulse"
            viewBox="0 0 1680 672"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0"
              y="0"
              width="1680"
              height="672"
              fill="rgba(255, 255, 255, 0.1)"
            />
          </svg>
        </div>
      </section>
    </>
  );
};
const services = [
  {
    name: "Static Websites",
    title:
      "I can create amazing static websites using the latest technologies and tools, such as React, Next.js, and tailwindcss.",
  },
  {
    name: "Full Stack Websites",
    title:
      "I can create fully functionnal full-stack websites thanks to NextJS as a full stack framework and using Mangodb.",
  },
  {
    name: "UI/UX Design",
    title: "I can create engaging and user freindly websites using Figma.",
  },
  {
    name: "Wordpress",
    title: "I can create performant WordPress websites using Elementor.",
  },
];
const softSkills = [
  {
    name: "Problem Solving",
    title:
      "I can solve complex problems using the latest technologies and tools.",
  },
  {
    name: "Communication/Team Work",
    title: "I have good communication skills and can communicate effectively.",
  },
  {
    name: "Solutions",
    title: "I can craft amazing solutions that meets your needs.",
  },
];

export default page;
