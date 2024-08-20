import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-[#e0e3cc] flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-medium">Have you project in mind?</h2>
      <h1 className="text-8xl font-semibold mt-4">
        Let’s make something <br/> great together!
      </h1>
<div className="mt-16">
      <button
        href="#"
        className="w-72 h-72 flex items-center justify-center rounded-full border-2 border-black transition-all duration-500 bg-[#e0e3cc] text-[#5a5b5a">
         Contact With Us
       </button>

</div>
    </div>
  );
};

export default ContactSection;
