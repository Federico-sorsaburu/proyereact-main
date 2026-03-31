import React from 'react'
import '../css/hero.css'
import { Link } from 'react-router-dom'
const Hero = ({greeting="hola"}) => {
  return (
     <section className="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <h1 className="hero-title">{greeting} <span className='title'>Tecnologica</span> </h1>
          <p className="hero-sub">
             Innovación, diseño y rendimiento en un solo lugar.  
            Descubrí la nueva generación de tecnología pensada para potenciar tu día.
          </p>

          <div className="hero-ctas">
          <a href="#ofertas" className="btn btn-primary">Ofertas</a>
            <a href="/explore" className="btn btn-outline">Explorar</a>
          </div>
        </div>

        <div className="hero-image">
        <img src="/hero.png" alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero