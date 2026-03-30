import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk("admin/fetchProducts",async(_,{rejectWithValue})=>{
  try{
  const response = await axios.get(
  `${import.meta.env.VITE_BACKEND_URL}/api/admin/products`,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  }
);
return response.data;
}catch(error){
  console.log(error);
  return rejectWithValue(error.response?.data);
}
})
export const addProducts = createAsyncThunk("admin/addProducts",async(productDetails,{rejectWithValue})=>{
  try{
  const response  = axios.post( `${import.meta.env.VITE_BACKEND_URL}/api/admin/products`,productDetails,
    {
          headers : {
            Authorization:`Bearer ${localStorage.getItem("userToken")}`
          }
        }
  )
  return response.data;
}catch(error){
   console.log(error);
  return rejectWithValue(error.response?.data);
}
})
export const updateProducts = createAsyncThunk("admin/updateProducts",async(id,productDetails,{rejectWithValue})=>{
  try{
  const response  = axios.put( `${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${id}`,productDetails,
    {
          headers : {
            Authorization:`Bearer ${localStorage.getItem("userToken")}`
          }
        }
  )
  return response.data;
}catch(error){
   console.log(error);
  return rejectWithValue(error.response?.data);
}
})
export const deleteProducts = createAsyncThunk("admin/deleteProducts",async(id,{rejectWithValue})=>{
  try{
  const response  = axios.delete( `${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${id}`,
    {
          headers : {
            Authorization:`Bearer ${localStorage.getItem("userToken")}`
          }
        }
      )
      return id;
    }catch(error){
  console.log(error);
  return rejectWithValue(error.response?.data);
    }
      }
)
const adminProductSlice = createSlice({
  name : "adminProduct",
  initialState:{
  products:[],
  loading:false,
  error:null
},
reducers:{},
extraReducers:(builder)=>{
  builder
  .addCase(fetchProducts.pending,(state)=>{
    state.loading=true;
    state.error=null
  })
  .addCase(fetchProducts.fulfilled,(state,action)=>{
    state.loading=false,
    state.products = action.payload;
  })
  .addCase(fetchProducts.rejected,(state,action)=>{
    state.loading=false;
    state.error = action.payload?.message || "No product found";
  })
  .addCase(addProducts.pending,(state)=>{
    state.loading=true;
    state.error=null
  })
  .addCase(addProducts.fulfilled,(state,action)=>{
    state.loading=false,
    state.products.push(action.payload);
  })
  .addCase(addProducts.rejected,(state,action)=>{
    state.loading=false;
    state.error = action.payload?.message || "No product found";
  })
   .addCase(updateProducts.pending,(state)=>{
    state.loading=true;
    state.error=null
  })
  .addCase(updateProducts.fulfilled,(state,action)=>{
    state.loading=false;
    const updatedProduct = action.payload;
    const index = state.products.findIndex((product) => product._id === updatedProduct._id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
  })
  .addCase(updateProducts.rejected,(state,action)=>{
    state.loading=false;
    state.error = action.payload?.message || "No product found";
  })
   .addCase(deleteProducts.pending,(state)=>{
    state.loading=true;
    state.error=null
  })
  .addCase(deleteProducts.fulfilled,(state,action)=>{
    state.loading=false,
    state.products = state.products.filter((product)=>product._id!==action.payload);
  })
  .addCase(deleteProducts.rejected,(state,action)=>{
    state.loading=false;
    state.error = action.payload?.message || "No product found";
  })
}
}
)
export default adminProductSlice.reducer;

