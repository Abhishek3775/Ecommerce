import React, { useState } from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux'
import { addItem } from '../../Redux/cartSlice'

function Product({name,image,price,id}) {
  let [showPopup,setShowPopup] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="productDetail">
        <span>{name}</span>
        <span>₹{price}</span>
        <button id='btn' onClick={()=>{
          setShowPopup(true);
          setTimeout(()=>{
            setShowPopup(false)
          },1000)
      return dispatch(addItem({name:name, image:image,price:price,id:id}))
        }}>Add +</button>
         {showPopup && <div className="popup">Item Added Successfully! ✅</div>}
      </div>
    </div>
  )
}

export default Product
