import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaArrowUpRightDots } from "react-icons/fa6";

const BlogCard = ({ image, title, date, description }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(imageElement, {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageElement, { scale: 1, duration: 0.3, ease: "power1.inOut" });
    };

    imageElement.addEventListener("mouseenter", handleMouseEnter);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageElement.removeEventListener("mouseenter", handleMouseEnter);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="max-w-sm p-12 relative overflow-visible">
      <img
        ref={imageRef}
        className="w-full object-cover h-auto blog-image"
        src={image}
        alt="Blog Post"
      />
      <div className="px-6 text-justify py-4 shadow-lg bg-white absolute left-48 z-10 bottom-10 w-[85%]">
        <span className="text-gray-500 text-sm">{date}</span>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className=" mt-3 border" />
        <div className="flex justify-start items-center p-2">
          read more
          <FaArrowUpRightDots />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
