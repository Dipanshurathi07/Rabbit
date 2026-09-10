import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserOrders } from '../Redux/Slice/orderSlice';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const safeOrders = Array.isArray(orders) ? orders : [];

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  return (
    <div className="bg-white max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="border rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Image</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Order ID</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Created</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Shipping</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Items</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Price</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Status</th>
            </tr>
          </thead>

          <tbody>
            {safeOrders.length > 0 ? (
              safeOrders.map((item, idx) => (
                <tr
                  key={idx}
                  onClick={() => navigate(`/order/${item._id}`)}
                  className="border-b cursor-pointer hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    <img
                      src={item.orderItems?.[0]?.image}
                      alt={item.orderItems?.[0]?.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  </td>

                  <td className="px-4 py-3 text-blue-600 font-medium">
                    #{item._id.slice(-6)}
                  </td>

                  <td className="px-4 py-3">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3">
                    {item.shippingAddress?.city}, {item.shippingAddress?.country}
                  </td>

                  <td className="px-4 py-3">
                    {item.orderItems?.length}
                  </td>

                  <td className="px-4 py-3 font-semibold">
                    ${Number(item.totalPrice || 0).toFixed(2)}
                  </td>

                  <td className="px-4 py-3">
                    <span className="rounded-lg bg-green-200 px-2 py-1 text-green-800 text-xs font-semibold">
                      Paid
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;