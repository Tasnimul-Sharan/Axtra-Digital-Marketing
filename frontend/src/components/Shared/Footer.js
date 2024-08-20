import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const colors = ["#fbbf24", "#f97316", "#ec4899"];
    gsap.to(textRef.current, {
      backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      repeat: -1,
      duration: 4,
      ease: "power1.inOut",
      backgroundPosition: "200% center",
      backgroundSize: "400% 100%",
      onComplete: () => {
        gsap.to(textRef.current, { backgroundPosition: "0% center" });
      },
    });
  }, []);

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Axtra</h2>
          <p className="text-gray-400">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>
        <div className="flex flex-col border border-[#262626] border-collapse w-24">
          <a
            href="#"
            className="text-white border-[#262626] border h-24 flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-white border-[#262626] border h-24 flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white border-[#262626] border h-24 flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-white border-[#262626] border  h-24 flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300"
          >
            Instagram
          </a>
        </div>

        <div className="flex flex-col text-right px-16">
          <h2
            ref={textRef}
            className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4"
          >
            LET'S TALK
          </h2>
        </div>
      </div>
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2022 – 2025 | Alrights reserved by Wealcoder
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              ABOUT US
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              CONTACT
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              CAREER
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              FAQS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
