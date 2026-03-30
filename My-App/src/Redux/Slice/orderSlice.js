import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserOrders = createAsyncThunk(
  "order/checkOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/order/my-orders`,
        {
          headers : {
            Authorization:`Bearer ${(localStorage.getItem("userToken"))}`
          }
        }
      );
      return response.data;
    } catch (error) {
     console.log("ERROR:", error.response || error);
     return rejectWithValue(error.response?.data);
    }
  }
);

export const checkSpecificOrder = createAsyncThunk(
  "order/checkSpecificOrder",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/order/${id}`,
        {
          headers : {
            Authorization:`Bearer ${localStorage.getItem("userToken")}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error",error.message)
      return rejectWithValue(error.response?.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    totalOrders:0,
     orderDetails: null, //single order details
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.totalOrders = action.payload.length;
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "No order found";
      })

      .addCase(checkSpecificOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkSpecificOrder.fulfilled, (state, action) => {
      state.orderDetails = action.payload; 
      })
      .addCase(checkSpecificOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "No order found";
      });
  },
});
export const{}=orderSlice.actions;
export default orderSlice.reducer;