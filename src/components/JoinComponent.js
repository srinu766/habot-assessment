import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const JoinComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-10 md:p-20">
      {/* Left Section - Text and Button */}
      <div className="flex flex-col items-start md:w-1/2 space-y-6 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to dive into <span className="text-purple-700">HABOT?</span>
        </h2>
        <p className="text-gray-700 text-lg">
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="flex items-center bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700">
          Sign up Today!
          <FiArrowRight className="ml-2" />
        </button>
      </div>

      {/* Right Section - Location Buttons */}
      <div className="grid grid-cols-2 gap-4 md:w-1/2">
        <button className="border-2 border-orange-500 py-3 px-6 rounded-md text-gray-800 hover:bg-orange-100">
          Abu Dhabi
        </button>
        <button className="border-2 border-orange-500 py-3 px-6 rounded-md text-gray-800 hover:bg-orange-100">
          Dubai
        </button>
        <button className="border-2 border-orange-500 py-3 px-6 rounded-md text-gray-800 hover:bg-orange-100">
          Sharjah & Ajman
        </button>
        <button className="border-2 border-orange-500 py-3 px-6 rounded-md text-gray-800 hover:bg-orange-100">
          Fujairah
        </button>
        <button className="border-2 border-orange-500 py-3 px-6 rounded-md text-gray-800 hover:bg-orange-100">
          Ras Al Khaimah
        </button>
        <button className="border-2 border-orange-500 py-3 px-6 rounded-md text-gray-800 hover:bg-orange-100">
          Umm Al Quwain
        </button>
      </div>
    </div>
  );
};

export default JoinComponent;
