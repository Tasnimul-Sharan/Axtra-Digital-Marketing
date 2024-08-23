import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const imagesRef = useRef([]);
  const buttonLeftRef = useRef(null);
  const buttonRightRef = useRef(null);

  useEffect(() => {
    // Handle mouse move to create a parallax effect
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      imagesRef.current.forEach((image, index) => {
        const movement = (index + 1) * 15;
        gsap.to(image, {
          x: (clientX - window.innerWidth / 2) / movement,
          y: (clientY - window.innerHeight / 2) / movement,
          ease: "power3.out",
          duration: 1,
        });
      });
    };

    // Add mouse move listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Animate buttons on hover
    [buttonLeftRef.current, buttonRightRef.current].forEach((button) => {
      gsap.fromTo(
        button,
        { backgroundColor: "#e5e7eb", color: "#000" },
        {
          backgroundColor: "#000",
          color: "#fff",
          ease: "power1.inOut",
          duration: 0.3,
          paused: true,
          reversed: true,
          onReverseComplete: () => {
            gsap.set(button, { clearProps: "all" });
          },
        }
      );

      button.addEventListener("mouseenter", () => {
        gsap.to(button, { reversed: false });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, { reversed: true });
      });
    });
  }, []);

  return (
    <div className="relative bg-white py-60">
      <div className="max-w-xl mx-auto text-center">
        <blockquote className="text-xl italic font-semibold text-gray-900">
          <p className="mb-4 text-8xl font-bold">
          “
          </p>
          <p className="mb-4">
            “When we talk about Alts, we do not mean a typical business partner,
            but rather a team that collaborates with us daily, always there for
            us when we encounter difficulties and celebrate achievements. We see
            in Alts our best ally for success!”
          </p>
          <footer>
            <cite className="not-italic">MARIA D. HALK</cite> <br />
            <span className="text-gray-500 text-sm">Managing Director</span>
          </footer>
        </blockquote>
      </div>

      {/* Arrows with hover effects */}
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          ref={buttonLeftRef}
          className="bg-gray-200 p-2 rounded-full mx-1"
        >
          {"<"}
        </button>
        <button
          ref={buttonRightRef}
          className="bg-gray-200 p-2 rounded-full mx-1"
        >
          {">"}
        </button>
      </div> */}
      
      <div
        className="absolute top-1/2 left-36 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
        // onClick={prevSlide}
      >
        <div ref={buttonLeftRef} className="rounded-full bg-black border-2 border-white text-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
          <FaArrowLeft size={25} />
        </div>
      </div>
      <div
        className="absolute top-1/2 right-36 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
        // onClick={nextSlide}
      >
        <div ref={buttonRightRef} className="rounded-full bg-black border-2 border-white text-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
          <FaArrowRight size={25} />
        </div>
      </div>

      {/* Images with parallax effect */}
      <div
        className="absolute top-10 left-10 w-24 h-24"
        ref={(el) => (imagesRef.current[0] = el)}
      >
        <img
          src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5fcd9521.jpg&w=256&q=75"
          alt="testimonial-1"
          className="rounded-full object-cover"
        />
      </div>
      <div
        className="absolute top-0 right-10 w-32 h-32"
        ref={(el) => (imagesRef.current[1] = el)}
      >
        <img
          src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.82004ae1.jpg&w=128&q=75"
          alt="testimonial-2"
          className="rounded-full object-cover"
        />
      </div>
      <div
        className="absolute bottom-20 left-20 w-48 h-48"
        ref={(el) => (imagesRef.current[2] = el)}
      >
        <img
          src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.632d09dc.jpg&w=384&q=75"
          alt="testimonial-3"
          className="rounded-full object-cover"
        />
      </div>
      <div
        className="absolute bottom-15 right-20 w-56 h-56"
        ref={(el) => (imagesRef.current[3] = el)}
      >
        <img
          src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.83e5f14f.jpg&w=256&q=75"
          alt="testimonial-4"
          className="rounded-full object-cover"
        />
      </div>
      <div
        className="absolute bottom-10 right-20 w-20 h-20"
        ref={(el) => (imagesRef.current[3] = el)}
      >
        <img
          src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.faeeace1.jpg&w=256&q=75"
          alt="testimonial-4"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonial;
