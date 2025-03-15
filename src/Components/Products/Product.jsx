import React from 'react'
import "./Product.css"

function Product({name,image,price}) {
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="productDetail">
        <span>{name}</span>
        <span>₹{price}</span>
        <button id='btn'>Add +</button>
      </div>
    </div>
  )
}

export default Product
