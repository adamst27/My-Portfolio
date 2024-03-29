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
  }, [projects]);
  return (
    <section className="w-full bg-black pt-28">
      {projects.map((project: any) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          project_url={project.project_url}
          image_url={project.image_url}
        />
      ))}
    </section>
  );
};
export default Projects;
