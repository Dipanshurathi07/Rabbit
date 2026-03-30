import React from 'react'
import featuredImage from "../../assets/featured.webp"
const FeaturedCollection = () => {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-3xl">
   <div className="lg:w-1/2 p-8 text-center lg:text-left">
   <h2 className="font-semibold mb-3">Comfort and Style</h2>
   <h1 className="font-bold text-3xl mb-4">Apparel made for your <br></br>everyday life</h1>
   <p className="mb-4">Discover high-quality, comfortable clothing that effortlessly blends fashion and function. Designed to make you look and feel great every day.</p>
   <button className="text-white bg-black rounded-md px-3 py-2">Shop Now</button>
   </div>
   <div className="lg:w-1/2">
   <img src={featuredImage} alt="FeaturedImage" className="h-full w-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"></img>

   </div>
      </div>

    </section>
  )
}

export default FeaturedCollection