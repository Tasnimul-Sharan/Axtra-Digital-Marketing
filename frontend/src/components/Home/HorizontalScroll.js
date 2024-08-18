// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import WhyChooseUsHeader from "./WhyChooseUsHeader";
// // import ServicesSection from "./ServicesSection";
// // import BusinessSection from "./BusinessSection";
// // import ContactSection from "./ContactSection";
// // import "./HorizontalScroll.css";

// // gsap.registerPlugin(ScrollTrigger);

// // const HorizontalScroll = () => {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const sections = gsap.utils.toArray(".panel");

// //     gsap.to(sections, {
// //       xPercent: -100 * (sections.length - 1),
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: containerRef.current,
// //         pin: true,
// //         scrub: 1,
// //         snap: 1 / (sections.length - 1),
// //         end: () => `+=${containerRef.current.offsetWidth}`, // Dynamically calculates the end point
// //       },
// //     });
// //   }, []);

// //   return (
// //     <div className="container" ref={containerRef}>
// //       <div className="panel">
// //         <WhyChooseUsHeader />
// //       </div>
// //       <div className="panel">
// //         <ServicesSection />
// //       </div>
// //       <div className="panel">
// //         <BusinessSection />
// //       </div>
// //       <div className="panel">
// //         <ContactSection />
// //       </div>
// //     </div>
// //   );
// // };

// // export default HorizontalScroll;

// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import WhyChooseUsHeader from "./WhyChooseUsHeader";
// // import ServicesSection from "./ServicesSection";
// // import BusinessSection from "./BusinessSection";
// // import ContactSection from "./ContactSection";
// // import "./HorizontalScroll.css";

// // gsap.registerPlugin(ScrollTrigger);

// // const HorizontalScroll = () => {
// //   useEffect(() => {
// //     const sections = gsap.utils.toArray(".panel");

// //     gsap.to(sections, {
// //       xPercent: -100 * (sections.length - 1),
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: ".container",
// //         pin: true,
// //         scrub: 1,
// //         snap: 1 / (sections.length - 1),
// //         // base vertical scrolling on how wide the container is so it feels more natural.
// //         end: "+=3500",
// //       },
// //     });
// //   }, []);

// //   return (
// //     <div className="container">
// //       <div className="panel">
// //         <WhyChooseUsHeader />
// //       </div>
// //       <div className="panel">
// //         <ServicesSection />
// //       </div>
// //       <div className="panel">
// //         <BusinessSection />
// //       </div>
// //       <div className="panel">
// //         <ContactSection />
// //       </div>
// //     </div>
// //   );
// // };

// // export default HorizontalScroll;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import WhyChooseUsHeader from "./WhyChooseUsHeader";
// import ServicesSection from "./ServicesSection";
// import BusinessSection from "./BusinessSection";
// import ContactSection from "./ContactSection";
// import "./HorizontalScroll.css";

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScroll = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".panel");

//     const animation = gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 1,
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.scrollWidth}`, // Dynamically calculates the end point
//       },
//     });

//     // Cleanup on unmount
//     return () => {
//       animation.kill();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="container" ref={containerRef}>
//       <div className="panel">
//         <WhyChooseUsHeader />
//       </div>
//       <div className="panel">
//         <ServicesSection />
//       </div>
//       <div className="panel">
//         <BusinessSection />
//       </div>
//       <div className="panel">
//         <ContactSection />
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;
