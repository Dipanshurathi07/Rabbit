import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./Slice/authSlice"
import productReducer from "./Slice/productSlice"
import cartReducer from "./Slice/cartSlice"
import checkoutReducer from "./Slice/checkoutSlice"
import orderReducer from "./Slice/orderSlice"
import adminReducer from "./Slice/adminSlice"
import adminProductReducer from "./Slice/adminProductSlice"
import adminOrdersReducer from "./Slice/adminOrderSlice"
export const store = configureStore({
 reducer:{
  auth: authReducer,
  product:productReducer,
  cart:cartReducer,
  checkout:checkoutReducer,
  orders : orderReducer,
  admin : adminReducer,
  adminProduct : adminProductReducer,
  adminOrders : adminOrdersReducer
 }
})