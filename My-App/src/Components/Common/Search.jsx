import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const trimmedSearch = search.trim();
    if (!isOpen || !trimmedSearch) {
      setSuggestions([]);
      setSuggestionsLoading(false);
      return undefined;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setSuggestionsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products`,
          {
            params: { search: trimmedSearch, limit: 6 },
            signal: controller.signal
          }
        );
        setSuggestions(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        if (error.name !== "CanceledError") {
          setSuggestions([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setSuggestionsLoading(false);
        }
      }
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [isOpen, search]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  function toggleSearchIcon() {
    setIsOpen(!isOpen);
    setSearch("");
    setSuggestions([]);
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      const params = new URLSearchParams({ search: trimmedSearch });
      navigate(`/collection/all?${params.toString()}`);
      setIsOpen(false);
    }
  }

  return (
    <div
      className={`flex items-center justify-center transition-all duration-300
      ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24" : ""}`}
    >
      {isOpen ? (
          <form ref={searchRef} onSubmit={handleSearch} className="flex items-center justify-center w-full">
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

            {(suggestionsLoading || suggestions.length > 0 || (search.trim() && !suggestionsLoading)) && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border bg-white text-left shadow-lg">
                {suggestionsLoading && (
                  <p className="px-4 py-3 text-sm text-gray-500">Searching...</p>
                )}
                {!suggestionsLoading && suggestions.length === 0 && search.trim() && (
                  <p className="px-4 py-3 text-sm text-gray-500">No products found</p>
                )}
                {!suggestionsLoading && suggestions.map((product) => (
                  <button
                    key={product._id}
                    type="button"
                    onClick={() => {
                      navigate(`/product/${product._id}`);
                      setIsOpen(false);
                      setSearch("");
                      setSuggestions([]);
                    }}
                    className="flex w-full items-center gap-3 border-b px-4 py-2 text-left last:border-b-0 hover:bg-gray-50"
                  >
                    <img
                      src={product.images?.[0]?.url}
                      alt={product.images?.[0]?.altText || product.name}
                      className="h-12 w-10 rounded object-cover"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{product.name}</span>
                      <span className="block text-xs text-gray-500">${product.discountPrice || product.price}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}

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