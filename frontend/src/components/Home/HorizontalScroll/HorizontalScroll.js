// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./HorizontalScroll.css";
// import WhyChooseUsHeader from "../WhyChooseUsHeader";
// import ServicesSection from "../ServicesSection";
// import BusinessSection from "../BusinessSection";
// import ContactSection from "../ContactSection";

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
//         end: () => `+=${containerRef.current.scrollWidth}`,
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

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";
import WhyChooseUsHeader from "../WhyChooseUsHeader";
import ServicesSection from "../ServicesSection";
import BusinessSection from "../BusinessSection";
import ContactSection from "../ContactSection";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".horizontal-scroll-panel");

    const animation = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${containerRef.current.scrollWidth}`,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="horizontal-scroll-container" ref={containerRef}>
      <div className="horizontal-scroll-panel">
        <WhyChooseUsHeader />
      </div>
      <div className="horizontal-scroll-panel">
        <ServicesSection />
      </div>
      <div className="horizontal-scroll-panel">
        <BusinessSection />
      </div>
      <div className="horizontal-scroll-panel">
        <ContactSection />
      </div>
    </div>
  );
};

export default HorizontalScroll;
