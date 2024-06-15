import React from 'react'
import Search from '../../../component/Search/Search'
import Category from '../../../component/Category/Category'

const ProductList = () => {
  return (
    <>
      <Search/>
      <Category title={"Цветы в Астане"} color={"gold"} hidden={"d-none"}/>
    </>
  )
}

export default ProductList