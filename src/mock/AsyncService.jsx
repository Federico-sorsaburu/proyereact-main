export const productos = [
  // --- PRODUCTOS ORIGINALES ---
  // {
  //   id: 1,
  //   nombre: "Notebook Lenovo Ideapad 3",
  //   categoria: "Notebooks",
  //   descripcion: "Intel i5, 8GB RAM, 512GB SSD",
  //   precio: 75000,
  //   stock: 10,
  //   img: "https://i.postimg.cc/NG7GvFNt/producto1.png"
  // },
  // {
  //   id: 2,
  //   nombre: "MacBook Air M2",
  //   categoria: "Notebooks",
  //   descripcion: "Chip Apple M2, 8GB RAM, 256GB SSD",
  //   precio: 220000,
  //   stock: 5,
  //   img: "https://i.postimg.cc/wB736z1F/producto2-removebg-preview.png"
  // },
  {
   // id: 3,
    nombre: "PC Gamer Dell",
    categoria: "PCs",
    descripcion: "AMD Ryzen 7, 16GB RAM, RTX 3060, SSD 1TB",
    precio: 180000,
    stock: 5,
    img: "https://i.postimg.cc/s1dgmGKC/producto4-removebg-preview.png"
  },
  {
   // id: 4,
    nombre: "PC Office Lenovo",
    categoria: "PCs",
    descripcion: "Intel i5, 8GB RAM, SSD 512GB",
    precio: 85000,
    stock: 12,
    img: " https://i.postimg.cc/s1dgmGKC/producto4-removebg-preview.png"
  },
  {
   // id: 5,
    nombre: "Placa Madre ASUS B550",
    categoria: "Componentes",
    descripcion: "Compatible con AMD Ryzen",
    precio: 20000,
    stock: 8,
    img: "https://i.postimg.cc/15BzwX6r/producto5.png"
  },
  {
   // id: 6,
    nombre: "Tarjeta Gráfica RTX 3060",
    categoria: "Componentes",
    descripcion: "12GB GDDR6, ideal para gaming y diseño",
    precio: 120000,
    stock: 3,
    img: "https://i.postimg.cc/VLm6JnS6/producto6.png"
  },
  {
   // id: 7,
    nombre: "Teclado Mecánico Logitech",
    categoria: "Periféricos",
    descripcion: "RGB, switches azules",
    precio: 12000,
    stock: 15,
    img: "https://i.postimg.cc/j2QS8d1W/producto7.png"
  },
  {
   // id: 8,
    nombre: "Mouse Gamer Razer",
    categoria: "Periféricos",
    descripcion: "Sensor óptico 16000 DPI, RGB",
    precio: 9000,
    stock: 20,
    img: "https://i.postimg.cc/RFJ3Tm9K/producto8-removebg-preview.png"
  },
  {
   // id: 9,
    nombre: "Monitor LG 27'' 4K",
    categoria: "Periféricos",
    descripcion: "Pantalla IPS, 4K, 60Hz",
    precio: 45000,
    stock: 6,
    img: "https://i.postimg.cc/J4VXPssz/producto9-removebg-preview-1.png"
  },
  {
   // id: 10,
    nombre: "Auriculares HyperX",
    categoria: "Periféricos",
    descripcion: "USB, sonido envolvente, microfono",
    precio: 8000,
    stock: 10,
    img: "https://i.postimg.cc/VkzCP29h/producto9-removebg-preview.png"
  },

  // --- NUEVA CATEGORÍA: OFERTAS (Combos) ---
  {
   // id: 11,
    nombre: "Combo Gamer Cyberpunk",
    categoria: "Ofertas",
    descripcion: "PC i9 + Monitor + Kit Periféricos Violeta",
    precio: 350000,
    stock: 2,
    img: "https://i.postimg.cc/DZM9tDDs/1-removebg-preview.png"
  },
  {
   // id: 12,
    nombre: "Super Combo FIFA/COD",
    categoria: "Ofertas",
    descripcion: "PC Ryzen 9 + Monitor + Juegos Incluidos",
    precio: 380000,
    stock: 3,
    img: "https://i.postimg.cc/hj5kHwwf/8-removebg-preview.png"
  },
  {
   // id: 13,
    nombre: "Setup Streamer Curvo",
    categoria: "Ofertas",
    descripcion: "PC Alta Gama + Monitor Curvo 27'' + Teclado 60%",
    precio: 320000,
    stock: 4,
    img: "https://i.postimg.cc/rmPBvbbF/10-removebg-preview.png"
  },
  {
   // id: 14,
    nombre: "Combo Home Studio 27",
    categoria: "Ofertas",
    descripcion: "PC Diseño + Monitor 27'' Plano + Kit RGB",
    precio: 290000,
    stock: 4,
    img: "https://i.postimg.cc/FRBM2qqH/11-removebg-preview.png"
  },
  {
   // id: 15,
    nombre: "Edición Especial GTA VI",
    categoria: "Ofertas",
    descripcion: "PC Temática GTA + Monitor + Periféricos",
    precio: 400000,
    stock: 1,
    img: "https://i.postimg.cc/xC4wW77X/7-removebg-preview.png"
  },
  {
   // id: 16,
    nombre: "Combo Valorant Pro",
    categoria: "Ofertas",
    descripcion: "PC Competitiva + Monitor 144Hz + Skin Exclusiva",
    precio: 310000,
    stock: 5,
    img: "https://i.postimg.cc/ZRMG1ggR/9-removebg-preview.png"
  },
  {
   // id: 17,
    nombre: "Combo MSI Dragon Red",
    categoria: "Ofertas",
    descripcion: "PC Full MSI + Monitor + GPU Dedicada",
    precio: 360000,
    stock: 2,
    img: "https://i.postimg.cc/hj5kHwwQ/6-removebg-preview.png"
  },

  // --- NUEVOS INGRESOS EN CATEGORÍAS EXISTENTES ---

 
  {
   // id: 18,
    nombre: "PC ViprTech White",
    categoria: "PCs",
    descripcion: "Build All-White, Ryzen 5, 16GB RAM, RTX 3060",
    precio: 210000,
    stock: 3,
    img: "https://i.postimg.cc/Tw4zZSSD/4-removebg-preview.png"
  },
  {
   // id: 19,
    nombre: "PC Gamer Cube X99",
    categoria: "PCs",
    descripcion: "Gabinete Cubo, Xeon E5, 32GB RAM, GTX 1080",
    precio: 150000,
    stock: 6,
    img: "https://i.postimg.cc/j5FpG99f/3-removebg-preview.png"
  },
  {
  //  id: 20,
    nombre: "PC Hardmaster Ultra RGB",
    categoria: "PCs",
    descripcion: "Intel i7 12th Gen, Refrigeración Líquida, 32GB",
    precio: 280000,
    stock: 2,
    img: "https://i.postimg.cc/d1xbzXXT/5-removebg-preview.png"
  },

 
  {
   // id: 21,
    nombre: "Auriculares Gamer Pro Black",
    categoria: "Periféricos",
    descripcion: "Sonido 7.1, Cancelación de ruido, USB",
    precio: 15000,
    stock: 15,
    img: "https://i.postimg.cc/wvGCSPPx/12-removebg-preview.png"
  },
  {
   // id: 22,
    nombre: "Redragon Zeus White",
    categoria: "Periféricos",
    descripcion: "Drivers 53mm, Multiplataforma, Blanco/Gris",
    precio: 25000,
    stock: 10,
    img: "https://i.postimg.cc/63mkDSSw/13-removebg-preview.png"
  },
  {
   // id: 23,
    nombre: "Mouse Ultralight Honeycomb",
    categoria: "Periféricos",
    descripcion: "Diseño ultraligero, sensor PMW3360",
    precio: 11000,
    stock: 20,
    img: "https://i.postimg.cc/wvGCSPPd/14-removebg-preview.png"
  },
  {
   // id: 24,
    nombre: "Kit Teclado + Mouse RGB",
    categoria: "Periféricos",
    descripcion: "Combo de entrada, membrana, retroiluminado",
    precio: 8500,
    stock: 25,
    img: "https://i.postimg.cc/Tw4zZSSx/15-removebg-preview.png"
  },

  // Componentes (Links de MercadoLibre/Genéricos)
  {
   // id: 25,
    nombre: "Placa de Video RX 6700 XT",
    categoria: "Componentes",
    descripcion: "12GB VRAM, ideal para 1440p",
    precio: 145000,
    stock: 4,
    img: "https://i.postimg.cc/0QBTL338/D-NQ-NP-2X-600728-MLA98474514620-112025-F-removebg-preview.png"
  },
  {
   // id: 26,
    nombre: "Motherboard Gigabyte B450",
    categoria: "Componentes",
    descripcion: "Socket AM4, soporte M.2 NVMe",
    precio: 35000,
    stock: 10,
    img: "https://i.postimg.cc/xC4wW779/D-NQ-NP-2X-994584-MLA98178719412-112025-F-removebg-preview.png"
  }
];
export const getProducts = () =>{
  let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(error){
          reject('Hubo un error, Intente mas tarde')
        }else{
          resolve(productos)
        }

      },2000)
    })
}

export const getOneProduct = (id) => {
console.log("ID recibido:", id, "tipo:", typeof id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
      let prod = productos.find((prod) => prod.id == id)
      resolve(prod)
    }, 2000)
  })

}