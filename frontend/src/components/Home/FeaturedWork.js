// import React, { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const FeaturedWork = () => {
//   const slides = [
//     {
//       id: 1,
//       image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.fa8e208f.jpg&w=640&q=75", // Replace with your image
//       title: "BENJON WEBSITE",
//       year: "2012",
//     },
//     {
//       id: 2,
//       image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=640&q=75", // Replace with your image
//       title: "BENJON WEBSITE",
//       year: "2012",
//     },
//     {
//       id: 3,
//       image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.2d3fe8ed.jpg&w=640&q=75", // Replace with your image
//       title: "BENJON WEBSITE",
//       year: "2012",
//     },
//     {
//       id: 4,
//       image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.ce321823.jpg&w=640&q=75", // Replace with your image
//       title: "BENJON WEBSITE",
//       year: "2012",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     gsap.to(sliderRef.current, { opacity: 1, duration: 1 });
//   }, [currentSlide]);

//   const nextSlide = () => {
//     gsap.to(sliderRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       onComplete: () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       },
//     });
//   };

//   const prevSlide = () => {
//     gsap.to(sliderRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       onComplete: () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//       },
//     });
//   };

//   return (
//     <div
//       className="relative w-full h-screen overflow-hidden bg-black group"
//     >
//       <div
//         ref={sliderRef}
//         className="flex items-center justify-center h-full text-white"
//       >
//         <div className="text-left absolute top-8 left-20">
//           <p className="text-sm text-white">FEATURED WORK</p>
//           <p className="text-3xl text-white">
//             {currentSlide + 1} / {slides.length}
//           </p>
//         </div>
//         <div className="flex items-center">
//           <div className="mr-4">
//             <h1 className="text-9xl font-bold text-white">{slides[currentSlide].title}</h1>
//             <p className="text-5xl text-white">{slides[currentSlide].year}</p>
//           </div>
//           <div className="w-1/3">
//             <img
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].title}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//       <div
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
//         onClick={prevSlide}
//       >
//         <div className="rounded-full bg-black border-2 border-white text-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
//           <FaArrowLeft size={25} />
//         </div>
//       </div>
//       <div
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
//         onClick={nextSlide}
//       >
//         <div className="rounded-full bg-black border-2 border-white text-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
//           <FaArrowRight size={25} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedWork;


import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FeaturedWork = () => {
  const slides = [
    {
      id: 1,
      image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.fa8e208f.jpg&w=640&q=75",
      title1: "BENJON",
      title2: "WEBSITE",
      year: "2012",
    },
    {
      id: 2,
      image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=640&q=75",
      title1: "BENJON",
      title2: "WEBSITE",
      year: "2012",
    },
    {
      id: 3,
      image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.2d3fe8ed.jpg&w=640&q=75",
      title1: "BENJON",
      title2: "WEBSITE",
      year: "2012",
    },
    {
      id: 4,
      image: "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.ce321823.jpg&w=640&q=75",
      title1: "BENJON",
      title2: "WEBSITE",
      year: "2012",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.to(sliderRef.current, { opacity: 1, duration: 1 });
  }, [currentSlide]);

  const nextSlide = () => {
    gsap.to(sliderRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      },
    });
  };

  const prevSlide = () => {
    gsap.to(sliderRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      },
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black group">
      <div ref={sliderRef} className="flex items-center justify-center h-full text-white">
        <div className="absolute top-10 left-96">
          <p className="text-sm text-white">FEATURED WORK</p>
          {/* <p className="text-5xl text-white">
            {currentSlide + 1} / {slides.length}
          </p> */}
        </div>
        <div className="absolute top-14">
          <p className="text-5xl text-white">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>
        <div className="flex items-center space-x-10">
          <div>
            <h1 className="text-9xl font-bold text-white">{slides[currentSlide].title1} <br/>
              <span className="ml-96 z-10">{slides[currentSlide].title2}</span>
            </h1>
            <p className="text-9xl mr-40 text-white">{slides[currentSlide].year}</p>
          </div>
          <div className="w-[30%]">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title1}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute top-1/2 left-36 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
        onClick={prevSlide}
      >
        <div className="rounded-full bg-black border-2 border-white text-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
          <FaArrowLeft size={25} />
        </div>
      </div>
      <div
        className="absolute top-1/2 right-36 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
        onClick={nextSlide}
      >
        <div className="rounded-full bg-black border-2 border-white text-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
          <FaArrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
