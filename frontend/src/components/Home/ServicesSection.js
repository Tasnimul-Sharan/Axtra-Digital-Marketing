import React from "react";

const ServicesSection = () => {
  return (
    <div className="bg-[#f3ecec] p-10">
      <div className="mb-8">
        <h2 className="text-3xl text-justify">WHY CHOOSE US</h2>
      </div>

      <div className="flex">
        <div className="w-1/2 text-justify">
          <h2 className="text-4xl font-extrabold mb-6">
            KEYWORD,RESEARCH, <b />
            STRATEGY,SURVEY,& <br /> ANALYTICS
          </h2>
          <p className="mb-8">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the...
          </p>
          <div className="flex space-x-4 mb-12">
            <button className="hover:bg-black hover:text-white text-black px-4 py-2 rounded-full">
              GOOGLE
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-full">
              PINTEREST
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-full">
              INSTAGRAM
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/6 flex flex-col space-y-6">
          <div className="flex items-center">
            <div className="bg-white p-10 rounded-full border border-[#121212]  text-center">
              <div className="text-2xl">70%</div>
            </div>
            <div className="ml-6 text-justify">
              <p className="font-bold">KEYWORD</p>
              <p>
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-white p-6 rounded-full border border-[#121212] text-center">
              <div className="text-2xl">95%</div>
            </div>
            <div className="ml-6 text-justify">
              <p className="font-bold">AUDIENCE</p>
              <p>
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-white p-6 rounded-full border border-[#121212] text-center">
              <div className="text-2xl">60%</div>
            </div>
            <div className="ml-6 text-justify">
              <p className="font-bold">STRATEGY</p>
              <p>
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
