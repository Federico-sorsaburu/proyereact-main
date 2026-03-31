import React, { useState } from "react";
import Swal from "sweetalert2";
import '../css/card.css'
const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

 
const ejecutarCompra = () => {
  onAdd(count);

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Producto agregado",
    showConfirmButton: false,
    timer: 1500,
    toast: true,
    
    customClass: {
      popup: 'alerta-top-margin'
    }
  });
};
   return (
  <>
    {stock > 0 ? (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <button
              onClick={restar}
              disabled={count === 0}
              style={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                borderRadius: "4px",
                backgroundColor: "white",
                border: "1px solid #ddd",
                cursor: count === 0 ? "not-allowed" : "pointer",
                color: count === 0 ? "#ccc" : "#333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.2s",
              }}
            >
              -
            </button>

            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                minWidth: "40px",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              {count}
            </span>

            <button
              onClick={sumar}
              disabled={count === stock}
              style={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                borderRadius: "4px",
                backgroundColor: "white",
                border: "1px solid #ddd",
                cursor: count === stock ? "not-allowed" : "pointer",
                color: count === stock ? "#ccc" : "#333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.2s",
              }}
            >
              +
            </button>
          </div>

          <button
            onClick={ejecutarCompra}
            disabled={count === 0 || stock === 0}
            style={{
              width: "100%",
              padding: "12px 20px",
              backgroundColor:
                count === 0 || stock === 0 ? "#ccc" : "#222",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              cursor:
                count === 0 || stock === 0 ? "not-allowed" : "pointer",
              letterSpacing: "1px",
              transition: "background-color 0.3s",
            }}
          >
            {stock === 0 ? "Sin Stock" : "Comprar"}
          </button>
        </div>
      </>
    ) : (
      <p> Lo sentimos, por el momento sin stock disponible</p>
    )}
  </>
);

};

export default ItemCount;