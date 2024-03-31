"use client";
import Skill from "./Skill";
import { useEffect } from "react";
import Link from "next/link";
const About = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".scrollable");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 mt-28">
        <div className="space-y-2 scrollable">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none text-white">
            About Me
          </h2>
        </div>
        <div className="text-white text-sm max-w-prose md:space-y-6 lg:max-w-2xl lg:text-base xl:text-lg">
          <div className="my-4 scrollable">
            <h3 className="text-2xl font-bold tracking-tight">Who am I?</h3>
            <p className="text-gray-300 md:text-lg lg:text-base/relaxed xl:text-lg my-4">
              My name is Adam. I&apos;m a passionate learner and an aspiring
              developer who loves to take on new challenges. My journey in the
              tech industry has been nothing short of exciting. I&apos;m always
              eager to dive into the world of coding, exploring new
              technologies, and finding innovative solutions to real-world
              problems.
            </p>
            <div className="row my-8">
              <Link href={"/projects"} className="about-btn">
                Projects
              </Link>
              <Link href={"/contact"} className="about-btn">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Skill />
    </section>
  );
};

export default About;
