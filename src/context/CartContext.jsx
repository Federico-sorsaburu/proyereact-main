import { createContext, useEffect, useState } from "react";
//creamos el contexto y lo exportamos
export const CartContext = createContext();
const carritoLocal = JSON.parse(localStorage.getItem('carrito')) || []
//crear provedor

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLocal);
  const valorDelContexto = {};
  //todas las funciones/funcionalidades que modifiquen el carrito
  //Agregar un item al carrito


  useEffect(()=> {
    localStorage.setItem('carrito', JSON.stringify(cart))
  },[cart])
 

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id) {
          //si es asi, se actualiza
          return { ...prod, quantity: prod.quantity + qty };
        } else {
          //todos los que restan los voy a devolver sin modificar
          return prod;
        }
      });
      setCart(carritoActualizado);
      //existe, sumo cantidad
      console.log("ya esta en el carrito");
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };
  //Eliminar Item al carrito

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };
  //limpiar carrito
  const clear = () => {
    setCart([]);
  };

  //devuelva un bool si existe o no ese item
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  //total

  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.precio), 0);
  };
  //cantidad total

  const cartQuantity = () => {
   
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
};

//funcion para descontar el stock

const itemQuantity = (id) => {
  const itemInCart = cart.find((prod) => prod.id === id)
  if(itemInCart ){
    return itemInCart.quantity
  }else{
    //si no existe
    return 0
  }
}
  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear,total,cartQuantity,itemQuantity}}>
        {children}
      </CartContext.Provider>
    </>
  );
};

