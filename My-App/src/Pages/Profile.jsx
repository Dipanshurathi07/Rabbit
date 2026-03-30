import React, { useEffect } from 'react'
import MyOrder from './MyOrder'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Redux/Slice/cartSlice';
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {orders}=useSelector((state)=>state.orders);
  const {user}=useSelector((state)=>state.auth);
  console.log("user",user)
  useEffect(()=>{
    if(!user){
      navigate("/login");
    }
  },[user,navigate])
  function handleLogout(){
    if(user){
      dispatch(logout())
      dispatch(clearCart())
      navigate("/login");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 p-4 md:p-6">
        <div className="w-full lg:w-1/4">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center text-3xl font-bold">
              JJ
            </div>
            <h1 className="text-xl font-bold mb-1">{user.name}</h1>
            <p className="text-gray-500 mb-4">
              {user.email}
            </p>
            <button onClick={handleLogout} className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <MyOrder orders={orders}></MyOrder>
        </div>

      </div>
    </div>
  )
}

export default Profile
