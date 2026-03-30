import React from 'react'
import menCollection from "../../assets/mens-collection.webp"
import womenCollection from "../../assets/womens-collection.webp"
import { Link } from 'react-router-dom'
const GenderCollection = () => {
  return (
    <section className="py-12 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={menCollection}
        alt="Men Collection"
        className="w-full h-[350px] sm:h-[450px] lg:h-[600px]
                   object-cover transition-transform duration-500
                   group-hover:scale-105"
      />
      <div className="absolute bg-white opacity-80 left-6 bottom-6 px-6 py-4">
        <h1 className="text-black font-semibold">Men's Collection</h1>
        <Link to="#" className="underline">Shop Now</Link>
      </div>
    </div>

    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={womenCollection}
        alt="Women Collection"
        className="w-full h-[350px] sm:h-[450px] lg:h-[600px]
                   object-cover transition-transform duration-500
                   group-hover:scale-105"
      />
       <div className="absolute bg-white opacity-80 left-6 bottom-6 px-6 py-4">
        <h1 className="text-black font-semibold">Women's Collection</h1>
        <Link to="#" className="underline">Shop Now</Link>
      </div>
    </div>

  </div>
</section>

  )
}

export default GenderCollection