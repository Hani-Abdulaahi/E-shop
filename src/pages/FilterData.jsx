import React, { useState } from 'react'
import ProductCart from '../component/ProductCart'
import { useSelector } from 'react-redux'
import Noproduct from "../assets/images/notfoundbook.jpg"



const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {filterProducts.length > 0 ?
        <>
        <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
                <div className="grid grid-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                    {filterProducts.map(((product) => (
                        <ProductCart product={product} />
                    )))}
                </div>
        </>
        :
        <div className='flex justify-center'>
            <img src={Noproduct} alt={Noproduct} />

        </div>
}
        </div>
  ) 
    }

export default FilterData;
  