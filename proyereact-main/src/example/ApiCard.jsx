import React from 'react'
import '../css/card.css';
import { Link } from 'react-router-dom';
Link
const ApiCard = ({pj}) => {
  return (
   <div className="card" >
     
      <img src={pj.images[0]} alt={pj.title} className="card-img" />

      <div className="card-body">
        <h5 className="card-title">{pj.title}</h5>
        <p className="card-text"></p>
        <p className="card-price">${pj.price}</p>
        <Link  to={`/api/${pj.id}`} >Ver Detalles</Link  >
         
      </div>
    </div>
  )
}

export default ApiCard