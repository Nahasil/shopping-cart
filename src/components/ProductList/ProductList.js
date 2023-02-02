import React from 'react'
import './ProductList.css'
import products from "../../api/product.json"
import CartButton from './CartButtons/index'


import { useSelector } from 'react-redux'

export const ProductList=() => {

    const { cartList }=useSelector((state) => state.cart)
   console.log('cartList:-',cartList);
  return (
      <section className='container'>
          {
              products?.map((product, key) => (
                  <div className='product-container' key={key}>
                      <img src={product?.image} alt="" />
                      <h3>{product?.title}</h3>
                      <CartButton product={product} />  
                  </div>
              ))
          }
    </section>
  )
}


