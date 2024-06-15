import React from 'react'
import Header from '../../component/Header/Header'
import Table from '../../component/Table/Table'

const Profile = ({isHistory}) => {
  return (
    <>
      <Header isProfile={true}/>
      <Table isHistory={isHistory}/>
    </>
  )
}

export default Profile