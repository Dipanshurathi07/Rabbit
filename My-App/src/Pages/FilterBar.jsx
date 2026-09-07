import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';
const FilterBar = () => {
  const [searchParam,setSearchParam]=useSearchParams();
  // to get url string
  const [filters,setFilters]=useState(
    {
      category:"",
      gender:"",
      color:"",
      size:[],
      material:[],
      brand:[],
      minPrice:0,
      maxPrice:100
    }
  );
 const categories = ["Top Wear", "Bottom Wear"];

 const genders = [
  "Men",
  "Women"
];

 const colors = [
  "Black",
  "White",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Pink",
  "Brown",
  "Gray"
];

 const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL"
];

 const materials = [
  "Cotton",
  "Linen",
  "Silk",
  "Denim",
  "Wool",
  "Polyester"
];

 const brands = [
  "Urban Threads",
  "Modern Fit",
  "Street Style",
  "Beach Breeze",
  "Urban Chic",
  "Polo Classics",
  "Street Vibes",
  "Heritage Wear",
  "Winter Basics",
  "Everyday Comfort",
  "ActiveWear",
  "UrbanStyle",
  "ChillZone",
  "DenimCo",
  "CasualLook",
  "SportX",
  "ExecutiveStyle",
  "StreetWear",
  "LoungeWear",
  "ElegantStyle"
];
function handleFilter(e){
  const {name,value,type,checked} = e.target
 const newFilter = {...filters};
 if(type==="checkbox"){
  if(checked){
    newFilter[name]=[...(newFilter[name]),value];
  }else {
    newFilter[name]=newFilter[name].filter((item)=> item!==value)
  }
 }else{
  newFilter[name]=value;
 }
 setFilters(newFilter);
 updateURL(newFilter);
}

function updateURL(newFilters) {
  const params = new URLSearchParams();

  Object.keys(newFilters).forEach((key) => {
    if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
      params.append(key, newFilters[key].join(","));
    } 
    else if (newFilters[key] !== undefined && newFilters[key] !== null && (typeof newFilters[key] !== 'string' || newFilters[key] !== '')) {
      params.append(key, newFilters[key]);
    }
  });

  setSearchParam(params);
}
 
function handlePriceChange(e) {
  const value = Number(e.target.value);
  setPriceRange([0, value]);

  setFilters((prev) => ({
    ...prev,
    maxPrice: value,
  }));
}
useEffect(()=>{
  const params = Object.fromEntries(searchParam);
  setFilters({
    category : params.category || "",
    gender : params.gender || "",
    color : params.color || "",
    size :params.size ? params.size.split(",") : [],
    material :params.material ? params.material.split(",") : [],
    brand :params.brand? params.brand.split(",") : [],
    minPrice : params.minPrice || 0,
    maxPrice : params.maxPrice || 100,
  });
setPriceRange([0,params.maxPrice || 100]);
},[searchParam])
  const [priceRange,setPriceRange]=useState([0,100]);

 return (
  <div className="p-5 border-r text-sm bg-white">

    <h2 className="text-xl font-semibold mb-6">Filter</h2>

    {/* CATEGORY */}
    <div className="mb-6">
      <p className="font-medium mb-2">Clothing Type</p>
      {categories.map((c) => (
        <label key={c} className="flex items-center mb-1">
          <input type="radio" name="category" value={c} onChange={handleFilter} checked={filters.category===c}/>
          <span className="ml-2 capitalize break-words">{c}</span>
        </label>
      ))}
    </div>

    {/* GENDER */}
    <div className="mb-6">
      <p className="font-medium mb-2">Gender</p>
      {genders.map((g) => (
        <label key={g} className="flex items-center mb-1">
          <input type="radio" name="gender" value={g} onChange={handleFilter} checked={filters.gender===g}/>
          <span className="ml-2 capitalize break-words">{g}</span>
        </label>
      ))}
    </div>

    {/* COLOR */}
    <div className="mb-6">
  <p className="font-medium mb-2">Color</p>
  <div className="grid grid-cols-4 gap-3 max-w-full">
    {colors.map((c) => (
      <button
        key={c}
        value={c}
        name="color"
        type="button"
        className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer transition 
          hover:scale-110
          ${filters.color === c ? "ring-2 ring-blue-500" : ""}`}
        style={{ backgroundColor: c.toLowerCase() }}
        onClick={handleFilter}
      />
    ))}
  </div>
</div>

    {/* SIZE */}
    <div className="mb-6">
      <p className="font-medium mb-2">Size</p>
      <div className="grid grid-cols-3 gap-2 w-full">
        {sizes.map((s) => (
          <label key={s} className="flex items-center gap-1 text-xs">
            <input type="checkbox" name="size" value={s} onChange={handleFilter} checked={filters.size.includes(s)}/>
            <span>{s}</span>
          </label>
        ))}
      </div>
    </div>

    {/* MATERIAL */}
    <div className="mb-6">
      <p className="font-medium mb-2">Material</p>
      {materials.map((m) => (
        <label key={m} className="flex items-center gap-2 mb-1">
          <input type="checkbox" name="material" value={m} onChange={handleFilter} checked={filters.material.includes(m)}/>
          <span className="capitalize break-words">{m}</span>
        </label>
      ))}
    </div>

    {/* BRAND */}
    <div className="mb-6">
      <p className="font-medium mb-2">Brand</p>
      {brands.map((b) => (
        <label key={b} className="flex items-center gap-2 mb-1">
          <input type="checkbox" name="brand" value={b} onChange={handleFilter} checked={filters.brand.includes(b)}/>
          <span className="capitalize break-words">{b}</span>
        </label>
      ))}
    </div>

    {/* PRICE RANGE */}
    <div className="mb-6">
      <p className="font-medium mb-2">Price Range</p>
      <input
        type="range"
        min="0"
        max="100"
        value={priceRange[1]}
        onChange={handlePriceChange}
        className="w-full max-w-full"
      />
      <div className="flex justify-between text-xs mt-1">
        <span>$0</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  </div>
);
};
export default FilterBar