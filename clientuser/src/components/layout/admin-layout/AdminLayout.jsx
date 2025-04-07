import React from 'react'
import AdminNavbar from '../../admin/AdminNavbar'

const AdminLayout = ({children}) => {
    return (
        <div className="container mx-auto  mt-5">
          <AdminNavbar />
          {children}
        </div>
      )
}

export default AdminLayout