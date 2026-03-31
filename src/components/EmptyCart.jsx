import React from 'react';
import '../css/Empy.css'
import { Link } from 'react-router-dom';
import { BiShoppingBag } from "react-icons/bi"; 

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <div className="empty-content">
   
        <BiShoppingBag className="empty-icon" />
        
        <h1>¡Tu carrito está vacío!</h1>
        <p>Parece que aún no has agregado productos.</p>
        
       
        <Link to="/" className="btn-home">
           Volver a la Tienda
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart;