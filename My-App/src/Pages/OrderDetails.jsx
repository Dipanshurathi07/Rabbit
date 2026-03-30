import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkSpecificOrder } from '../Redux/Slice/orderSlice';
const OrderDetails = () => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {orderDetails}=useSelector((state)=>state.orders)
   useEffect(() => {
      dispatch(checkSpecificOrder(id));
    }, [dispatch,id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className='text-2xl md:text-3xl font-bld mb-6'>Order Details</h2>
      {!orderDetails ? (
        <p>No Order Details</p> ) : 
        (
          <div className='p-4 sm:p-6 rounded-lg border'>
          <div className='flex flex-col md:flex-row justify-between mb-8'>
            <div>
              <h3 className='text-lg md:text-xl font-semibold'>
                Order ID: #{orderDetails._id}
              </h3>
              <p className='text-gray-600'>{new Date(orderDetails.createdAt).toLocaleString()}</p>
            </div>
            <div className='flex flex-col items-start sm:items-end mt-4 sm:mt-0 gap-2'>
             <span className={`rounded-2xl  px-2 py-1 ${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {orderDetails.isPaid ? "Approved" : "Pending"}
             </span>
              <span className={`rounded-2xl  px-2 py-1 ${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
              {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
             </span>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8'>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Payment Info</h4>
              <p className='text-gray-700'>Payment Method: {orderDetails.paymentMethod}</p>
              <p className='text-gray-700'>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Payment Info</h4>
              <p className='text-gray-700'>Shipping Method: {orderDetails.shippingMethod}</p>
              <p className='text-gray-700'>Adress: {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}</p>
            </div>
          </div>
           <h4 className='text-lg font-semibold mb-2'>Products</h4>
           <div className="border rounded-lg shadow-lg overflow-x-auto bg-white">
  <table className="min-w-[640px] w-full border-collapse">
    <thead className="bg-gray-100 border-b">
      <tr>
        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 whitespace-nowrap">
          Name
        </th>
        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 whitespace-nowrap">
          Unit Price
        </th>
        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 whitespace-nowrap">
          Quantity
        </th>
        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 whitespace-nowrap">
          Total
        </th>
      </tr>
    </thead>

    <tbody>
      { orderDetails?.orderItems?.length > 0 ? (
        orderDetails.orderItems.map((item, idx) => (
          <tr key={idx} className="border-b">
            {/* Name */}
            <td className="px-3 py-2 text-sm">
              <div className="flex items-start gap-3 min-w-[220px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover"
                />
                <Link
                  to={`/product/${item.productId}`}
                  className="text-blue-800 hover:underline py-4"
                >
                  {item.name}
                </Link>
              </div>
            </td>

            {/* Unit Price */}
            <td className="px-3 py-2 text-sm whitespace-nowrap">
              ${item.price}
            </td>

            {/* Quantity */}
            <td className="px-3 py-2 text-sm text-start whitespace-nowrap">
              {item.quantity}
            </td>

            {/* Total */}
            <td className="px-3 py-2 text-sm whitespace-nowrap">
              ${item.quantity * item.price}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="text-center py-6 text-gray-500">
            Loading orders...
          </td>
        </tr>
      )}
    </tbody>

    <tbody>
      <tr>
        <td colSpan="4" className="py-6 px-4">
          <Link
            to="/my-order"
            className="text-blue-800 hover:underline"
          >
            ← Back to My Orders
          </Link>
        </td>
      </tr>
    </tbody>
  </table>
</div>

           
          </div>
        )
        }
    </div>
  )
}

export default OrderDetails