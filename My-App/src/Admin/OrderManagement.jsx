import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminOrders, updateAdminOrders } from "../Redux/Slice/adminOrderSlice";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.adminOrders);
  const safeOrders = Array.isArray(order) ? order : [];

  useEffect(() => {
    dispatch(fetchAdminOrders());
  }, [dispatch]);

  // ✅ Status Change
  const handleStatusChange = (id, status) => {
    dispatch(updateAdminOrders({
      id,
      data: { status }
    }));
  };

  // ✅ Mark Delivered
  const markDelivered = (id) => {
    dispatch(updateAdminOrders({
      id,
      data: { status: "Delivered" }
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Order Management</h1>

      <div className="overflow-x-auto border rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Total Price</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {safeOrders.length > 0 ? (
              safeOrders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  
                  {/* Order ID */}
                  <td className="px-4 py-3 text-gray-600">
                    #{order._id.slice(-16)}
                  </td>

                  {/* Customer Name */}
                  <td className="px-4 py-3">
                    {order.userId?.name}
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 font-medium">
                    ${order.totalPrice?.toFixed(2)}
                  </td>

                  {/* Status Dropdown */}
                  <td className="px-4 py-3">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="border rounded-md px-3 py-1 text-sm"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => markDelivered(order._id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Mark as Delivered
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;