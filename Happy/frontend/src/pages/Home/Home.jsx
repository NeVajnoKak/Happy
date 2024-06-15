import React from 'react'

import Hero from '../../component/Hero/Hero'
import Category from '../../component/Category/Category'

const Home = () => {
  return (
    <>
        <Hero/>
        <Category title={"Цветы в Астане"} color={"gold"} />
        <Category title={"Торты в Астане"} color={"blue"} />
    </>
  )
}

export default Home