// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import BlogCard from './BlogCard';

// const BlogSection = () => {

//   useEffect(() => {
//     gsap.from('.blog-card', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
//   }, []);

//   const blogs = [
//     {
//       image: 'https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=750&q=75',
//       title: 'How to bring fold to your startup company with Axtra',
//       date: '02 May 2019',
//       description: 'Short description about the blog post...',
//     },
//     {
//       image: 'https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c0b84348.jpg&w=750&q=75',
//       title: 'How to manage a talented and successful design team',
//       date: '02 May 2019',
//       description: 'Short description about the blog post...',
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold mb-6">Read Updated Journal</h2>
//       <p className="text-lg mb-12">Read our blog and try to see everything from every perspective...</p>
//       <div className="grid md:grid-cols-2 gap-4">
//         {blogs.map((blog, index) => (
//           <BlogCard key={index} className="blog-card" {...blog} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import BlogCard from './BlogCard';

const BlogSection = () => {
  useEffect(() => {
    gsap.from('.blog-image', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
  }, []);

  const blogs = [
    {
      image: 'https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=750&q=75',
      title: 'How to bring fold to your startup company with Axtra',
      date: '02 May 2019',
      description: 'Short description about the blog post...',
    },
    {
      image: 'https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c0b84348.jpg&w=750&q=75',
      title: 'How to manage a talented and successful design team',
      date: '02 May 2019',
      description: 'Short description about the blog post...',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center mb-12 relative">
        <div className="text-center">
          <h3 className="text-lg font-medium">Recent Blog</h3>
          <h2 className="text-3xl font-bold">Read Updated</h2>
          <h2 className="text-3xl font-bold mb-6">Journal</h2>
        </div>
        <div className="h-full border-l-4 border-gray-300 ml-4"></div>
        <p className="text-lg max-w-md ml-4">
          Read our blog and try to see everything from every perspective. Our passion lies in making everything accessible and aesthetic for everyone.
        </p>
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

