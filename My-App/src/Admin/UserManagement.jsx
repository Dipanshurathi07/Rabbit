import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, fetchAllUsers, updateUser } from '../Redux/Slice/adminSlice';
const UserManagement = () => {
  const dispatch = useDispatch();
  const {users}=useSelector((state)=>state.admin);
  useEffect(()=>{
    dispatch(fetchAllUsers())
  },[dispatch]);
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    role:"customer"
  })
  function handleForm(e) {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
}
function handleSubmit(e){
  e.preventDefault();
  dispatch(addUser(formData));
  setFormData({
    name:"",
    email:"",
    password:"",
    role:"customer"
  });
}
function handleRoleChange(id, value){
  dispatch(updateUser({
    id,
    updatedData: { role: value } 
  }))
}
function handleDelete(id){
  const confirmDelete = window.confirm("Do you want to delete");
  if(!confirmDelete) return;
  dispatch(deleteUser(id));
}

  return (
    <div className='max-w-7xl mx-auto p-6 min-h-screen'>
      <h1 className='font-semibold text-3xl mb-6'>User Management</h1>
      <div className='px-4 md:px-8 '>
        <h2 className='font-semibold  mb-4'>Add New User</h2>
      <form onSubmit={handleSubmit}>
  <div className="flex flex-col gap-2 mb-4">
    <label htmlFor="name" className=" font-medium text-gray-700">
      Name
    </label>
    <input id="name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleForm} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-800 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
    />
  </div>
  <div className="flex flex-col gap-2 mb-4">
    <label htmlFor="email" className=" font-medium text-gray-700">
      Email
    </label>
    <input id="email" name="email" type="text" placeholder="Enter your email" value={formData.email} onChange={handleForm} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-800 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
    />
  </div>
  <div className="flex flex-col gap-2 mb-4">
    <label htmlFor="password" className=" font-medium text-gray-700">
      Password
    </label>
    <input id="password" name="password" type="password" placeholder="Enter your Password" value={formData.password} onChange={handleForm} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-800 focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
    />
  </div>
  <div className="flex flex-col gap-2 mb-4">
  <label htmlFor="role" className="font-medium text-gray-700">
    Role
  </label>

  <select
    id="role"
    name="role"
    value={formData.role}
    onChange={handleForm}
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm"
  >
    <option value="admin">Admin</option>
    <option value="customer">Customer</option>
  </select>
</div>
<button tupe="submit" className='text-center py-2 rounded-md text-white bg-green-600 hover:bg-green-800 px-4'>Add User</button>

</form>
</div>
<div className='mt-6 overflow-x-auto rounded-md w-full border shadow-lg'>
<table className="w-full border-collapse inset-0">
  <thead className='bg-gray-300 py-4'>
    <tr>
      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">name</th>
       <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">email</th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Role</th>
         <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((item)=>(
    <tr key={item._id}>
      <td className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600">{item.name}</td> 
       <td className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600">{item.email}</td> 
       <td className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600">
        <select id="role" 
        value={item.role}
        onChange={(e)=>handleRoleChange(item._id,e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:ring-2 ring-blue-500">
         <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
       </td>
       <td >
        <button className='bg-red-500 hover:bg-red-700 text-white rounded-md px-4 py-1' onClick={()=>handleDelete(item._id)}>Delete</button>
       </td>
    </tr>
    ))}
  </tbody>
  
</table>
</div>

    </div>
  )
}

export default UserManagement