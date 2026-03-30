import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdminOrders } from '../Redux/Slice/adminOrderSlice';
import { fetchProducts } from '../Redux/Slice/adminProductSlice';

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const {order}=useSelector((state)=>state.adminOrders)
  const {products}=useSelector((state)=>state.adminProduct)
  useEffect(()=>{
    dispatch(fetchAdminOrders());
    dispatch(fetchProducts());
  },[dispatch])
  const totalSales = order.reduce((acc, curr) => acc + curr.totalPrice, 0);
  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h1 className='font-semibold text-3xl mb-5'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5'>
        <div className="rounded-md border shadow py-4 px-5">
          <h2 className='font-semibold text-xl'>Revenue</h2>
          <h2 className='text-xl'>${totalSales}</h2>
        </div>
        <div className="rounded-md border shadow py-4 px-5">
          <h2 className='font-semibold text-xl'>Total Orders</h2>
          <h2 className='text-xl'>{order.length}</h2>
          <p className='text-blue-500'>Manage Orders</p>
        </div>
        <div className="rounded-md border shadow py-4 px-5">
          <h2 className='font-semibold text-xl'>Total Products</h2>
          <h2 className='text-xl'>{products.length}</h2>
           <p className='text-blue-500'>Manage Products</p>
        </div>
      </div>
      <h1 className='font-semibold text-2xl mb-5'>Recent Orders</h1>
       <table className="w-full border-collapse">
    <thead className="bg-gray-100 border-b">
      <tr>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
         Order Id
        </th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
          user
        </th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
         total price
        </th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
         status
        </th>
      </tr>
    </thead>
    <tbody>
          {order.length > 0 ? (
            order.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-4 py-3">{item._id}</td>
                <td className="px-4 py-3">
                  {item.userId.name}
                </td>
                <td className="px-4 py-3">
                  ${item.totalPrice}
                   </td>
                <td className="px-4 py-3">{item.paymentStatus}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                Loading orders...
              </td>
            </tr>
          )}
        </tbody>
  </table>
    </div>
  )
}

export default AdminHomePage