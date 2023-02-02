import React from 'react'
import './CartButtons.css'

//redux toolkitj propertioes
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart'

const BeforeCart=({ product }) => {
   const dispatch=useDispatch()
  const addTocart=() => {
    dispatch(addToCart(product))
  }
 
  
  return (
    <div className='befor-cart'>
      <button className='add-cart-button' onClick={addTocart}>
        Add to cart
      </button>
    </div>
  )
}

export default BeforeCart
