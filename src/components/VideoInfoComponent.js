import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const VideoInfoComponent = () => {
  return (
    <div
      className="mx-4 md:mx-20 mt-10 flex flex-col md:flex-row items-center justify-center p-4 md:p-16 rounded-lg"
      style={{ backgroundColor: "#072F57" }}
    >
      <div className="mb-6 md:mb-0 md:mr-8 w-full md:w-1/2">
        <div className="relative">
          <iframe
            width="100%"
            // height="auto"
            // width="660"
            height="315"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=GEdKV6KuSu4CUUsA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="text-white w-full md:w-1/2">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span className="text-orange-500 border-b-2 border-orange-500 pb-1">
            Buyer
          </span>
          <span>Supplier</span>
        </div>
        <ul className="space-y-4 text-sm md:text-base">
          <li className="flex items-start">
            <FiCheckCircle className="text-green-400 mr-2 mt-1" />
            <span>Post your requirements.</span>
          </li>
          <li className="flex items-start">
            <FiCheckCircle className="text-green-400 mr-2 mt-1" />
            <span>Sit back for multiple suppliers to contact you.</span>
          </li>
          <li className="flex items-start">
            <FiCheckCircle className="text-green-400 mr-2 mt-1" />
            <span>
              Choose among the suppliers based on ratings and reviews.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoInfoComponent;
