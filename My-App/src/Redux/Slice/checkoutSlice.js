import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createCheckOut = createAsyncThunk("checkout/createCheckOut",async({ checkoutItems, shippingAddress, paymentMethod, totalPrice ,quantity},{rejectWithValue})=>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout`,{checkoutItems, shippingAddress, paymentMethod, totalPrice ,quantity},{
    headers : {
    Authorization : `Bearer ${(localStorage.getItem("userToken"))}`
    }
  })
  console.log("TOKEN",localStorage.getItem("userToken"))
  return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response?.data);
  }
})
export const updatePayment = createAsyncThunk("checkout/updatePayment",async({paymentStatus,paymentDetails,id},{rejectWithValue})=>{
  try {
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${id}/pay`,{paymentStatus,paymentDetails},{
    headers : {
    Authorization : `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`
    }
  })
  return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response?.data);
  }
})
export const finalizePayment = createAsyncThunk("checkout/finalizePayment",async({id},{rejectWithValue})=>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${id}/finalize`,{},{
    headers : {
    Authorization : `Bearer ${localStorage.getItem("userToken")}`
    }
  })
  return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response?.data);
  }
})
const checkoutSlice = createSlice({
  name : "checkout",
  initialState : {
    checkOut : null,
    loading : false,
    error:null
  },
  reducers : {},
  extraReducers : (builder)=>{
    builder
    .addCase(createCheckOut.pending,(state)=>{
      state.loading=true;
      state.error=null;
    })
     .addCase(createCheckOut.fulfilled,(state,action)=>{
      state.loading = false;
      state.checkOut = action.payload;
    })
     .addCase(createCheckOut.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload.message || "No checkout Created";
    })
      .addCase(updatePayment.pending,(state)=>{
      state.loading=true;
      state.error=null;
    })
     .addCase(updatePayment.fulfilled,(state,action)=>{
      state.loading = false;
      state.checkOut = action.payload;
    })
     .addCase(updatePayment.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload.message || "No payment updated";
    })
      .addCase(finalizePayment.pending,(state)=>{
      state.loading=true;
      state.error=null;
    })
     .addCase(finalizePayment.fulfilled,(state,action)=>{
      state.loading = false;
      state.checkOut = action.payload;
    })
     .addCase(finalizePayment.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload.message || "No payment finalize";
    })
  }
})
export const {}=checkoutSlice.actions;
export default checkoutSlice.reducer;