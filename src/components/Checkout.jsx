 import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import EmptyCart from './EmptyCart'
import '../css/check.css'

const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [secondMail, setSecondMail] = useState('')
  const { cart, total, clear } = useContext(CartContext)
  const [error, setError] = useState(null)
  const [orderId, setOrderId] = useState(null)

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const finalizarCompra = (e) => {
    e.preventDefault()
    if (!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address) {
      setError('Por favor complete los campos obligatorios')
    } else if (buyer.mail !== secondMail) {
      setError('Los correos no coinciden')
    } else {
      setError(null)
      let order = {
        comprador: buyer,
        compras: cart,
        total: total(),
        fecha: serverTimestamp()
      }
      const ventas = collection(db, "orders")

      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id)
          clear()
        })
        .catch((err => console.log(err)))
    }
  }

  if (!cart.length && !orderId) {
    return <EmptyCart />
  }

  return (
    <div className='checkout-container'>
      {orderId ? (
        <div className='success-container'>
          <h2 style={{color: '#5c5cff'}}>¡Gracias por su compra!</h2>
          <p>Su orden ha sido generada con éxito.</p>
          <p>ID de Orden: <span className='order-badge'>{orderId}</span></p>
          <br/>
          <Link to={'/'} className='submit-btn' style={{textDecoration:'none', display:'inline-block', width:'auto', padding: '10px 30px'}}>
             Volver al Inicio
          </Link>
        </div>
      ) : (
        <div>
          {/* TÍTULO LIMPIO SIN FONDO OSCURO */}
          <h1 className='checkout-title'>Finalizar Compra</h1>
          <p className='checkout-subtitle'>Completa tus datos para el envío</p>
          
          {error && <span className='error-msg'>{error}</span>}

          <form onSubmit={finalizarCompra}>
            
            <div className='form-group'>
              <label className='input-label'>Nombre</label>
              <input type="text" className='form-input' name='name' placeholder='Ej: Juan' onChange={buyerData} />
            </div>

            <div className='form-group'>
              <label className='input-label'>Apellido</label>
              <input type="text" className='form-input' name='lastname' placeholder='Ej: Pérez' onChange={buyerData}/>
            </div>

            <div className='form-group'>
              <label className='input-label'>Dirección de entrega</label>
              <input type="text" className='form-input' name='address' placeholder='Calle Falsa 123' onChange={buyerData}/>
            </div>

            <div className='form-group'>
              <label className='input-label'>Correo Electrónico</label>
              <input type="email" className='form-input' name='mail' placeholder='juan@ejemplo.com' onChange={buyerData} />
            </div>

            <div className='form-group'>
              <label className='input-label'>Confirmar Correo</label>
              <input type="email" className='form-input' name='secondmail' placeholder='Repite tu correo' onChange={(e) => setSecondMail(e.target.value)} />
            </div>
            
            <button type='submit' className='submit-btn'>Confirmar y Pagar</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Checkout