// // import React from "react";

// // const WhoWeAre = () => {
// //   return (
// //     <div className="bg-primary py-12 text-white/80 mx-auto">
// //       <div className="container flex flex-col lg:flex-row gap-8">
// //         <div className="lg:w-[50%]">
// //           <img
// //             src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
// //             alt=""
// //           />
// //         </div>
// //         <div className="lg:w-[50%] my-12 ">
// //           <h1 className="text-3xl font-bold text-accent uppercase">
// //             Who We Are
// //           </h1>
// //           <h1 className="my-6 text-3xl font-bold  uppercase">
// //             We are leading digital marketing agency.
// //           </h1>
// //           <hr />
// //           <div className="mt-12 ms-20">
// //             <h2 className="text-xl  my-8">
// //               We are a team of strategic mdigital marketing working globally
// //               with largest brands, We believe that progress only happens when
// //               you refused to play things safe. We combine ideas and behaviors,
// //               and insights with design, technological data to produce brand
// //               experiences that customers love our services.
// //             </h2>
// //             <div className="">
// //               <button
// //                 href=""
// //                 className="btn btn-circle w-40 h-40 rounded-full border-dashed transition-all duration-500 bg-primary text-white hover:bg-white hover:text-primary"
// //               >
// //                 Explore Us
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WhoWeAre;

// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const WhoWeAre = () => {
//   useEffect(() => {
//     gsap.to(".parallax-image", {
//       y: -100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".parallax-image",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="bg-[#121212] py-12 text-white/80 mx-auto">
//       <div className="container flex flex-col lg:flex-row gap-8 items-center">
//         {/* Left Column - Image */}
//         <div className="lg:w-[50%]">
//           <img
//             src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
//             alt="Marketing Agency Office"
//             className="parallax-image w-full object-cover"
//           />
//         </div>

//         {/* Right Column - Text and Button */}
//         <div className="lg:w-[50%] my-12">
//           <h1 className="text-3xl font-bold text-accent uppercase">
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
//                 href=""
//                 className="btn btn-circle w-40 h-40 flex items-center justify-center rounded-full border-2 border-white transition-all duration-500 bg-primary text-white hover:bg-white hover:text-primary"
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
    // Parallax effect for the image
    gsap.to(".parallax-image", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-image",
        scrub: true,
      },
    });

    // Button background color animation
    gsap.to(".animated-button", {
      backgroundColor: "#ffffff", // target background color
      color: "#121212", // target text color
      duration: 1,
      paused: true,
      reversed: true,
      ease: "power1.inOut",
    });

    const button = document.querySelector(".animated-button");
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { backgroundColor: "#ffffff", color: "#121212" });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { backgroundColor: "#121212", color: "#ffffff" });
    });
  }, []);

  return (
    <div className="bg-[#121212] py-12 text-white/80 mx-auto">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Column - Image */}
        <div className="lg:w-[50%]">
          <img
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
            alt="Marketing Agency Office"
            className="parallax-image w-full object-cover"
          />
        </div>

        {/* Right Column - Text and Button */}
        <div className="lg:w-[50%] text text-justify my-12">
          <h1 className="text-lg font-bold text-accent uppercase">
            Who We Are
          </h1>
          <h1 className="my-6 text-3xl font-bold uppercase leading-tight">
            We are a leading digital marketing agency.
          </h1>
          <hr className="border-white/50 mb-6" />
          <div className="mt-12">
            <h2 className="text-xl my-8 leading-relaxed">
              We are a team of strategic digital marketing professionals working
              globally with the largest brands. We believe that progress only
              happens when you refuse to play things safe. We combine ideas,
              behaviors, and insights with design and technological data to
              produce brand experiences that customers love.
            </h2>
            <div className="flex justify-start">
              <button
                href="#"
                className="animated-button btn btn-circle w-40 h-40 flex items-center justify-center rounded-full border-2 border-white transition-all duration-500 bg-[#121212] text-white"
              >
                Explore Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
