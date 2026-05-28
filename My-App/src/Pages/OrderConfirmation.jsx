import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../Redux/Slice/cartSlice'
import { useNavigate } from 'react-router-dom';
// const checkout = {
//   _id:"123123",
//   createdAt: new Date(),
//   checkoutItems : [
//     {
//       product:"1",
//       name:"Jacket",
//       color:"Black",
//       size:"M",
//       price:76,
//       quantity:1,
//       image:"https://images.unsplash.com/photo-1727524366429-27de8607d5f6?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//       product:"2",
//       name:"Kurti",
//       color:"Green",
//       size:"M",
//       price:56,
//       quantity:1,
//       image:"https://images.unsplash.com/photo-1597983073750-16f5ded1321f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a3VydGl8ZW58MHx8MHx8fDA%3D"
//     }
//   ],
//   shippingAdress:{
//     adress:"123 Fastion Street",
//     city:"New York",
//     country:"USA"
//   }
// }
const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {checkOut}=useSelector((state)=>state.checkout);
  console.log("Checkout",checkOut);
  useEffect(() => {
    if (checkOut) {
      dispatch(clearCart());
    }
  }, [checkOut, dispatch, navigate]);
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className="font-bold text-3xl text-center text-emerald-700 mb-6">Thank You for Your Order!</h1>
     {checkOut && (
        <div className="p-4 rounded-md border">
         <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-8">

            <div>
              <h2 className="font-semibold">Order ID: {checkOut._id} </h2>
              <p className="text-sm text-gray-600">Order date: {checkOut.createdAt}</p>
            </div>
            <div className="text-start">
              <p className="text-emerald-700 text-sm font-semibold">Estimated Delivery:{" "} {checkOut.createdAt} </p>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            {(Array.isArray(checkOut.orderItems) ? checkOut.orderItems : []).map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between "
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">Size: {item.size} </p>
                    <p className="text-gray-500">Color: {item.color}</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="font-medium">${item.price}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h2 className="font-semibold mb-2">Payment</h2>
            <p className="text-gray-500">Paypal</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Delivery</h2>
            <p className="text-gray-500">{checkOut.shippingAddress.address}</p>
            <p className="text-gray-500">{checkOut.shippingAddress.city},{checkOut.shippingAddress.country}</p>
          </div>

         </div>
          </div>
           )}

    </div>
  )
}

export default OrderConfirmation