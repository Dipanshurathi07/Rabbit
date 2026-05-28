import React from 'react'
import { Link } from "react-router-dom";

const UmayAlsoLike = ({similarProduct, loading, error}) => {
  const safeSimilar = Array.isArray(similarProduct) ? similarProduct : [];
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (safeSimilar.length === 0) return <p className="text-center">No similar products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      {safeSimilar.map((product,index)=>(
        <Link key={index} to={`/product/${product._id}`}>
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img src={product.images[0]?.url} alt={product.images[0]?.altText} className="w-full h-full object-cover rounded-lg"></img>
            </div>
            <div>
              <h1 className="">{product.name}</h1>
              <p className="text-gray-600">$ {product.price}</p>
            </div>

          </div>
        </Link>
      ))}

    </div>
  )
}

export default UmayAlsoLike