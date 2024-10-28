import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import bgImg from "../asserts/bg.png"

const MainPage = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[95vh] mx-0"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-85"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-bold">Are You a Supplier?</h1>
        <p className="text-2xl md:text-4xl mt-2">Explore Matching Opportunities.</p>

        <div className="flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl">
          <div className="relative w-full md:w-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
              <FiSearch size={20} />
            </span>
            <input
              type="text"
              placeholder="Search your required service here"
              className="pl-10 pr-4 py-3 rounded-lg w-[400px] h-[56px] bg-white text-gray-800 outline-none"
            />
          </div>

          <div className="relative w-full md:w-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
              <FiMapPin size={20} />
            </span>
            <input
              type="text"
              placeholder="Search your desired location here"
              className="pl-10 pr-4 py-3 rounded-lg w-[400px] h-[56px] bg-white text-gray-800 outline-none"
            />
          </div>

          <button className="w-[117.94px] h-[56px] bg-green-600 text-white px-6 rounded-lg font-semibold hover:bg-green-700">
            Search
          </button>
        </div>

        <div className="mt-6 text-gray-200 text-sm md:text-base">
          <p>
            Are you a buyer?{" "}
            <button
              onClick={() => alert("Redirect to buyer requirement post page")}
              className="underline text-green-400 hover:text-green-300 cursor-pointer"
            >
              Click here if you are looking to post a requirement
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
