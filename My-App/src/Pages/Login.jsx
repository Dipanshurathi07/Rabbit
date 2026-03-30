import React, { useState } from 'react'
import LoginImage from "../assets/login.webp"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../Redux/Slice/authSlice"
import { mergeCart } from '../Redux/Slice/cartSlice';
import { useEffect } from 'react';
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const location = useLocation();
  const {cart}=useSelector((state)=>state.cart);
  const {user,guestId,loading}=useSelector((state)=>state.auth)
  const userId = user ? user._id : "";
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");
  useEffect(()=>{
  if(user && location.pathname === "/login"){
    
    if(cart?.products?.length > 0 && guestId){
      dispatch(mergeCart({ userId, guestId }));
    }

    navigate(isCheckoutRedirect ? "/checkout" : "/");
  }
},[user,guestId,dispatch,isCheckoutRedirect,cart,navigate,userId,location.pathname])
  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }
  function handleSubmit(e){
   e.preventDefault();
   dispatch(loginUser({email,password}))
    setEmail("");
    setPassword("");
  }
  return (
    <div className="container mx-auto relative h-[700px]">
      <img src={LoginImage} alt="LoginImage" className="w-full h-full object-cover"/>

      <div className="absolute inset-4 flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-2xl opacity-90">
          
          <h2 className="text-xl font-semibold text-center mb-2">Rabbit</h2>
          <h1 className="text-xl font-bold text-center mb-3">
            Hey there!👋
          </h1>
          <p className="text-center mb-3">Enter your username and password to Login</p>
          <form className="space-y-3" onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="email" className=" text-sm font-semibold mb-1">
                Email
              </label>
              <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmail} className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"/>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold mb-1">
                Password
              </label>
              <input type="password" id="password" placeholder="Password" value={password} onChange={handlePassword} className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"/>
            </div>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition ">
              {loading ? "loading..." : "SignUp"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to={`/register?redirect=${encodeURIComponent(redirect)}`} className="underline  text-blue-600 hover:text-blue-800 transition">
                Register
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
