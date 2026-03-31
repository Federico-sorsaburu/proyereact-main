import React, { useEffect, useState } from 'react'
import ApiList from './ApiList'
import { useParams } from 'react-router-dom'

const ApiComponent = () => {
  const {id} = useParams();

  const [personajes, setPersonajes] = useState([])

    useEffect(() => {

        fetch('https://dummyjson.com/products/category/laptops')
        .then((res) => res.json())
        .then((response) =>  setPersonajes(response.products)) //guardo respuesta
        .catch((err) => console.log("ERROR:", err))
    },[id])
    console.log(personajes)

  return (
    <div>
      
      
      <ApiList personajes={personajes}/>
    
    
    </div>

  )
}

export default ApiComponent

        