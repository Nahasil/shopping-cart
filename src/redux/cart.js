import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE={
    cartList: [],
}

const cartslice=createSlice({
    name:'cart',
    initialState: INITIAL_STATE,
    reducers: {

        addToCart: (state, action) => {
            //state.cartCount=1
            //console.log('acrrasd:-',action);
          const itemExist =  state.cartList.find((item)=>item?.id === action.payload.id)
            if (itemExist) {
               state.cartList.forEach(item => {
            if(item?.id === action.payload.id)
            {
                item.count = 1
            }
               }) 
                return;

            } else {
                state.cartList.push({
                ...action.payload,
                count: 1,
            
            }) 
           }
           
        },
        
        increment: (state,action) => { 
           const productId = action.payload
           state.cartList.forEach(item => {
            item?.id === productId && item.count++
           }) 
         },
        
        decrement: (state, action) => { 
            const productId=action.payload
          state.cartList.forEach(item => {
            item?.id === productId && item.count--  
          })  
         }
        
    }
})

export const { increment, decrement, addToCart }=cartslice.actions
export default cartslice.reducer;