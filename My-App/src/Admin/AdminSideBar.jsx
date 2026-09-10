import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from '../Redux/Slice/authSlice';
const AdminSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user}=useSelector((state)=>state.auth);
  function handleLogout() {
    dispatch(logout());
    navigate("/")
  }
  return (
    <div className='p-6'>
      <div className='mb-6'>
        <NavLink to="/admin" className="text-2xl font-medium">Rabit</NavLink>
      </div>
      <h2 className='text-xl font-medium mb-6 text-center'>Admin Dashboard</h2>
      <nav className='flex flex-col space-y-5'>
        <NavLink to="/admin/users" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <i className="fa-solid fa-user mr-2"></i><span>Users</span>
        </NavLink>
        <NavLink to="/admin/products" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <i class="fa-brands fa-product-hunt mr-2"></i><span>Products</span>
        </NavLink>
        <NavLink to="/admin/orders" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <i class="fa-brands fa-first-order mr-2"></i><span>Orders</span>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <i class="fa-solid fa-shop mr-2"></i><span>Shop</span>
        </NavLink>
      </nav>
      <button className="w-full bg-red-600 text-white rounded-md flex items-center justify-center gap-2 mt-8 py-2 hover:bg-red-800" onClick={handleLogout}>
        <i className="fa-solid fa-right-from-bracket"></i>Logout</button>
    </div>
  )
}

export default AdminSideBar