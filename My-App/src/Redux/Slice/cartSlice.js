import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const normalizeCart = (data) => {
  if (!data || typeof data !== "object") {
    return { products: [], totalPrice: 0 };
  }
  if (Array.isArray(data)) {
    return { products: data, totalPrice: 0 };
  }
  return {
    products: Array.isArray(data.products) ? data.products : [],
    totalPrice: typeof data.totalPrice === "number" ? data.totalPrice : 0,
    guestId: data.guestId || undefined,
    userId: data.userId || undefined,
  };
};

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? normalizeCart(JSON.parse(storedCart)) : { products: [], totalPrice: 0 };
};
const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
}
//fetch cart for a user or guest
export const fetchCart = createAsyncThunk("cart/fetchCart",async ({userId,guestId},{rejectWithValue})=>{
  try{
const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart/`,{
 params: {userId,guestId}
})
return response.data;
  }
  catch(error){
    if (error.response?.status === 404) {
      return { products: [], totalPrice: 0, guestId, userId };
    }
    console.log(error);
    return rejectWithValue(error.response?.data || { message: "Failed to fetch cart" })
  }
})
export const addToCart = createAsyncThunk("cart/addToCart",async({productId,quantity,size,color,guestId,userId},{rejectWithValue})=>{
 try {
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{productId,quantity,size,color,guestId,userId})
  return response.data;
 } catch (error) {
  console.log(error);
  return rejectWithValue(error.response.data);
 }
})
//update the quantity in the cart
export const updateQuantity = createAsyncThunk("cart/updateQuantity",async({productId,quantity,color,size,userId,guestId},{rejectWithValue})=>{
 try {
   const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{productId,quantity,size,color,guestId,userId})
   console.log(response.data);
  return response.data;
 } catch (error) {
   console.log(error);
   return rejectWithValue(error.response?.data || { message: "Failed to update quantity" });
 }
})

export const deleteItem = createAsyncThunk("cart/deleteItem",async({ userId, guestId, productId, size, color },{rejectWithValue})=>{
  try {
     const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
       data: {productId,size,color,guestId,userId},
       headers : {
          Authorization : `Bearer ${(localStorage.getItem("userToken"))}`
        }
      }
     )
      return response.data;
  } catch (error) {
  console.log(error);
  return rejectWithValue(error.response.data);
  }
})

//merge 
export const mergeCart = createAsyncThunk("cart/mergeCart",async({userId,guestId},{rejectWithValue})=>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,{guestId,userId},
        {
        headers : {
          Authorization : `Bearer ${localStorage.getItem("userToken")}`
        }
      }
    )
    return response.data;
  } catch (error) {
    console.log(error);
  return rejectWithValue(error.response.data);
  }
})

const cartSlice = createSlice({
  name : "cart",
  initialState:{
   cart : loadCartFromStorage(),
   loading:false,
   error:null
  },
  reducers : {
   clearCart : (state)=>{
    state.cart = {products : []},
    localStorage.removeItem("cart");
   }
  },
  extraReducers:(builder)=>{

 builder
 // FETCH CART
 .addCase(fetchCart.pending,(state)=>{
 state.loading = true;
 })
 .addCase(fetchCart.fulfilled,(state,action)=>{
 state.loading=false;
 const fetchedCart = normalizeCart(action.payload);
 const currentCartHasItems = state.cart.products.length > 0;
 const fetchedCartHasItems = fetchedCart.products.length > 0;

 if (!fetchedCartHasItems && currentCartHasItems) {
   saveCartToStorage(state.cart);
   return;
 }

 state.cart = fetchedCart;
 saveCartToStorage(state.cart);
})
 .addCase(fetchCart.rejected,(state,action)=>{
 state.loading=false;
 state.error = action.payload?.message;
 })
 // ADD CART
 .addCase(addToCart.pending,(state)=>{
 state.loading = true;
 })
 .addCase(addToCart.fulfilled,(state,action)=>{
 state.loading=false;
 state.error=null;
 state.cart = normalizeCart(action.payload);
 saveCartToStorage(state.cart);
 })
 .addCase(addToCart.rejected,(state,action)=>{
 state.loading=false;
 state.error = action.payload?.message || "Failed to add item to cart";
 })
  // UPDATE
  .addCase(updateQuantity.pending,(state)=>{
 state.loading = true;
 })
 .addCase(updateQuantity.fulfilled,(state,action)=>{
 state.loading=false;
 state.error=null;
 state.cart = normalizeCart(action.payload);
 saveCartToStorage(state.cart);
 })
 .addCase(updateQuantity.rejected,(state,action)=>{
 state.loading=false;
 state.error = action.payload?.message || "Failed to update cart";
 })
 // DELETE
 .addCase(deleteItem.pending,(state)=>{
 state.loading = true;
 })
 .addCase(deleteItem.fulfilled,(state,action)=>{
 state.loading=false;
 state.error=null;
 state.cart = normalizeCart(action.payload);
 saveCartToStorage(state.cart);
 })
 .addCase(deleteItem.rejected,(state,action)=>{
 state.loading=false;
 state.error = action.payload?.message || "Failed to remove item from cart";
 })


 // MERGE
 .addCase(mergeCart.pending,(state)=>{
 state.loading = true;
 })
 .addCase(mergeCart.fulfilled,(state,action)=>{
 state.loading=false;
 state.error=null;
 state.cart = normalizeCart(action.payload);
 saveCartToStorage(state.cart);
 })
 .addCase(mergeCart.rejected,(state,action)=>{
 state.loading=false;
 state.error = action.payload?.message || "Failed to merge cart";
 });
  }
})
export const {clearCart} = cartSlice.actions;

export default cartSlice.reducer;