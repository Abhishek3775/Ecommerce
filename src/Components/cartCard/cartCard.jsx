import React from 'react'
import "./CartCard.css"
import { RiDeleteBinLine } from "react-icons/ri";
import image1 from "../../assets/image1.jpg"

function CartCard() {
  return (
    <div className="CartCard">
        <div className="leftCard">
            <img src={image1} alt="" />
            <div className="namePrice">
                <span>Name</span>
                <span>15000</span> 
            </div>
        </div>
        <div className="rightCard">
            <button>Remove <RiDeleteBinLine />
            </button>
        </div>
    </div>
  )
}

export default CartCard
