import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
// Retrieve user info and token from localStorage if available
let userFromStorage = null;
try {
  const data = localStorage.getItem("userInfo");
  userFromStorage = data ? JSON.parse(data) : null; //object form
} catch (err) {
  console.log("Invalid userInfo in localStorage");
  localStorage.removeItem("userInfo");
}

//Retrive guestId if exist if not exist make it
const initialguestId =
localStorage.getItem("guestId")
|| `guest_${Date.now()}`;
localStorage.setItem("guestId",initialguestId);

const initialState = {
user : userFromStorage,
guestId : initialguestId,
loading : false,
error : null,
}
//Async thunk for User login
//This is Action
export const loginUser = createAsyncThunk("auth/loginUser",async(userData,{rejectWithValue})=>{ //auth/loginUser Thunk name
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`,userData);
     localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
     return response.data.user; //return the user object from the response
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
)
export const registerUser = createAsyncThunk("auth/registerUser",async(userData,{rejectWithValue})=>{ 
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`,userData);
    localStorage.setItem("userInfo",JSON.stringify(response.data.user))
     localStorage.setItem("userToken",JSON.stringify(response.data.token))
     return response.data.user; //return the user object from the response
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
)
 
const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers : {
    logout : (state)=>{
      state.user = null;
      state.guestId = `guest_Id${new Date().getTime()}`
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.setItem("guestId",state.guestId);
    },
    generateNewGuestId : (state)=>{
      state.guestId = `guest_${new Date().getTime()}`
      localStorage.setItem("guestId",state.guestId);
    },
  },
  extraReducers : (builder)=>{
    builder
    .addCase(loginUser.pending,(state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(loginUser.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload.message;
    })
    .addCase(registerUser.pending,(state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(registerUser.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload.message;
    })
  }
})
export const {logout,generateNewGuestId} = authSlice.actions;
export default authSlice.reducer;