import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Common/Search";
import CartDrawer from "./CartDrawer";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Redux/Slice/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const {cart}=useSelector((state)=>state.cart)
  const {user,guestId}=useSelector((state)=>state.auth);
   let [cartOpen,setCartOpen]=useState(false);
   useEffect(()=>{
  dispatch(fetchCart({
    userId: user?._id,
    guestId
  }))
},[dispatch, user, guestId])
   const navigate = useNavigate();
    function handleCart(){
      setCartOpen(!cartOpen);
    }
    let [menuDrawer,setMenuDrawer]=useState(false);
    
    function toggleMenu(){
      setMenuDrawer(!menuDrawer);
    }
    function toogleAdmin(){
      navigate("/admin");
    }
  return (
     <>
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-wide">
            Rabbi<span className="text-orange-600">t</span>
          </Link>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link to="/collection/men" className="hover:text-orange-600 transition">
            MEN
          </Link>
          <Link to="/collection/women" className="hover:text-orange-600 transition">
            WOMEN
          </Link>
          <Link to="/collection/topwear" className="hover:text-orange-600 transition">
            TOP WEAR
          </Link>
          <Link to="/collection/bottomwear" className="hover:text-orange-600 transition">
            BOTTOM WEAR
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-lg">
  {user?.role==="admin" &&
  <button
    className="bg-black text-white text-sm rounded-md px-3 py-1 hover:bg-gray-800 transition"
    onClick={toogleAdmin}
  >
    Admin
  </button>
}  
 <Link
  to={user ? "/profile" : "/login"}
  className="hover:text-orange-600 transition text-xl"
>
  <i className="fa-regular fa-user"></i>
</Link>
  <button onClick={handleCart} className="relative text-xl hover:text-orange-600 transition">
    <i className="fa-solid fa-bag-shopping"></i>
    <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-1 rounded-full">
    {cart?.products?.length || 0}
    </span>
  </button>
  <div className="hidden sm:block">
    <Search />
  </div>
  <button
    className="md:hidden p-1 text-2xl"
    onClick={toggleMenu}
  >
    <i className="fa-solid fa-bars"></i>
  </button>

</div>

      </div>
    </nav>
     <CartDrawer cartOpen={cartOpen} handleCart={handleCart}></CartDrawer>
     <MenuDrawer menuDrawer={menuDrawer} toggleMenu={toggleMenu}></MenuDrawer>
     
    </>
  );
};

export default Navbar;
