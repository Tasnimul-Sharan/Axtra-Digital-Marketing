import React, { useEffect } from "react";
import gsap from "gsap";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  useEffect(() => {
    gsap.from(".blog-image", { opacity: 5, y: 50, duration: 1, stagger: 0.3 });
  }, []);

  const blogs = [
    {
      image:
        "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=750&q=75",
      title: "How to bring fold to your startup company with Axtra",
      date: "UI Design . 02 May 2019",
    },
    {
      image:
        "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c0b84348.jpg&w=750&q=75",
      title: "How to manage a talented and successful design team",
      date: "UI Design . 02 May 2019",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center items-center mb-12 relative">
        {/* Centered Text */}
        <div className="text-center md:text-justify">
          <h3 className="text-lg font-medium">Recent Blog</h3>
          <h2 className="text-3xl font-bold">Read Updated</h2>
          <h2 className="text-3xl font-bold mb-6">Journal</h2>
        </div>
        {/* Right-Aligned Paragraph */}
        <div className="md:ml-8 md:border-l-4 md:border-gray-300 md:pl-4 mt-6 md:mt-0 text-left">
          <p className="text-lg max-w-md">
            Read our blog and try to see everything from every perspective. Our
            passion lies in making everything accessible and aesthetic for
            everyone.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {blogs.map((blog, index) => (
          <BlogCard key={index} className="blog-card" {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
