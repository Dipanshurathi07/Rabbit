import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const NewArrivals = () => {
  const scrollRef = useRef(null);
const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(true);

//   const newArrivals = [
//   {
//     _id: "1",
//     name: "Stylish Jacket",
//     price: 120,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?q=80&w=800&auto=format&fit=crop",
//         altText: "Stylish Jacket",
//       },
//     ],
//   },
//   {
//     _id: "2",
//     name: "Classic Denim Jacket",
//     price: 95,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=800&auto=format&fit=crop",
//         altText: "Denim Jacket",
//       },
//     ],
//   },
//   {
//     _id: "3",
//     name: "Casual White T-Shirt",
//     price: 30,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
//         altText: "White T-Shirt",
//       },
//     ],
//   },
//   {
//     _id: "4",
//     name: "Men's Sneakers",
//     price: 110,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
//         altText: "Sneakers",
//       },
//     ],
//   },
//   {
//     _id: "5",
//     name: "Women Summer Dress",
//     price: 85,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
//         altText: "Summer Dress",
//       },
//     ],
//   },
//   {
//     _id: "6",
//     name: "Leather Handbag",
//     price: 150,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
//         altText: "Leather Handbag",
//       },
//     ],
//   },
//   {
//     _id: "7",
//     name: "Formal Shirt",
//     price: 60,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop",
//         altText: "Formal Shirt",
//       },
//     ],
//   },
//   {
//     _id: "8",
//     name: "Hoodie Sweatshirt",
//     price: 75,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=800&auto=format&fit=crop",
//         altText: "Hoodie",
//       },
//     ],
//   },
//   {
//     _id: "9",
//     name: "Slim Fit Jeans",
//     price: 90,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
//         altText: "Slim Fit Jeans",
//       },
//     ],
//   },
//   {
//     _id: "10",
//     name: "Women Heels",
//     price: 105,
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
//         altText: "Women Heels",
//       },
//     ],
//   },
// ];
const [newArrivals,setNewArrivals] = useState([]);
useEffect(()=>{
  const fetchArrivals = async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`);
      setNewArrivals(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchArrivals();
},[]);
const scrollLeftBtn = () => {
  scrollRef.current.scrollBy({
    left: -400,
    behavior: "smooth",
  });
};

const scrollRightBtn = () => {
  scrollRef.current.scrollBy({
    left: 400,
    behavior: "smooth",
  });
};

const updateScrollButtons = () => {
  const container = scrollRef.current;
  if (!container) return;

  setCanScrollLeft(container.scrollLeft > 0);
  setCanScrollRight(
    container.scrollLeft + container.clientWidth < container.scrollWidth
  );
};

useEffect(() => {
  updateScrollButtons();
}, []);


  return (
   <section>
   <div className="container mx-auto text-center mb-12 relative px-4">
  <h2 className="text-2xl sm:text-3xl font-bold mb-3">
    Explore New Arrivals
  </h2>
  <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
    Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
  </p>
  <div className="flex absolute right-4 sm:right-0 -bottom-12 space-x-2 pr-1 ">
   <button
  onClick={scrollLeftBtn}
  disabled={!canScrollLeft}
  className={`border border-gray-700 rounded-sm px-3 py-2 
    ${ canScrollLeft  ? "hover:bg-gray-200 transition" : "bg-gray-400 cursor-not-allowed opacity-60" }`}>
  <i className="fa-solid fa-less-than"></i>
</button>
<button
  onClick={scrollRightBtn}
  disabled={!canScrollRight}
  className={`border border-gray-700 rounded-sm px-3 py-2
     ${ canScrollRight ? "hover:bg-gray-200 transition" : "bg-gray-400 cursor-not-allowed opacity-60"}`}>
  <i className="fa-solid fa-greater-than"></i>
</button>
  </div>
</div>
    <div ref={scrollRef}   onScroll={updateScrollButtons} className="container mx-auto overflow-x-scroll flex space-x-6 relative pt-4">
      {(Array.isArray(newArrivals) ? newArrivals : []).map((product)=>(
       <div key={product._id} className="min-w-full sm:min-w-[50%] lg:min-w-[30%] relative">
  <img
    src={product.images[0]?.url}
    alt={product.images[0]?.altText || product.name}
    className="w-full h-[500px] object-cover"
  />
  <Link to={`product/${product._id}`}>
  <div className="absolute bottom-0 w-full p-4  bg-black/60 backdrop-blur-md">
    <h2 className="text-white text-lg font-semibold">
      {product.name}
    </h2>
    <p className="text-white text-sm">
      ${product.price}
    </p>
  </div>
  </Link>
</div>

      ))}

    </div>
   </section>
  )
}

export default NewArrivals