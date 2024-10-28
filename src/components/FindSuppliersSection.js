import React from 'react';

const FindSuppliersSection = () => {
  return (
    <section className="my-10 md:my-20 flex flex-col md:flex-row items-center justify-between bg-blue-50 py-10 px-4 md:py-16 md:px-20 space-y-4 md:space-y-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Let Suppliers <span className="border-b-4 border-orange-500">Find You</span>
        </h2>
      </div>

      <button className="bg-orange-500 text-white font-medium py-2 px-6 rounded-md hover:bg-orange-600 text-sm md:text-base">
        Get Verified
      </button>
    </section>
  );
};

export default FindSuppliersSection;
