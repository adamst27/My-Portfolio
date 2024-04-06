"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = (props: any) => {
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
    <>
      <div className="w-3/4 rounded-lg shadow-md overflow-hidden border scrollable border-slate-700 flex flex-col mx-auto justify-center items-center md:flex-row md:items-center gap-8 p-6 space-y-6 mt-8">
        <Image
          src={props.image_url}
          alt={props.title}
          width={350}
          height={350}
          className="rounded-lg md:w-1/2"
        />
        <div className="flex flex-col gap-3 md:w-1/2 justify-around">
          <h2 className="text-xl  text-light text-center">{props.title}</h2>
          <p className="text-gray-200 text-center">{props.description}</p>
          <Link
            href={props.project_url || "#"}
            className="about-btn text-white text-center"
          >
            View Project
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;
