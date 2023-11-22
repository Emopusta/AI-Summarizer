import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const { aisum_userInfo } = useSelector((state) => state.auth);
  return (
    aisum_userInfo ? <Outlet/> : <Navigate to='/sign-in' />
  )
}
