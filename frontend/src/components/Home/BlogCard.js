// import React from 'react';

// const BlogCard = ({ image, title, date, description }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden">
//       <img className="w-full" src={image} alt="Blog Post" />
//       <div className="px-6 py-4 shadow-lg absolute">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <span className="text-gray-500 text-sm">{date}</span>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;


import React from 'react';

const BlogCard = ({ image, title, date, description }) => {
  return (
    <div className="max-w-sm relative overflow-hidden">
      <img className="w-full object-cover h-48 blog-image" src={image} alt="Blog Post" />
      <div className="px-6 py-4 shadow-lg bg-white absolute left-5 -bottom-12 z-10 w-[85%]">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 mt-8">
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;

