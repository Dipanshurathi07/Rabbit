import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductByFilter } from "../../Redux/Slice/productSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toggleSearchIcon() {
    setIsOpen(!isOpen);
    setSearch("");
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
      dispatch(fetchProductByFilter({ search })).then(() => {
       navigate(`/collection/all?search=${search}`);
        setIsOpen(false);
      });
    }
  }

  return (
    <div
      className={`flex items-center justify-center transition-all duration-300
      ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24" : ""}`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="flex items-center justify-center w-full">
          <div className="relative w-11/12 sm:w-2/3 md:w-1/2">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleChange}
              className="w-full bg-gray-100 pl-12 pr-12 py-3 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={toggleSearchIcon}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            >
              ✕
            </button>

          </div>
        </form>
      ) : (
        <button
          onClick={toggleSearchIcon}
          className="text-lg hover:text-orange-600 transition"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      )}
    </div>
  );
};

export default Search;