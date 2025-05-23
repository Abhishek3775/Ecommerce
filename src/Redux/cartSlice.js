import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState:[],
  reducers: {
   addItem:(state,action)=>{
    state.push(action.payload)
   },

   removeItem:(state,action)=>{
    return state.filter((item)=>( item.id!==action.payload))
   }
   
  },
})

// Action creators are generated for each case reducer function
export const {addItem , removeItem} = cartSlice.actions

export default cartSlice.reducer