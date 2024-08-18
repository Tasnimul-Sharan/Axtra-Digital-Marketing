// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const WhoWeAre = () => {
//   useEffect(() => {
//     // Parallax effect for the image
//     gsap.to(".parallax-image", {
//       y: -100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".parallax-image",
//         scrub: true,
//       },
//     });

//     // Button background color animation
//     gsap.to(".animated-button", {
//       backgroundColor: "#ffffff", // target background color
//       color: "#121212", // target text color
//       duration: 1,
//       paused: true,
//       reversed: true,
//       ease: "power1.inOut",
//     });

//     const button = document.querySelector(".animated-button");
//     button.addEventListener("mouseenter", () => {
//       gsap.to(button, { backgroundColor: "#ffffff", color: "#121212" });
//     });
//     button.addEventListener("mouseleave", () => {
//       gsap.to(button, { backgroundColor: "#121212", color: "#ffffff" });
//     });
//   }, []);

//   return (
//     <div className="bg-[#121212] py-12 text-white mx-auto">
//       <div className="container flex flex-col lg:flex-row gap-8 items-center">
//         <div className="lg:w-[50%]">
//           <img
//             src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
//             alt="Marketing Agency Office"
//             className="parallax-image w-full object-cover"
//           />
//         </div>
//         <div className="lg:w-[50%] text-white text-justify my-12">
//           <h1 className="text-lg font-bold uppercase">
//             Who We Are
//           </h1>
//           <h1 className="my-6 text-3xl font-bold uppercase leading-tight">
//             We are a leading digital marketing agency.
//           </h1>
//           <hr className="border-white/50 mb-6" />
//           <div className="mt-12">
//             <h2 className="text-xl my-8 leading-relaxed">
//               We are a team of strategic digital marketing professionals working
//               globally with the largest brands. We believe that progress only
//               happens when you refuse to play things safe. We combine ideas,
//               behaviors, and insights with design and technological data to
//               produce brand experiences that customers love.
//             </h2>
//             <div className="flex justify-start">
//               <button
//                 href="#"
//                 className="animated-button btn btn-circle w-40 h-40 flex items-center justify-center rounded-full border-2 border-white transition-all duration-500 bg-[#121212] text-white"
//               >
//                 Explore Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoWeAre;


import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  useEffect(() => {
    // Parallax effect for the image content
    gsap.to(".parallax-content", {
      ease: "none",
      // scrollTrigger: {
      //   trigger: ".parallax-image",
      //   start: "top bottom", // When the top of the image container enters the bottom of the viewport
      //   end: "bottom top", // When the bottom of the image container exits the top of the viewport
      //   scrub: true,
      // },
      scrollTrigger: {
        trigger: ".parallax-image",
        start: "top bottom", 
       end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  }, []);

  return (
    <div className="bg-[#121212] py-12 text-white mx-auto">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-[50%] overflow-hidden relative"> {/* Fixed image container with overflow hidden */}
          <img
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
            alt="Marketing Agency Office"
            className="parallax-content w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-[50%] text-white text-justify my-12 lg:pl-12"> {/* Adjusted padding for content */}
          <h1 className="text-lg text-white font-bold uppercase">
            Who We Are
          </h1>
          <h1 className="my-6 text-white text-6xl font-bold uppercase leading-tight">
            We are a leading<br />
            digital marketing<br />
            agency.
          </h1>
          <hr className="border-white/50 mb-6" />
          <div className="mt-12 lg:pl-8"> 
            <h2 className="text-xl leading-relaxed">
              We’re a team of strategic digital marketing professionals
              working globally with the largest brands. We believe that
              progress only happens when you refuse to play things safe.
              We combine ideas, behaviors, and insights with design and
              technological data to produce brand experiences that
              customers love.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

