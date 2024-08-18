// src/components/ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-[#e0e3cc] flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">Have you project in mind?</h2>
      <h1 className="text-6xl font-bold mt-4">
        Let’s make something great together!
      </h1>
<div className="mt-16">
      <button
        href="#"
        className="animated-button btn btn-circle w-40 h-40 flex items-center justify-center rounded-full border-2 border-white transition-all duration-500 bg-[#121212] text-white">
         Contact With Us
       </button>

</div>
    </div>
  );
};

export default ContactSection;
