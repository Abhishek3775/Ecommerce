import React, { useState } from 'react';
import "./CartCard.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Redux/cartSlice';

function CartCard({ name, price, image, id }) {
  let dispatch = useDispatch();
  let [popup, setPopup] = useState(false);

  const handleRemove = () => {
    setPopup(true);
    
    setTimeout(() => {
      dispatch(removeItem(id)); // ✅ Delayed dispatch for better UX
      setPopup(false); // ✅ Hide popup after item removal
    }, 1500);
  };

  return (
    <div className="CartCard">
      <div className="leftCard">
        <img src={image} alt={name} />
        <div className="namePrice">
          <span>{name}</span>
          <span>₹{price}</span>
        </div>
      </div>

      <div className="rightCard">
        <button onClick={handleRemove}>
          Remove <RiDeleteBinLine />
        </button>
      </div>

      {/* Popup Message */}
      {popup && <div className="popup">✔ Item removed successfully!</div>}
    </div>
  );
}

export default CartCard;
