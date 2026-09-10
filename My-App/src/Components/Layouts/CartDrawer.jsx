import React from 'react'
import CartComponent from './CartComponent'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const CartDrawer = ({cartOpen,handleCart}) => {
  const {user}=useSelector((state)=>state.auth);
  const {cart,loading,error}=useSelector((state)=>state.cart);
  const navigate=useNavigate();
  function navigatePage(){
    handleCart();
    if(!user){
       navigate("/login?redirect=checkout");
    }else{
       navigate("/checkout");
    }
  }
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-all duration-300 flex flex-col z-50 ${cartOpen? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-end p-4">
        <button onClick={handleCart}>✕</button>
      </div>
      <div className="flex-grow overflow-y-auto">
      <h1 className="font-bold left-0 pl-5">Your Cart</h1>
     <CartComponent items={cart.products} loading={loading} error={error}></CartComponent>
      </div>
      <div className="bottom-0 px-4">
     <button onClick={navigatePage} className="w-full bg-black text-white py-2 px-4 text-center rounded-sm">
  Checkout
</button>

<p className="text-gray-500 text-sm p-2.5">
  Shipping, taxes, and discount codes calculated at checkout
</p>

      </div>
    </div>
  )
}

export default CartDrawer