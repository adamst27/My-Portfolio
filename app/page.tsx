import React from "react";
import Main from "@/components/Main";
import About from "@components/About";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";
const page = () => {
  return (
    <>
      <Main />
      <About />
      <section className="w-full py-6 md:py-12 lg:py-16 bg-black">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2 scrollable">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none text-white">
              What can i do
            </h2>
          </div>
          <div className="scrollable overflow-x-hidden">
            <InfiniteMovingCards
              items={services}
              direction="right"
              speed="slow"
            />
          </div>
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

export default page;
