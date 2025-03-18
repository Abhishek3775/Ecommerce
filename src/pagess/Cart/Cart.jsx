import React from 'react'
import CartCard from '../../Components/cartCard/cartCard'
import "./Cart.css"
import {useSelector } from 'react-redux'
import emptyCart from '../../assets/emptycart.png'


function Cart() {
let items = useSelector(state=>state)
let total = items.cart.reduce((currentValue , currentIdx)=>currentValue+currentIdx.price,0)

  return (
    <div className='Cart'>
      {items.cart.length<=0?<div className='EmptyCart'>
        <img src={emptyCart} alt="" />
        <h1>Empty Cart</h1>
      </div>
      
      :<div className='cartCartSection'>

        {items.cart.map((item)=>(
          <CartCard 
          key = {item.id}
          name = {item.name}
          price = {item.price}
          image = {item.image}
          id = {item.id}
          />
        ))}
         <div className="priceSection">
     <span>Total Products:{items.cart.length}</span>
     <span>Total : {total}</span>
   
   </div>  
    </div>  
    
        }
  
    </div>
  )
}

export default Cart
