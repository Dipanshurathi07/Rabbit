import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLayout from "./Components/Layouts/UserLayout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import { Toaster } from "sonner"
import Collection from "./Pages/Collection"
import BestSaller from "./Components/Products/BestSaller"
import CheckOut from "./Pages/CheckOut"
import OrderConfirmation from "./Pages/OrderConfirmation"
import MyOrder from "./Pages/MyOrder"
import OrderDetails from "./Pages/OrderDetails"
import AdminLayout from "./Admin/AdminLayout"
import AdminDashboard from "./Pages/AdminHomePage"
import AdminHomePage from "./Pages/AdminHomePage"
import UserManagement from "./Admin/UserManagement"
import ProductManagement from "./Admin/ProductManagement"
import EditProduct from "./Admin/EditProduct"
import ProtectedAdmin from "./Components/Common/ProtectedAdmin"
import OrderManagement from "./Admin/OrderManagement"
function App() {
  return (
    <BrowserRouter >
    <Toaster position="top-right"></Toaster>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collection/:collection" element={<Collection></Collection>}></Route>
          <Route path="product/:id" element={<BestSaller/>}></Route>
          <Route path="checkout" element={<CheckOut></CheckOut>}></Route>
          <Route path="/order-confirmation" element={<OrderConfirmation></OrderConfirmation>}></Route>
          <Route path="/order/:id" element={<OrderDetails></OrderDetails>}></Route>
          <Route path="/my-order" element={<MyOrder></MyOrder>}></Route>
        </Route>
          <Route path="/admin" element={<ProtectedAdmin role={"admin"}><AdminLayout></AdminLayout></ProtectedAdmin>}>
          <Route index element={<AdminHomePage></AdminHomePage>}></Route>
          <Route path="users" element={<UserManagement></UserManagement>}></Route>
          <Route path="products" element={<ProductManagement></ProductManagement>}></Route>
          <Route path="orders" element={<OrderManagement></OrderManagement>}></Route>
          <Route path="products/:id/edit" element={<EditProduct></EditProduct>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
