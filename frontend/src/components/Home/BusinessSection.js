import React from "react";

const BusinessSection = () => {
  return (
    <div className="flex justify-between items-center p-12 bg-beige">
      {/* Left side with text */}
      <div>
        <h3 className="text-sm text-justify font-semibold text-gray-600 mb-12">
          WHY CHOOSE US
        </h3>
        <div className="flex space-x-20 space-y-32">
          <div>
            <h1 className="text-7xl font-semibold">25k</h1>
            <p className="text-lg text-gray-500">Project completed</p>
          </div>
          <div className="m-10">
            <h1 className="text-7xl font-semibold">8k</h1>
            <p className="text-lg text-gray-500">Happy customers</p>
          </div>
        </div>
        <div className="flex space-x-16 mt-8">
          <div>
            <h1 className="text-7xl font-semibold">15</h1>
            <p className="text-lg text-gray-500">Years experiences</p>
          </div>
          <div>
            <h1 className="text-7xl font-semibold">98</h1>
            <p className="text-lg text-gray-500">Awards achievement</p>
          </div>
        </div>
      </div>

      {/* Right side with only the image */}
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcounter-3.40d27be6.png&w=750&q=75"
            alt="Teamwork"
            className="max-w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
