import React from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux'
import { addItem } from '../../Redux/cartSlice'

function Product({name,image,price,id}) {
  const dispatch = useDispatch()
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="productDetail">
        <span>{name}</span>
        <span>₹{price}</span>
        <button id='btn' onClick={()=>{
     console.log(dispatch(addItem({name:name, image:image,price:price,id:id})))
        }}>Add +</button>
      </div>
    </div>
  )
}

export default Product
