// import React, { useState, useEffect } from "react";
// import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

// const ScrollButton = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const scrollToBottom = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisible);
//     return () => {
//       window.removeEventListener("scroll", toggleVisible);
//     };
//   }, []);

//   return (
//     <div>
//       {visible ? (
//         <button
//           className="fixed right-0 bottom-0 p-4 z-10 cursor-pointer bg-[#581C87] text-white rounded-full hover:scale-110 transition-all duration-500"
//           onClick={scrollToTop}
//         >
//           <FaArrowCircleUp className="text-3xl" />
//         </button>
//       ) : (
//         <button
//           className="fixed right-0 bottom-0 p-4 z-10 cursor-pointer bg-[#581C87] text-white rounded-full hover:scale-110 transition-all duration-500"
//           onClick={scrollToBottom}
//         >
//           <FaArrowCircleDown className="text-3xl" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default ScrollButton;

// import React, { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa6";

// const ScrollButton = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled >= 300) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   window.addEventListener("scroll", toggleVisible);

//   return (
//     <div>
//       <button className="fixed right-0 bottom-0 p-3 z-10 cursor-pointer bg-black text-white rounded-full hover:scale-110 transition-all duration-500">
//         <FaArrowUp
//           onClick={scrollToTop}
//           style={{ display: visible ? "inline" : "none" }}
//           className="text-3xl"
//         />
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;

import React, { useState, useEffect } from "react";
import { FaArrowCircleUp, FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div>
      {visible && (
        <button
          className="fixed right-0 bottom-0 p-4 z-10 cursor-pointer bg-black text-white rounded-full hover:scale-110 transition-all duration-500"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
