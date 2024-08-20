import { gsap } from 'gsap';
import { FaCheck, FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import React, { useRef, useState } from 'react';

const PricingTable = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const accordionRefs = useRef([]);
  
    const toggleAccordion = (index) => {
      if (activeIndex === index) {
        gsap.to(accordionRefs.current[index], { height: 0, duration: 0.5 });
        setActiveIndex(null);
      } else {
        if (activeIndex !== null) {
          gsap.to(accordionRefs.current[activeIndex], { height: 0, duration: 0.5 });
        }
        setActiveIndex(index);
        gsap.to(accordionRefs.current[index], { height: 'auto', duration: 0.5 });
      }
    };
  
    const accordionData = [
      {
        question: 'Design should enrich our day',
        answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
      },
      {
        question: 'Bring their individual experience and creative',
        answer: 'This is the second `$item\'s` accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.'
      },
      {
        question: 'Human centred design to challenges',
        answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
      },
      {
        question: 'Design should enrich our day',
        answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
      },
      {
        question: 'Developing core web applications',
        answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
      },
    ];

  return (
    <div className="bg-[#F7F1EF] min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-black mb-8">PRICING TABLE</h2>
        <h1 className="text-6xl font-bold text-black mb-6">BE KIND TO YOUR MIND</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-4xl mx-auto p-8 space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 text-lg font-bold flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className='font-medium'>{activeIndex === index ? <FaMinus/> : <FaPlus/>}</span>
            </button>
            <div
              ref={el => (accordionRefs.current[index] = el)}
              className="overflow-hidden h-0"
            >
              <div className="py-2 text-gray-600">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

          <div className="space-y-8">
            <div className="bg-black text-white p-8 rounded-lg shadow relative">
              <div className="absolute top-4 right-4 bg-orange-400 text-xs font-bold rounded-full px-2 py-1">
                BEST VALUE
              </div>
              <h4 className="text-xl font-bold mb-2">YEARLY</h4>
              <div >
              <FaCheck className='bg-[#ff9776] text-black w-10 h-10' />
              </div>
              <p className="text-gray-400">14 DAYS FREE</p>
              <p className="text-5xl font-bold my-6">$129.99</p>
              <p>Subscription fee is $129.99 USD and automatically renews each year.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow relative">
              <h4 className="text-xl font-bold mb-2">MONTHLY</h4>
              <p className="text-gray-400">7 DAYS FREE</p>
              <p className="text-5xl font-bold my-6">$12.99</p>
              <p>Subscription fee is $12.99 USD and automatically renews each year.</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="rounded-full border border-gray-300 py-4 px-6 flex items-center space-x-2 hover:bg-gray-100">
            <span className="font-semibold">Try It Free Now</span>
            <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;

// import React, { useState, useRef } from 'react';

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const accordionRefs = useRef([]);

//   const toggleAccordion = (index) => {
//     if (activeIndex === index) {
//       gsap.to(accordionRefs.current[index], { height: 0, duration: 0.5 });
//       setActiveIndex(null);
//     } else {
//       if (activeIndex !== null) {
//         gsap.to(accordionRefs.current[activeIndex], { height: 0, duration: 0.5 });
//       }
//       setActiveIndex(index);
//       gsap.to(accordionRefs.current[index], { height: 'auto', duration: 0.5 });
//     }
//   };

//   const accordionData = [
//     {
//       question: 'Design should enrich our day',
//       answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
//     },
//     {
//       question: 'Bring their individual experience and creative',
//       answer: 'This is the second `$item\'s` accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.'
//     },
//     {
//       question: 'Human centred design to challenges',
//       answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
//     },
//     {
//       question: 'Design should enrich our day',
//       answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
//     },
//     {
//       question: 'Developing core web applications',
//       answer: 'Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, design interfaces that bring joy to people.'
//     },
//   ];

//   return (
//     <div className="bg-[#F7F1EF] min-h-screen flex items-center justify-center">
//       <div className="max-w-4xl mx-auto p-8 space-y-4">
//         {accordionData.map((item, index) => (
//           <div key={index} className="border-b border-gray-300">
//             <button
//               className="w-full text-left py-4 text-lg font-bold flex justify-between items-center"
//               onClick={() => toggleAccordion(index)}
//             >
//               {item.question}
//               <span className='font-medium'>{activeIndex === index ? <FaMinus/> : <FaPlus/>}</span>
//             </button>
//             <div
//               ref={el => (accordionRefs.current[index] = el)}
//               className="overflow-hidden h-0"
//             >
//               <div className="py-2 text-gray-600">
//                 {item.answer}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accordion;
