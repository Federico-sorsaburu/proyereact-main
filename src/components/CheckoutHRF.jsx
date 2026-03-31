import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { data, Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import EmptyCart from "./EmptyCart";
import "../css/check.css";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const CheckoutHRF = () => {
  const { cart, total, clear } = useContext(CartContext);
  const [Loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  console.log(errors, "error");

 const finalizarCompra = (dataForm) => {
    
    setLoading(true);

    let order = {
      comprador: {
        name: dataForm.name,
        lastname: dataForm.lastname,
        address: dataForm.address,
        email: dataForm.email,
      },
      compras: cart,
      total: total(),
      fecha: serverTimestamp(),
    };
    
    const ventas = collection(db, "orders");

    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        clear();

      
        Swal.fire({
          title: "¡Formulario completado!",
          text: "Gracias por tu compra, nos contactaremos pronto.",
          icon: "success",
          draggable: true, 
          confirmButtonText: "Entendido"
        });
        // -------------------------
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="success-container">
          <h2 style={{ color: "#5c5cff" }}>¡Gracias por su compra!</h2>
          <p>Su orden ha sido generada con éxito.</p>
          <p>
            ID de Orden: <span className="order-badge">{orderId}</span>
          </p>
          <br />
          <Link
            to={"/"}
            className="submit-btn"
            style={{
              textDecoration: "none",
              display: "inline-block",
              width: "auto",
              padding: "10px 30px",
            }}
          >
            Volver al Inicio
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="checkout-title">Finalizar Compra</h1>
          <p className="checkout-subtitle">Completa tus datos para el envío</p>

          <form onSubmit={handleSubmit(finalizarCompra)}>
            <div className="form-group">
              <label className="input-label">Nombre</label>
              {errors?.name?.type === "required" && (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  El nombre es requerido
                </span>
              )}
              <input
                type="text"
                className="form-input"
                name="name"
                placeholder="Ej: Juan"
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors?.name?.type === "minLength" && (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  El campo debe contener 7 caracteres
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="input-label">Apellido</label>
              <input
                type="text"
                className="form-input"
                name="lastname"
                placeholder="Ej: Pérez"
                {...register("lastname")}
              />
            </div>

            <div className="form-group">
              <label className="input-label">Dirección de entrega</label>
              <input
                type="text"
                className="form-input"
                name="address"
                placeholder="Calle Falsa 123"
                {...register("address", { required: true, minLength: 5 })}
              />
              {errors?.address?.type === "minLength" && (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  El campo debe contener 7 caracteres
                </span>
              )}
              {errors?.address?.type === "required" && (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  la direccion es requerida para la entrega
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="input-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-input"
                name="mail"
                placeholder="juan@ejemplo.com"
                {...register("email", { required: true, minLength: 7 })}
              />
              {errors?.email?.type === "required" && (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Correo obligatorio
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="input-label">Confirmar Correo</label>
              <input
                type="email"
                className="form-input"
                name="secondmail"
                placeholder="Repite tu correo"
                {...register("secondmail", {
                  required: true,
                  validate: {
                    equalsMails: (mail2) => mail2 === getValues().email,
                  },
                })}
              />
              {errors?.secondmail?.type === "required" && (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Repeti tu correo nuevamente
                </span>
              )}
              {errors?.secondmail?.type === "equalsMails" && (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Los correos no coinciden, volver a intentar
                </span>
              )}
            </div>

            <button type="submit" className="submit-btn" disabled={Loading} >
              {Loading ? "Procesando Compra" : "Confirmar y Pagar"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutHRF;
