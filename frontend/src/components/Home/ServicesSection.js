import React from "react";

const ServicesSection = () => {
  return (
    <div className="bg-[#f3ecec] p-32">
      <div className="mb-8">
        <h2 className="text-3xl text-justify">WHY CHOOSE US</h2>
      </div>

      <div className="flex my-6">
        <div className="w-1/2 text-justify">
          <h2 className="text-4xl font-extrabold mb-6">
            KEYWORD,RESEARCH, <b />
            STRATEGY,SURVEY,& <br /> ANALYTICS
          </h2>
          <p className="w-80 lg:ml-20 py-8">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the...
          </p>
          <div className="flex my-12">
            <button className="hover:bg-black border border-black hover:text-white text-black px-4 py-2 rounded-full">
              GOOGLE
            </button>
            <button className="hover:bg-black border border-black hover:text-white text-black px-4 py-2 rounded-full">
              PINTEREST
            </button>
            <button className="hover:bg-black border border-black hover:text-white text-black px-4 py-2 rounded-full">
              INSTAGRAM
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 flex flex-col space-y-10">
          <div className="flex items-center ml-20">
            <div className="bg-white p-16 rounded-full border-4 border-[#121212]  text-center">
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
            <div className="bg-white  p-16 rounded-full border-[#121212] text-center border-4 ">
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

          <div className="flex items-center ml-20">
            <div className="bg-white  p-16 font-bold rounded-full border-[#121212] text-center border-4">
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
