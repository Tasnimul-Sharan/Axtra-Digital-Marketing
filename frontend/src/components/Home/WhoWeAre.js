import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  useEffect(() => {
    gsap.to(".parallax-content", {
      yPercent: -30, // Increase for more visible movement
      ease: "power1.out", // Smooth easing
      scrollTrigger: {
        trigger: ".parallax-image",
        start: "top bottom", 
        end: "bottom top",
        scrub: 1, // Adjust scrub for smoother transition
        invalidateOnRefresh: true,
      }
    });
  }, []);

  return (
    <div className="bg-[#121212] py-12 text-white mx-auto">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-[50%] overflow-hidden relative parallax-image" style={{ marginLeft: "20px" }}> {/* Added margin */}
          <img
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
            alt="Marketing Agency Office"
            className="parallax-content w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-[50%] text-white text-justify my-12 lg:pl-12">
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


// import React from "react";
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// const WhoWeAre = () => {
//   return (
//     <div className="bg-[#121212] py-12 text-white mx-auto">
//         <div className="container flex flex-col lg:flex-row gap-8 items-center">
//           <div className="lg:w-[50%] overflow-hidden relative parallax-image">
//             {/* Parallax component from react-scroll-parallax */}
//     <ParallaxProvider>
//             <Parallax speed={50} className="parallax-content">
//               <img
//                 src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
//                 alt="Marketing Agency Office"
//                 className="w-full h-full object-cover"
//                 style={{ marginLeft: "20px" }} // Adding left margin
//               />
//             </Parallax>
//     </ParallaxProvider>

//           </div>
//           <div className="lg:w-[50%] text-white text-justify my-12 lg:pl-12">
//             <h1 className="text-lg text-white font-bold uppercase">
//               Who We Are
//             </h1>
//             <h1 className="my-6 text-white text-6xl font-bold uppercase leading-tight">
//               We are a leading<br />
//               digital marketing<br />
//               agency.
//             </h1>
//             <hr className="border-white/50 mb-6" />
//             <div className="mt-12 lg:pl-8"> 
//               <h2 className="text-xl leading-relaxed">
//                 We’re a team of strategic digital marketing professionals
//                 working globally with the largest brands. We believe that
//                 progress only happens when you refuse to play things safe.
//                 We combine ideas, behaviors, and insights with design and
//                 technological data to produce brand experiences that
//                 customers love.
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default WhoWeAre;
