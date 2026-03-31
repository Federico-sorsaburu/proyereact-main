import "./App.css";

import Hero from "./components/Hero";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ApiComponent from "./example/ApiComponent";
import withLogin from "./hoc/withLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from "./context/CartContext";
import LoaderComponent from "./components/LoaderComponent";
import { useEffect, useState } from "react";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";
import CheckoutHRF from "./components/CheckoutHRF";

function App() {
 
  const componenteConHoc = withLogin(ApiComponent);
  const ContadorConHoc = withLogin(ItemCount);


  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader && <LoaderComponent />}

      {!loader && (
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero greeting="Tienda " />
                    <ItemListContainer saludar="" />
                  </>
                }
              />

              <Route
                path="/category/:type"
                element={
                  <ItemListContainer saludar="Bienvenidos a categorias:" />
                }
              />

              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/api" element={<ApiComponent />} />
              <Route path="/api/:id" element={<ApiComponent />} />
              <Route path="/cart" element={<CartContainer/>} />
              {/* <Route path="/carrito" element={}></Route> */}
              <Route path="/checkout" element={<CheckoutHRF/>}></Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
