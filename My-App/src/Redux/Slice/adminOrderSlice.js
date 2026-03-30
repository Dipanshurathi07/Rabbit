import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchAdminOrders = createAsyncThunk(
  "admin/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/admin/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);
export const updateAdminOrders = createAsyncThunk(
  "admin/updateOrders",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/admin/orders/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data.order;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

export const deleteAdminOrders = createAsyncThunk(
  "admin/deleteOrders",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/api/admin/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);
const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState: {
    order: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(fetchAdminOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAdminOrders.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.order.findIndex(o => o._id === updated._id);
        if (index !== -1) {
          state.order[index] = updated;
        }
      })
      .addCase(deleteAdminOrders.fulfilled, (state, action) => {
        state.order = state.order.filter(o => o._id !== action.payload);
      });
  },
});

export default adminOrderSlice.reducer;