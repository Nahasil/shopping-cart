import React from 'react'

import { useDispatch } from 'react-redux';
import { decrement,increment } from '../../../redux/cart';

import './CartButtons.css'

const AfterCart=({cartCount,productId}) => {
  const dispatch=useDispatch();
  
  return (
    <div className='after-cart'>
          <button className='cart-count-button' onClick={() => dispatch(decrement(productId))}>-</button>
      <div className='cart-count'>{cartCount}</div>
          <button className='cart-count-button' onClick={() => dispatch(increment(productId))}>+</button>
    </div>
  )
}

export default AfterCart
