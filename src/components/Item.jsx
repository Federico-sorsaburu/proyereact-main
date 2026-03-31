import React from "react";
import '../css/card.css';
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
 
  const { id, nombre, precio, descripcion, img } = prod;

  return (
    <div className="card">

      <div className="card-img-wrapper">
         <img src={img} alt={nombre} className="card-img" />
      </div>

      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        
        
        <div className="card-footer-content">
          
            <p className="card-price">${precio}</p>
            
            <Link className="card-btn" to={`/item/${id}`}>
                Ver Detalles
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;