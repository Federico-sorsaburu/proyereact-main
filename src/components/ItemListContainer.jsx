import React, { useEffect, useState } from 'react';
import '../css/hero.css'; 
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemListContainer = (props) => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const banners = {
    "Notebooks": "https://i.postimg.cc/BZwShW4f/banner-notebook.jpg",
    "PCs": "https://i.postimg.cc/43f2FQCL/3d663f6a-6fc0-4211-9a1a-ca32d6d759ab.jpg"
  };
  
  const imgFondo = banners[type]; 

  useEffect(() => {
    setLoader(true);
    
    // 1. Referencia a la colección
    const productsRef = collection(db, "productos");
    
    // 2. Crear la query segura
   
    const q = type 
      ? query(productsRef, where("categoria", "==", type)) 
      : productsRef;

    // 3. Ejecutar la petición
    getDocs(q)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        console.log("Datos traídos de Firebase:", list); 
        setData(list);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));

  }, [type]); 

 return (
    <>
      {loader ? (
        <LoaderComponent />
      ) : (
 
        <div id="ofertas" style={{ paddingTop: '50px' }}>
          
          {imgFondo && (
            <div 
              style={{
                backgroundImage: `linear-gradient(rgba(1, 27, 99, 0.6), rgba(0, 0, 0, 0.6)), url('${imgFondo}')`,
                height: '450px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0 0 20px 20px',
                marginBottom: '40px'  
              }}
            >
               <h1 style={{ 
                   color: '#fff', 
                   fontSize: '6rem', 
                   textTransform:'uppercase',
                   fontWeight: 'bold',
                   textShadow: '2px 2px 4px rgba(0,0,0,0.7)' 
               }}>
                 {type}
               </h1>
            </div>
          )}

          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;