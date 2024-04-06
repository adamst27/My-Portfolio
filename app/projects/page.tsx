"use client";
import { useState, useEffect } from "react";
import Project from "@components/Project";
import React from "react";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };
    fetchSkills();
  }, []);
  return (
    <section className="w-full pt-28">
      {projects.map((project: any) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          project_url={project.project_link}
          image_url={project.image_url}
        />
      ))}
      <div className="text-center text-white my-10">
        <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none text-white">
          ... More To Come
        </h3>
      </div>
    </section>
  );
};
export default Projects;
