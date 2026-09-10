import React, { useEffect, useState } from 'react'
import LoginImage from "../assets/login.webp"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { registerUser } from "../Redux/Slice/authSlice";
import { useDispatch ,useSelector } from 'react-redux';
import { mergeCart } from '../Redux/Slice/cartSlice';

const Register = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {user,guestId,loading,error}=useSelector((state)=>state.auth);
  const userId = user ? user._id : "";
  const {cart}=useSelector((state)=>state.cart);
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");
   useEffect(()=>{
     if(user && location.pathname === "/register"){
       
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
  function handleName(e){
    setName(e.target.value);
  }
  async function handleSubmit(e){
    e.preventDefault();
    const result = await dispatch(registerUser({name,email,password}));

    if (registerUser.fulfilled.match(result)) {
      setName("");
      setEmail("");
      setPassword("");
    }
  }
  return (
    <div className="container mx-auto relative h-[700px]">
      <img src={LoginImage} alt="LoginImage" className="w-full h-full object-cover"/>

      <div className="absolute inset-4 flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-2xl opacity-90">
          
          <h2 className="text-2xl font-semibold text-center mb-2">
            Rabbit
          </h2>
          <h1 className="text-xl font-bold text-center mb-3">
            Hey there!👋
          </h1>
          <p className="text-center mb-2">Create new Account</p>
          {error && <p className="rounded bg-red-100 px-3 py-2 text-sm text-red-700" role="alert">{error}</p>}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              
              <label htmlFor="name" className=" text-sm font-semibold mb-1">
               Name
              </label>
              <input type="text" id="name" placeholder="Name" value={name} onChange={handleName} required minLength={2} autoComplete="name" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"/>
            </div>
            <div>
              <label htmlFor="email" className=" text-sm font-semibold mb-1">
                Email
              </label>
              <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmail} required autoComplete="email" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"/>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold mb-1">
                Password
              </label>
              <input type="password" id="password" placeholder="Password" value={password} onChange={handlePassword} required minLength={6} autoComplete="new-password" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"/>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:cursor-not-allowed disabled:opacity-60">
             {loading ? "loading...":"Create new Account"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={`/login?redirect=${encodeURIComponent(redirect)}`} className="underline  text-green-600 hover:text-green-800 transition">
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
