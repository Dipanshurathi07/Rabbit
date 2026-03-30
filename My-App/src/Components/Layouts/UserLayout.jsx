import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function UserLayout(){
  return <>
  <Header></Header>
  <Outlet></Outlet>
  <Footer></Footer>
  </>
}