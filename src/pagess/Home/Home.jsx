import React, { useState } from 'react'
import "./Home.css"
// import Nav from '../../Components/Navbar/Nav'
import bg from "../../assets/bg.gif"
import { category } from '../../Category'
import Product from '../../Components/Products/Product'
import { dummydata } from '../../assets/dummydata'

function Home() {

  let [cate,setCate ] = useState(dummydata);
  function filterProduct(category){
    let updateData =  dummydata.filter((item)=> (item.category === category))
    setCate(updateData);
  }
  return (
    <div className='home'>

   <div className="hero-bg">
    <img src={bg} alt="" />
   </div>

{/* starting of the category section */}
 <div className="categorySection">

  {category.slice(0,5).map((item)=>(
    <div className="categoryCard" onClick={()=>{
      filterProduct(item.name)
    }}>
      <img src={item.image} alt="" />
      <span>{item.name}</span>
    </div>
  
  ))}

 </div>

 {/* ending of the category sections */}


{/* trendinng section start from here */}
<h1>Trending Products</h1>
<div className="productSection">
{cate.slice(0,7).map((item)=>(
 < Product 
 name = {item.name}
 image = {item.image}
 price = {item.price}
 />
))};
</div>
{/* trending section end here */}
    </div>
  )
}

export default Home
