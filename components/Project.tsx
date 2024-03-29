import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = (props: any) => {
  return (
    <div className="w-3/4 rounded-lg shadow-md overflow-hidden bg-white flex flex-col mx-auto justify-center items-center md:flex-row md:items-center gap-8 p-6 space-y-6 mt-8">
      <Image
        src={props.image_url}
        alt={props.title}
        width={300}
        height={300}
        className="rounded-lg md:w-1/2"
      />
      <div className="flex flex-col space-y-2 md:w-1/2">
        <h2 className="text-xl font-bold text-gray-800">{props.title}</h2>
        <p className="text-gray-600">{props.description}</p>
        <Link
          href={props.project_url || "#"}
          className="px-4 py-2 m-2 border-white text-center border-[1px] rounded-full hover:text-white hover:bg-black bg-white text-black transition duration-500"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Project;
