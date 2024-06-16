import React from 'react'
import Header from '../../component/Header/Admin/Header'
import OffCanvas from '../../component/OffCanvas/Admin/OffCanvas'
import { Navigate } from 'react-router'
import ClientTable from '../../component/Table/Admin/ClientTable'

const Admin = ({ isClient }) => {
  return (
    <>
      {isClient ?
        <>
          <Header />
          <OffCanvas />
          <ClientTable></ClientTable>
        </>
        :
        <>
          <Header />
          <OffCanvas />
        </>
      }

    </>
  )
}

export default Admin