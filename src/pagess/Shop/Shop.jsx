import React from 'react'
import { category } from '../../Category'
import Product from '../../Components/Products/Product'
import { useState } from 'react';
import { dummydata } from '../../assets/dummydata'
import { FaShopify } from "react-icons/fa";
import "./Shop.css"

function Shop() {

   let [cate,setCate ] = useState(dummydata);

    function filterProduct(category){
      if(category==="All"){
        setCate(dummydata)
      }
      else{
        let updateData =  dummydata.filter((item)=> (item.category === category))
      setCate(updateData);
      }
      
    }


  return (
    <div className='shop'>
      <div className="logo">
                      <span>Shop</span>
                      <FaShopify />
                  </div>
      <div className="categorySection">
      
        {category.map((item)=>(
          <div className="categoryCard" onClick={()=>{
            filterProduct(item.name)
          }}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        
        ))}
      
       </div>


       <div className="productSection">
{cate.map((item)=>(
 < Product 
 name = {item.name}
 image = {item.image}
 price = {item.price}
 id = {item.id}
 />
))};
</div>
    </div>
  )
}

export default Shop
