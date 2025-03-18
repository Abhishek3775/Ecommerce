import React from 'react'
import "./Nav.css"
import { FaShopify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink,Link } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'



function Nav() {
    
    const items  = useSelector((state) => state.cart.length)
  return (
    <div className='Nav'>
        <div className="top-nav">
            <div className="logo">
                <span>A-Shop</span>
                <FaShopify />
            </div>
            <form className='SearchBox'>
                <input type="text" placeholder='Serch Items..' />
                <button><CiSearch />
                </button>
            </form>
            <div className="cartBox" >
                <Link to="/Cart" >
                <MdOutlineShoppingCart />
                </Link>
           
            <span>{items}</span>
            </div>
        </div>


        <div className="bottom-nav">
            <ul className='bottom-nav-ul'>
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to = "/Shop" className="nav-link">Shop</NavLink></li>
                <li><NavLink to = "/Cart" className="nav-link">Cart</NavLink></li>
                <li><NavLink to = "/Contact" className="nav-link">Contact</NavLink></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
