import React from "react";
import Link from "next/link";
const Banner = () => {
  return (
    <footer className=" h-[80vh] bg-black">
      <div className="flex justify-center items-center h-full">
        <div className="text-center px-8 py-16 lg:px-36 bg-accent flex justify-center items-center rounded-lg flex-col m-4 border-[1px] border-white bg-black">
          <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
          <Link
            href="/contact"
            className="px-4 py-2 m-2 border-white border-[1px] rounded-full text-white hover:bg-white hover:text-black transition duration-500"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Banner;
