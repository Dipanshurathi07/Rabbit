import React, { useState } from 'react'
import AdminSideBar from './AdminSideBar';
import { Outlet } from 'react-router';

const AdminLayout = () => {
  const [isSideBarOpen,setIsSideBarOpen]=useState(false);
  const [isClicked,setIsClicked]=useState(false);
  function toggleSidebar(){
    setIsSideBarOpen(!isSideBarOpen)
  }
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
      {/* mobileToggleButton */}
      <div className='md:hidden bg-gray-900 text-white z-20 py-4 px-2 flex flex-row'>
        <button className='mr-2'><i className="fa-solid fa-bars text-2xl" onClick={toggleSidebar}></i></button>
        <h1>Admin Dashboard</h1>
      </div>
      {isSideBarOpen && (
        <div className='fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden'>
        </div>
      )}
       {/* Overlay (outside click) */}
      {isSideBarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
        />
      )}
      {/* sidebar */}
      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`} name="sidebar">
        <AdminSideBar></AdminSideBar>
      </div>
      <div className='flex-grow p-6 overflow-auto'>
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default AdminLayout