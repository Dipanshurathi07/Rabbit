import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//fetch all the product on the basis of filters
export const fetchProductByFilter = createAsyncThunk("products/fetchProductByFilter",async ({collection,size,color,gender,minPrice,maxPrice,sortBy,search,category,material,brand,limit},{rejectWithValue})=>{
  const query = new URLSearchParams();
  if(collection) query.append("collection",collection)
  if(size) query.append("size",size)
  if(color) query.append("color",color)
  if(gender) query.append("gender",gender)
  if(minPrice) query.append("minPrice",minPrice)
  if(maxPrice) query.append("maxPrice",maxPrice)
  if(sortBy) query.append("sortBy",sortBy)
  if(search) query.append("search",search)
  if(brand) query.append("brand",brand)
  if(material) query.append("material",material)
  if(limit) query.append("limit",limit)
  if(category) query.append("category",category)

    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`);
    return response.data;
});
export const fetchTopWearProducts = createAsyncThunk(
  "products/fetchTopWearProducts",
  async (_, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({
        gender: "Women",
        category: "Top Wear",
        limit: 8
      });
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/products?${params.toString()}`
      );
      return response.data;
    } catch (error) {
      console.log("fetchTopWearProducts error:", error);
      return rejectWithValue(error.response?.data || "Error fetching top wear");
    }
  }
);
//fatch single product by id
export const fatchProductById = createAsyncThunk("products/fatchProductById",async (id)=>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
    return response.data;
  } catch (error) {
   console.log(error);
  }
})
//fatch similar products
// export const fatchSimilarProducts = createAsyncThunk("products/fatchSimilarProducts",async(id)=>{
//    try {
//     const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/?${id}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// })

//12:24 pr jaakr dekh lena ik baar important h 
//update product reh gya h abhi

export const fatchSimilarProducts = createAsyncThunk("products/fatchSimilarProducts",async(id)=>{
   try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`);
    return response.data;
  } catch (error) {
   console.log(error);
  }
})
const productSlice = createSlice({
  name : "product",
  initialState : {
    products : [],
    selectedProduct : null, //individual Product
    similarProducts:[],
    topWearProducts: [],
    loading : false,
    error : null,
    filters: {
      category:"",
      size : "",
      color:"",
      gender:"",
      brand:"",
      minPrice:"",
      maxPrice:"",
      sortBy:"",                  
      search:"",
      material:"",
      collection:"",
    }
  },
  reducers : {
    setFilters:(state,action)=>{
      state.filters = {...state.filters,...action.payload}
    },
    clearFilters:(state)=>{
      state.filters = {
      category:"",
      size : "",
      color:"",
      gender:"",
      brand:"",
      minPrice:"",
      maxPrice:"",
      sortBy:"",
      search:"",
      material:"",
      collection:"",
      }
    }
  },
  extraReducers : (builder)=>{
    builder
    .addCase(fetchProductByFilter.pending,(state)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(fetchProductByFilter.fulfilled,(state,action)=>{
      state.loading = false;
      state.error = null,
      state.products = action.payload;
    })
    .addCase(fetchProductByFilter.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.error.message
    })
    .addCase(fetchTopWearProducts.pending, (state) => {
  state.loading = true;
  state.error = null;
  })
    .addCase(fetchTopWearProducts.fulfilled, (state, action) => {
     state.loading = false;
     state.topWearProducts = Array.isArray(action.payload)
    ? action.payload
    : action.payload?.products || [];
   })
   .addCase(fetchTopWearProducts.rejected, (state, action) => {
   state.loading = false;
   state.error = action.payload;
    })
    .addCase(fatchSimilarProducts.pending,(state)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(fatchSimilarProducts.fulfilled,(state,action)=>{
      state.loading = false;
      state.error = null,
      state.similarProducts = Array.isArray(action.payload) ? action.payload : [];
    })
    .addCase(fatchSimilarProducts.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.error.message
    })
    .addCase(fatchProductById.pending,(state)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(fatchProductById.fulfilled,(state,action)=>{
      state.loading = false;
      state.error = null,
      state.selectedProduct = action.payload;
    })
    .addCase(fatchProductById.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.error.message
    })
  }
})
export const {setFilters,clearFilters} = productSlice.actions;
export default productSlice.reducer;
