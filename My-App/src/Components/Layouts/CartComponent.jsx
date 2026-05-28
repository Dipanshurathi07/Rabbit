import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import  {deleteItem, updateQuantity} from "../../Redux/Slice/cartSlice"
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
const CartComponent = ({items,loading,error}) => {
  const dispatch = useDispatch();
  const { user, guestId } = useSelector(state => state.auth);
  const userId = user ? user._id : null;
  // let [items, setItems] = useState([{
  //   productId: 1,
  //   name: "Shirt",
  //   size: "M",
  //   color: "Green",
  //   quantity: 1,
  //   price: 20,
  //   image: "https://images.unsplash.com/photo-1639747280111-9a32b2c038ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   productId: 1,
  //   name: "Jeans",
  //   size: "M",
  //   color: "Black",
  //   quantity: 1,
  //   price: 20,
  //   image: "https://images.unsplash.com/photo-1516271099866-de31ba93ee4b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // }
  // ])
  const handleDelete = (item) => {
  dispatch(deleteItem({
    productId: item.productId?._id || item.productId,
    color: item.color,
    size: item.size,
    userId,
    guestId
  })).then(() => {
      toast.success('Item removed from cart', { duration: 2000 });
  });
};
  const handleInc = (item) => {
  dispatch(updateQuantity({
    productId: item.productId,
    quantity: item.quantity + 1,
    size: item.size,
    color: item.color,
    userId,
    guestId
  }));
};

const handleDec = (item) => {
  if(item.quantity <= 1) return;

  dispatch(updateQuantity({
    productId: item.productId,
    quantity: item.quantity - 1,
    size: item.size,
    color: item.color,
    userId,
    guestId
  }));
};
  const safeItems = Array.isArray(items) ? items : [];

  if(safeItems.length === 0){
    return <h1 className='text-center'>No item in cart..</h1>
  }
  return (
    <div className="flex flex-col z-50 p-5">
      {safeItems.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-4 py-4"
        >
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <p className="font-semibold text-sm sm:text-base">
              {item.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Size: {item.size} · Color: {item.color}
            </p>
            <div className="flex flex-row w-1/2 gap-4 p-2">
              <div className="border rounded-md border-gray-200 bg-gray-100 p-1"><button onClick={()=>handleDec(item)}><i class="fa-solid fa-minus"></i></button></div>
              <p className="font-semibold">{item.quantity}</p>
              <div className="border rounded-md border-gray-200 bg-gray-100 p-1"><button onClick={()=>handleInc(item)}><i class="fa-solid fa-plus"></i></button></div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 pr-3">
            <p className="font-medium text-sm sm:text-base">
              ${item.price}
            </p>
            <button onClick={()=>handleDelete(item)} className="text-gray-400 hover:text-red-500 transition">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>

  )
}

export default CartComponent