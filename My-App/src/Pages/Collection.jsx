import React, { useEffect, useRef, useState } from 'react'
import FilterBar from './FilterBar'
import SortOptions from '../Components/Products/SortOptions';
import TopWearForWomens from '../Components/Products/TopWearForWomens';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByFilter } from '../Redux/Slice/productSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const Collection = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  console.log(queryParams);
  const [buttonClicked, setButtonClicked] = useState(false);
  const sidebarRef = useRef(null);
  useEffect(() => {
    if (collection) {
      dispatch(fetchProductByFilter({
        collection,
        ...queryParams
      }));
    }
  }, [dispatch, collection, JSON.stringify(queryParams)]);

  function toggleBtn() {
    setButtonClicked(!buttonClicked);
  }

  function handleclickedOutside(e) {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setButtonClicked(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleclickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleclickedOutside);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <button 
        className="lg:hidden flex justify-center items-center p-2" 
        onClick={toggleBtn}
      >
        <i className="fa-solid fa-filter mr-2"></i>Filter
      </button>
      <div
        ref={sidebarRef}
        className={`
          ${buttonClicked ? "translate-x-0" : "-translate-x-full"} 
          fixed inset-y-0 left-0 z-50 w-64 bg-white overflow-y-auto 
          lg:static lg:translate-x-0`}
      >
        <FilterBar />
      </div>
      <div className="flex-grow p-4">
        <h1 className="uppercase mb-4 text-2xl font-semibold">
          All Collections
        </h1>

        <SortOptions />
        <TopWearForWomens 
          topWear={products} 
          loading={loading} 
          error={error} 
        />
      </div>

    </div>
  )
}

export default Collection;