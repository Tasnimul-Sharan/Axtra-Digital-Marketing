import React from "react";

const BusinessSection = () => {
  return (
    <div className="flex justify-between items-center p-32 bg-[#fffaf0]">
      <div>
        {/* <h3 className="text-sm text-justify font-semibold text-gray-600 mb-12">
          WHY CHOOSE US
        </h3> */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-80 ml-40">
          <div>
            <h1 className="text-8xl font-semibold">25k</h1>
            <p className="text-lg text-gray-500">Projects completed</p>
          </div>
          <div>
            <h1 className="text-8xl font-semibold">8k</h1>
            <p className="text-lg text-gray-500">Happy customers</p>
          </div>
          <div>
            <h1 className="text-8xl font-semibold">15</h1>
            <p className="text-lg text-gray-500">Years of experience</p>
          </div>
          <div>
            <h1 className="text-8xl font-semibold">98</h1>
            <p className="text-lg text-gray-500">Awards achieved</p>
          </div>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="overflow-hidden">
          <img
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcounter-3.40d27be6.png&w=750&q=75"
            alt="Teamwork"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
