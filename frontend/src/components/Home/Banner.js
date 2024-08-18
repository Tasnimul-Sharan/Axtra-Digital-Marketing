// import React, { useState } from "react";
// import pic from "../../images/1.png";

// const Banner = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handleVideoToggle = () => {
//     setIsVideoPlaying(!isVideoPlaying);
//   };

//   return (
//     <div className="p-8 relative overflow-hidden">
//       {/* Video Background Section */}
//       <div
//         className={`absolute inset-0 transition-opacity duration-500 ${
//           isVideoPlaying ? "opacity-100 z-0" : "opacity-0 -z-10"
//         }`}
//       >
//         <video
//           src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </div>

//       {/* Main Content */}
//       <div
//         className={`relative z-10 p-6 ${
//           isVideoPlaying ? "text-white" : "text-black"
//         }`}
//       >
//         {/* Header Section */}
//         <div className="flex justify-start gap-10 items-center mt-12">
//           <h1 className="uppercase font-bold text-2xl">Digital</h1>
//           <div
//             className={`w-24 h-[2px] ${
//               isVideoPlaying ? "bg-white" : "bg-black"
//             }`}
//           ></div>
//         </div>

//         {/* Title and Video Section */}
//         <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-center my-5">
//           <div className={`${isVideoPlaying ? "text-white" : "text-black"}`}>
//             <h1 className="lg:text-[250px] text-[100px] uppercase font-bold lg:-mt-20">
//               Mark
//             </h1>
//           </div>
//           <div className="flex justify-center lg:-mt-12 items-center gap-3 mx-auto">
//             <div className="relative">
//               {!isVideoPlaying && (
//                 <div
//                   className="rounded-full cursor-pointer"
//                   onClick={handleVideoToggle}
//                 >
//                   <iframe
//                     width="200"
//                     height="200"
//                     src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
//                     title="Digital Agency"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="rounded-full"
//                   ></iframe>
//                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
//                     <svg
//                       className="w-10 h-10 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M14.752 11.168l-5.197-3.009A1 1 0 008 9.016v5.968a1 1 0 001.555.832l5.197-3.009a1 1 0 000-1.664z"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <h2
//               className="text-lg font-bold uppercase text-justify w-[40%] cursor-pointer"
//               onClick={handleVideoToggle}
//             >
//               {isVideoPlaying ? "Close video intro" : "Watch video intro"}
//             </h2>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
//           <div className="col-span-4">
//             <h1 className="text-sm text-justify font-medium p-20">
//               Static and dynamic secure code review can prevent a day before
//               your product is even released. We can integrate with your dev
//               environment.
//             </h1>
//           </div>
//           <div
//             className="w-full col-span-8 relative"
//             style={{
//               backgroundImage: isVideoPlaying ? "none" : `url(${pic})`,
//               backgroundPosition: "left 50% bottom 20px",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <h1 className="text-[100px] lg:text-[200px] uppercase font-bold lg:-mt-28">
//               eting
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import pic from "../../images/1.png";

const Banner = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="p-8 relative overflow-hidden">
      {/* Video Background Section */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isVideoPlaying ? "opacity-100 z-0" : "opacity-0 -z-10"
        }`}
      >
        <video
          src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 p-6 ${
          isVideoPlaying ? "text-white" : "text-black"
        }`}
      >
        {/* Header Section */}
        <div className="flex justify-start gap-10 items-center mt-12">
          <h1 className="uppercase font-bold text-2xl">Digital</h1>
          <div
            className={`w-24 h-[2px] ${
              isVideoPlaying ? "bg-white" : "bg-black"
            }`}
          ></div>
        </div>

        {/* Title and Video Section */}
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-center my-5">
          <div className={`${isVideoPlaying ? "text-white" : "text-black"}`}>
            <h1 className="lg:text-[250px] text-[100px] uppercase font-bold lg:-mt-20">
              Mark
            </h1>
          </div>
          <div className="flex justify-center lg:-mt-12 items-center gap-3 mx-auto">
            <div className="relative">
              {!isVideoPlaying && (
                <div
                  className="rounded-full cursor-pointer"
                  onClick={handleVideoToggle}
                >
                  <iframe
                    width="200"
                    height="200"
                    src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
                    title="Digital Agency"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-full"
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-5.197-3.009A1 1 0 008 9.016v5.968a1 1 0 001.555.832l5.197-3.009a1 1 0 000-1.664z"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <h2
              className="text-lg font-bold uppercase text-justify w-[40%] cursor-pointer"
              onClick={handleVideoToggle}
            >
              {isVideoPlaying ? "Close video intro" : "Watch video intro"}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-4">
            <h1 className="text-sm text-justify font-medium p-20">
              Static and dynamic secure code review can prevent a day before
              your product is even released. We can integrate with your dev
              environment.
            </h1>
          </div>
          <div
            className="w-full col-span-8 relative"
            style={{
              backgroundImage: isVideoPlaying ? "none" : `url(${pic})`,
              backgroundPosition: "left 50% bottom -50px", // Lower the image position
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-[100px] lg:text-[200px] uppercase font-bold lg:-mt-28">
              eting
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
