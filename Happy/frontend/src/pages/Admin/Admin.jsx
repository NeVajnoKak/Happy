import React from 'react'
import Header from '../../component/Header/Admin/Header'
import OffCanvas from '../../component/OffCanvas/Admin/OffCanvas'
import { Navigate } from 'react-router'

const Admin = ({ isAdmin }) => {
  return (
    <>
      <Header />
      <OffCanvas />
    </>
  )
}

export default Admin