import React from 'react'

const FeatureSection = () => {
  return (
    <div>
      <section className="border-t border-gray-200 py-12 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div className="flex flex-col items-center">
        <i className="fa-solid fa-truck text-2xl text-gray-700 mb-3"></i>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
          Free International Shipping
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          On all orders over $100.00
        </p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fa-solid fa-rotate-left text-2xl text-gray-700 mb-3"></i>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
          45 Days Return
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Money back guarantee
        </p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fa-solid fa-lock text-2xl text-gray-700 mb-3"></i>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
          Secure Checkout
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          100% secured checkout process
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default FeatureSection