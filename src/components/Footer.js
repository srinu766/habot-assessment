import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../asserts/habot-logo.jpg";

const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "#123557" }}>
      {/* Top Horizontal Line */}
      <div className="border-t border-gray-600 w-full"></div>

      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-start justify-between py-6">
        {/* Logo and Company Info Section */}
        <div className="flex-grow mb-4 md:mb-0 flex items-start">
          <div className="flex flex-col items-start mr-4">
            <img src={logo} alt="Logo" className="h-10 w-24 mb-2" />
            <p className="text-sm">© R Singhania</p>
          </div>

          <div className="flex gap-10 text-left">
            {/* Company Section */}
            <div>
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="text-sm mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms Section */}
            <div>
              <h3 className="text-lg font-medium">Terms</h3>
              <ul className="text-sm mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Data privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Section */}
            <div>
              <h3 className="text-lg font-medium">Related</h3>
              <ul className="text-sm mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Find Buyer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Horizontal Line */}
      <div className="border-t border-gray-600 w-full"></div>
    </footer>
  );
};

export default Footer;
