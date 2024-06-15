import React from 'react'
import Filter from './Filter/Filter'
import Price from './Price/Price'
import Flower from './Flower/Flower'

const Slidebar = ({isHidden}) => {
    return (
        <>
            <div className={`${isHidden ? '' : 'd-none'} col-3 ps-0' `} >
                <Filter />
                <Price />
                <Flower/>
            </div>
        </>
    )
}

export default Slidebar