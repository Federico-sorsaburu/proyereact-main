import React from 'react'
import Item from './Item'
import '../css/card.css'

const ItemList = ({data}) => {
  return (
    <div className="item-list-container" >
     
        {data.map((prod) => <Item   key={prod.id} prod={prod }  />)}   
    </div>
  )
}

export default ItemList