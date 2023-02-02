import React from 'react'
import { useSelector } from 'react-redux'
import './header.css'
export const Header=() => {
    const { cartList }=useSelector(state => state.cart)
    const cartCount=cartList?.reduce((acc, value) => ( acc += value.count ),0)
    return (
        <header>
            <div className='container'>
                <h1>Online shop</h1>
                <div className='header-cart'>
                    <div className='cart-count-header'>{cartCount}</div>
                   < h3>Cart</h3>
                </div>
            </div>
        </header>
  )
}

