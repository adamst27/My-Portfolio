"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skill = () => {
  const [skills, setSkills] = useState([]);
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
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch("/api/skills");
      const data = await res.json();
      setSkills(data);
    };
    fetchSkills();
  }, [skills]);
  return (
    <div className="SkillContainer">
      <div className="special-heading text-center p-4 text-2xl text-extrabold">
        <h3 className="text-2xl font-bold tracking-tight text-white">SKILLS</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center py-2 px-12 m-2 scrollable">
        {skills.map((skill: any) => (
          <div
            key={skill.id}
            className="p-4 m-2 shadow-inner rounded-full bg-white"
          >
            <Image
              src={skill.image_url}
              alt={"Skill Image"}
              width={48}
              height={48}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
