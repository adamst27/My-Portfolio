"use client";
import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-2 scrollable">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none text-white">
            CONTACT
          </h2>
        </div>
        <div className="text-white text-sm md:space-y-6 lg:text-base xl:text-lg">
          <form className="contact-form flex flex-col gap-2 p-6">
            <h3 className="text-2xl text-left">Get in touch</h3>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <textarea
              placeholder="Subject"
              name="subject"
              onChange={handleChange}
            ></textarea>
            <textarea
              placeholder="Message"
              name="message"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="px-16 py-2 m-2 border-white border-[1px] rounded-full hover:bg-white hover:text-black transition duration-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
