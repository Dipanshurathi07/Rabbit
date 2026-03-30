import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedAdmin = ({children,role}) => {
  const {user}=useSelector((state)=>state.auth);
  if(!user || user.role!==role){
   return <Navigate to="/login" replace></Navigate>;
  }
  return children;
}

export default ProtectedAdmin