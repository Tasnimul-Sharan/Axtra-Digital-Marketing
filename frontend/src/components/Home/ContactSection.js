// src/components/ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-[#f3f5dd] flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">Have you project in mind?</h2>
      <h1 className="text-6xl font-bold mt-4">
        Let’s make something great together!
      </h1>
      <button className="mt-10 bg-gray-800 text-white px-8 py-4 rounded-full">
        Contact With Us
      </button>
    </div>
  );
};

export default ContactSection;
