import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/Cartview.css'; 
import Swal from 'sweetalert2';

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);

  const confirmAccion = () => {
    Swal.fire({
 text: "¿Estás seguro de que deseas vaciar el carrito?",
icon: "error",
showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Sí, vaciar",
cancelButtonText: "Cancelar"
}).then((result) => {
  if (result.isConfirmed) {
      clear()
    Swal.fire({

      title: "Carrito vacío",
      text: "El carrito ha sido vaciado correctamente.",
      icon: "success",
     
    });
  }
});
  }

  // Si el carrito está vacío, mostramos un mensaje 
  if (cart.length === 0) {
    return (
      <div className="cart-container" style={{ textAlign: 'center' }}>
        <h1 className="cart-title">Tu carrito está vacío</h1>
        <Link to="/" className="btn-checkout">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu Carrito</h1>

      <div className="cart-list">
        {cart.map((compra) => (
          <div key={compra.id} className="cart-item">
           
            <img src={compra.img} alt={compra.nombre} className="cart-img" />

          
            <span className="cart-item-title">{compra.nombre}</span>

       
            <span className="cart-price">${compra.precio}</span>

           
            <span className="cart-quantity">Cant: {compra.quantity}</span>

         
            <span className="cart-subtotal">
              ${(compra.precio * compra.quantity).toFixed(2)}
            </span>

       
            <button 
              className="btn-delete" 
              onClick={() => removeItem(compra.id)}
              title="Eliminar producto"
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <span className="cart-total">Total: ${total()}</span>
        
        <div className="cart-actions">
          <button className="btn-vaciar" onClick={confirmAccion}>
            Vaciar Carrito
          </button>
          
          <Link to={'/checkout'} className="btn-checkout">
            Terminar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;