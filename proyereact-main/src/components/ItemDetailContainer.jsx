import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/AsyncService'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import LoaderComponent from './LoaderComponent'
const ItemDetailContainer = () => {
 const {id} = useParams()

    const [detalle, setDetalle] = useState({})
  const [loader, setLoader] = useState(false);
  const [invalid, setInterval] = useState(null)


  //firebase

  useEffect(()=> {
    setLoader(true)
    //referencia de un docs

     const docRef = doc(db, "productos",id)
    //traer doc
     getDoc(docRef)
     .then((res) =>{
      if(res.data()){
        setDetalle({id: res.id, ...res.data()})
      }else{
        setInterval(true)
        
      }
     })
     .catch((err) => console.log(err))
     .finally(() =>setLoader(false))
  },[id])
if(invalid){
  return <div>

  <h1>Producto No existente</h1>
  <Link to='/'>Volver a comprar</Link>

  </div>
}


    // useEffect(() => {
    //     getOneProduct(id)
    //     .then((res) => setDetalle(res))
    //     .catch((err) => console.log(err))
    // },[id])

  return (
    <>
    {loader ? <LoaderComponent/> :<ItemDetail detalle={detalle}/> }

     
    </>
  )
}

export default ItemDetailContainer