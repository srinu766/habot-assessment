// import React from "react";
// import { FiChevronDown } from "react-icons/fi";
// import logo from "../asserts/habot-logo.jpg";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md px-20 py-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-16 w-20 mr-3 " />
//       </div>
//       <div className="hidden md:flex items-center space-x-8 text-gray-600">
//         <a href="#" className="hover:text-gray-800 transition duration-150">
//           Find Suppliers
//         </a>

//         <div className="relative group">
//           <a
//             href="#"
//             className="flex items-center hover:text-gray-800 transition duration-150"
//           >
//             Find Service Tags <FiChevronDown className="ml-1" />
//           </a>
//         </div>

//         <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-2 hover:bg-green-50 transition duration-150">
//           Login / Sign Up
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
// import logo from "../asserts/habot-logo.jpg";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 md:px-20 py-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-12 w-16 mr-3" />
//       </div>

//       {/* Desktop Links */}
//       <div className="hidden md:flex items-center space-x-8 text-gray-600">
//         <a href="#" className="hover:text-gray-800 transition duration-150">
//           Find Suppliers
//         </a>
//         <div className="relative group">
//           <a
//             href="#"
//             className="flex items-center hover:text-gray-800 transition duration-150"
//           >
//             Find Service Tags <FiChevronDown className="ml-1" />
//           </a>
//         </div>
//         <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-2 hover:bg-green-50 transition duration-150">
//           Login / Sign Up
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
//           {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-gray-600 md:hidden">
//           <a href="#" className="hover:text-gray-800 transition duration-150">
//             Find Suppliers
//           </a>
//           <div className="flex items-center hover:text-gray-800 transition duration-150">
//             Find Service Tags <FiChevronDown className="ml-1" />
//           </div>
//           <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-2 hover:bg-green-50 transition duration-150">
//             Login / Sign Up
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../asserts/habot-logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-0 flex justify-between items-center">
      <div className="flex items-center">
        {/* <img src={logo} alt="Logo" className="h-12 w-16 mr-3" /> */}
        <img src={logo} alt="Logo" className="h-16 w-24 mr-3" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 text-gray-600">
        <a href="#" className="hover:text-gray-800 transition duration-150">
          Find Suppliers
        </a>
        <div className="relative group">
          <a
            href="#"
            className="flex items-center hover:text-gray-800 transition duration-150"
          >
            Find Service Tags <FiChevronDown className="ml-1" />
          </a>
        </div>
        <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-2 hover:bg-green-50 transition duration-150">
          Login / Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-md py-8 flex flex-col items-center space-y-6 text-gray-600 z-20">
          <button onClick={toggleMobileMenu} className="text-gray-600 absolute top-4 right-6 focus:outline-none">
            <FiX size={24} />
          </button>
          <a href="#" className="hover:text-gray-800 transition duration-150">
            Find Suppliers
          </a>
          <div className="flex items-center hover:text-gray-800 transition duration-150">
            Find Service Tags <FiChevronDown className="ml-1" />
          </div>
          <button className="bg-white border border-green-600 text-green-600 rounded-lg px-6 py-2 hover:bg-green-50 transition duration-150">
            Login / Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
