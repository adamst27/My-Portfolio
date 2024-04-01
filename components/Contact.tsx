"use client";
import React, { useState, useEffect } from "react";
const Contact = () => {
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.alert("Message sent successfully");
      } else {
        window.alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-black">
      <div className="container mx-auto scrollable flex flex-col items-center justify-center gap-4 px-4 text-center my-16 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none text-white">
            CONTACT
          </h2>
        </div>
        <div className="text-white text-sm md:space-y-6 lg:text-base xl:text-lg">
          <form
            className="contact-form flex flex-col gap-2 p-6"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h3 className="md:text-2xl text-left">Get in touch</h3>
            <div className="flex flex-col md:flex-row">
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
            <button type="submit" className="about-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
