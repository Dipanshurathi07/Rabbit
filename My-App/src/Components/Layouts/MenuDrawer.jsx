import React from "react";
import { Link } from "react-router-dom";
const MenuDrawer = ({ menuDrawer, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/4 h-full
      bg-white shadow-lg transform transition-transform duration-300
      flex flex-col z-50
      ${menuDrawer ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-xl">
          ✕
        </button>
      </div>
      <div className="flex flex-col gap-4 p-3 pl-6">
<h1 className="font-bold text-lg">Menu</h1>
 <Link to="/collection/men" className="hover:text-orange-600 transition">
            MEN
          </Link>
          <Link to="/collection/women" className="hover:text-orange-600 transition">
            WOMEN
          </Link>
          <Link to="/collection/topwear" className="hover:text-orange-600 transition">
            TOP WEAR
          </Link>
          <Link to="/collection/bottomwear" className="hover:text-orange-600 transition">
            BOTTOM WEAR
          </Link>
      </div>
    </div>
  );
};

export default MenuDrawer;
