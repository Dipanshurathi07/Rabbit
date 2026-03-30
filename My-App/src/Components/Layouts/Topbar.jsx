import React from "react";

const Topbar = () => {
  return (
    <div className="bg-orange-700 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">

        {/* Left – Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" className="hover:text-orange-200 transition">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com" className="hover:text-orange-200 transition">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://algolia.com" className="hover:text-orange-200 transition">
            <i className="fa-brands fa-algolia"></i>
          </a>
        </div>

        {/* Center – Shipping Text (hidden on small screens) */}
        <div className="hidden md:block text-center">
          <p>We ship worldwide — Fast and reliable shipping!</p>
        </div>

        {/* Right – Phone Number */}
        <div className="hidden sm:block">
          <p className="font-medium">+1 (234) 567-890</p>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
