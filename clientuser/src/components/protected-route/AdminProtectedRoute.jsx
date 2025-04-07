import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminLayout from '../layout/admin-layout/AdminLayout'

const AdminProtectedRoute = () => {
    
    const token = localStorage.getItem("accessToken");

    if (!token) {
        return <Navigate to="/" />;
    }


    return (
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    )
}

export default AdminProtectedRoute