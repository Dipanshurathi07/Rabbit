import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t py-12 ">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 mb-8">
    <div className="px-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Newsletter
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        Be the first to hear about new products, exclusive events,
        and online offers.
      </p>

      <h4 className="text-sm font-medium text-gray-800 mb-4">
        Sign up and get 10% off your first order.
      </h4>

      <div className="flex w-full flex-col sm:flex-row ">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full sm:flex-grow px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
  />

  <button
    className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-900 transition"
  >
    Subscribe
  </button>
</div>

    </div>
    <div className="px-6">
<h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
<p className="text-sm text-gray-500 mb-3">Men's Top Wear </p>
<p className="text-sm text-gray-500 mb-3">Women's Top Wear</p>
<p className="text-sm text-gray-500 mb-3">Men's Bottom Wear</p>
  <p className="text-sm text-gray-500 mb-3">Women's Bottom Wear</p>
    </div>
    <div className="px-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
      <p className="text-sm text-gray-500 mb-3">Contact Us </p>
<p className="text-sm text-gray-500 mb-3">About Us</p>
<p className="text-sm text-gray-500 mb-3">FAQs</p>
  <p className="text-sm text-gray-500 mb-3">Features</p>
    </div>
    <div className="px-6">
     <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3> 
     <div className="w-1/3 flex flex-row gap-2 mb-5">
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
     <p className="text-sm text-gray-500 mb-1">Call Us</p>
     <p className="font-bold text-gray-800 mb-3"><i class="fa-solid fa-phone"></i> 0123-456-789</p>
    </div>

  </div>
  <div className="container mx-auto text-center border-t py-6">
  <p className="text-sm text-gray-500">©2026, CompileTab. All Rights Reserved.</p>
  </div>
</footer>

  )
}

export default Footer