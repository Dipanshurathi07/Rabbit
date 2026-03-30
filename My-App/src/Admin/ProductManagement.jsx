import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteProducts, fetchProducts } from '../Redux/Slice/adminProductSlice';

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { products }=useSelector((state)=>state.adminProduct);
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(fetchProducts());
  },dispatch)
function handleDelete(id) {
  const confirmDelete = window.confirm("Do you want to delete?");
  
  if (!confirmDelete) return;

  dispatch(deleteProducts(id));
}
function editProduct(id) {
  navigate(`/admin/products/${id}/edit`);
}

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className='font-semibold text-3xl mb-6'>Product Management</h1>
      <div className='mt-6 overflow-x-auto rounded-md w-full border shadow-lg '>
<table className="w-full border-collapse inset-0">
  <thead className='bg-gray-300 py-4'>
    <tr>
      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Name</th>
       <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">price</th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">sku</th>
         <th className="text-xs font-semibold uppercase tracking-wider text-gray-600 text-center">actions</th>
    </tr>
  </thead>
  <tbody>
    {products?.length>0 ? (
    products.map((item)=>(
    <tr key={item._id} className='hover:bg-gray-100 hover:border-b'>
      <td className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600">{item.name}</td> 
       <td className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600">${item.price}</td> 
       <td className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600">
       {item.sku}
       </td>
       <td className="px-4 py-3">
  <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-3 py-1 text-xs sm:text-sm" onClick={()=>editProduct(item._id)}>
      Edit
    </button>
    <button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-1 text-xs sm:text-sm" onClick={()=>handleDelete(item._id)}>
      Delete
    </button>
  </div>
</td>
 </tr>
    ))
  ):(
     <tr>
    <td
      colSpan={4}
      className="text-center py-6 text-sm text-gray-500"
    >
      No Product Found
    </td>
  </tr>
    )}
  </tbody>
  
</table>
</div>

    </div>
  )
}

export default ProductManagement