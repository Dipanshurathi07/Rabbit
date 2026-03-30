import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
  const [searchParam,setSearchParam]=useSearchParams();
  function handleSortChange(e){
    const sortBy = e.target.value;
    searchParam.set("sortBy",sortBy)
    setSearchParam(searchParam);
  }
  return (
    <div className="mb-4 flex items-center justify-end mr-4">
      <select className="p-2 border rounded-md" id="sort" value={searchParam.get("sortBy" || "")} onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>

      </select>

    </div>
  )
}

export default SortOptions