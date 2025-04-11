import React from 'react'
// import UserNavBar from '../../user/UserNavBar'
import UserNavBar from '../../user/UserNavbar'
import UserFooter from '../../user/UserFooter'
import SubFooter from '../../user/SubFooter'

const UserLayout = ({ children }) => {
  return (
    <>
    {/* <div className="container mx-auto  mt-5"> */}
      <UserNavBar />
      {children}
      <UserFooter/>
      <SubFooter/>
    </>
  )
}

export default UserLayout