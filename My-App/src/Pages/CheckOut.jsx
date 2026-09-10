import React, { useEffect } from 'react'
import { useState } from 'react';
import Paypal from '../Components/Products/Paypal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckOut, finalizePayment } from '../Redux/Slice/checkoutSlice';
import axios from 'axios';
// const cart = {
//   products : [
//     {
//       name : "Stylish Jacket",
//       size:"M",
//       color:"White",
//       price:120,
//       image:"https://images.unsplash.com/photo-1762959266278-82ad88f3d827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R5bGlzaCUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//       name : "Casual Sneaker",
//       size:"42",
//       color:"White",
//       price:75,
//       image:"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     }
//   ],
//   totalPrice: 195,
// }
const CheckOut = () => {
  const dispatch = useDispatch();
  const {cart,loading,error}=useSelector((state)=>state.cart);
  const {loading: checkoutLoading, error: checkoutError}=useSelector((state)=>state.checkout);
  const {user}=useSelector((state)=>state.auth);
  const {checkOut}=useSelector((state)=>state.checkout)
  const navigate = useNavigate();
  useEffect(()=>{
    if(!cart || !cart.products ||cart.products.length===0){
      navigate("/");
    }
  },[navigate,cart]);
  const [shippingAddress,setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: ""
  })
  
  const [formDetails,setFormDetails]=useState({
    firstName:"",
    lastName:"",
    adress:"",
    city:"",
    postalCode:"",
    country:"",
    phone:""
  });
  const [checkOutId,setCheckOutId]=useState(null);
 function handleFormDetails(e) {
  const { name, value } = e.target;

  const updatedForm = {
    ...formDetails,
    [name]: value
  };

  setFormDetails(updatedForm);

  setShippingAddress({
    address: updatedForm.adress,
    city: updatedForm.city,
    postalCode: updatedForm.postalCode,
    country: updatedForm.country
  });
}
const handleSubmit = async(e)=>{
e.preventDefault();
if(!user) {
  alert("Please login to proceed with checkout");
  navigate("/login");
  return;
}
if(cart && cart.products.length !== 0){

   const res =await dispatch(createCheckOut({
    checkoutItems: cart.products,
    shippingAddress,
    paymentMethod: "PayPal",
    totalPrice: cart.totalPrice,
    quantity: cart.products.reduce((acc, item) => acc + item.quantity, 0)
  }));
  if(res.payload && res.payload._id){
    setCheckOutId(res.payload._id);
  }
}
}
const handlePaymentSuccess =async (details)=>{
  console.log("Payment Submit")
  try {
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkOutId}/pay`,
      {
        paymentStatus : "paid",
        paymentDetails : details
      },
      {
        headers : {
          Authorization : `Bearer ${(localStorage.getItem("userToken"))}`
        }
      }
    )
    if(response.status === 200){
       dispatch(finalizePayment({ id: checkOutId }))
       console.log("CheckOut",checkOut);
       navigate("/order-confirmation")
    }else{
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
// const handleFinalizeCheckout = async(checkOutId)=>{
//   try {
//     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkOutId}/finalize`,
//       {
//       },
//       {
//         headers : {
//           Authorization : `Bearer ${localStorage.getItem("userToken")}`
//         }
//       }
//     )
//     if(response.status===200){
//       navigate("/order-confirmation")
//     }else{
//       console.log("Finalize checkout failed:", response);
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
if(loading || checkoutLoading) return <p>Loading...</p>
if(error || checkoutError) return <p>Error : {error || checkoutError}</p>
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl mb-6">Contact Details</h3>
          <div className="mb-4">
          <label htmlFor="email" className="text-gray-700">Email</label>
          <input id="email" value={user ? user.email : "user@gmail.com"} disabled className="border bg-gray-100 rounded-md w-full p-2 cursor-not-allowed"></input>
          </div>
          <h3  className="text-xl mb-4 ">Delivery</h3>
          <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="text-gray-700">First name</label>
            <input id="firstName" className="border rounded-md w-full p-2" required='true' name="firstName" value={formDetails.firstName} onChange={handleFormDetails}></input>
          </div>
          <div>
            <label htmlFor="lastName" className="text-gray-700">Last name</label>
            <input id="lastName" className="border rounded-md w-full p-2" required='true' name="lastName" value={formDetails.lastName} onChange={handleFormDetails}></input>
          </div>
          </div>
          <div className="mb-4">
          <label htmlFor="adress" className="text-gray-700">Adress</label>
          <input id="adress" className="border rounded-md w-full p-2 " required='true' name="adress"value={formDetails.adress} onChange={handleFormDetails}></input>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="city" className="text-gray-700">City</label>
            <input id="city" className="border rounded-md w-full p-2" required='true' name="city" value={formDetails.city} onChange={handleFormDetails}></input>
          </div>
          <div >
            <label htmlFor="postalCode" className="text-gray-700">Postal Code</label>
            <input id="postalCode" className="border rounded-md w-full p-2" required='true' name="postalCode" value={formDetails.postalCode} onChange={handleFormDetails}></input>
          </div>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="text-gray-700">Country</label>
            <input id="country" className="border rounded-md w-full p-2" required='true' name="country" value={formDetails.country} onChange={handleFormDetails}></input>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="text-gray-700">Phone</label>
            <input id="phone" className="border rounded-md w-full p-2" required='true' name="phone" value={formDetails.phone} onChange={handleFormDetails} type="number"></input>
          </div>
          <div>
            {!checkOutId ? (
          <button className="text-white text-center bg-black w-full rounded-md p-2 hover:bg-blue-950" type="submit">Continue to Payment</button>
            ):(
              <div>
            <h3 className="text-lg mb-4">Pay with Paypal</h3>
            <Paypal 
            amount={cart.totalPrice}
            onSuccess={()=>handlePaymentSuccess(formDetails)}
            onError={(err)=> alert("Payment failed. Try again.")}
            ></Paypal>
            </div>
           ) }
          </div>
        </form>

      </div>
     <div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="text-lg font-medium mb-6 text-center">
    Order Summary
  </h3>

  {/* Products */}
  <div className="space-y-4 border-b pb-4 mb-4">
    {(Array.isArray(cart.products) ? cart.products : []).map((product, idx) => (
      <div
        key={idx}
        className="flex items-start justify-between gap-4"
      >
        {/* Left: Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-20 object-cover rounded"
        />

        {/* Middle: Details */}
        <div className="flex-1 text-sm">
          <p className="font-medium">{product.name}</p>
          <p className="text-gray-500">Size: {product.size}</p>
          <p className="text-gray-500">Color: {product.color}</p>
        </div>

        {/* Right: Price */}
        <p className="font-medium text-sm">
          ${product.price}
        </p>
      </div>
    ))}
  </div>

  {/* Price Summary */}
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span className="text-gray-600">Subtotal</span>
      <span>${cart.totalPrice?.toLocaleString()}</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600">Shipping</span>
      <span className="text-green-600">Free</span>
    </div>

    <div className="flex justify-between font-semibold text-base border-t pt-2">
      <span>Total</span>
      <span>${cart.totalPrice?.toLocaleString()}</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default CheckOut