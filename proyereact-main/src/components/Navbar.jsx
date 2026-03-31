import React, { useState } from "react";
import '../css/navbar.css';
import { FiMenu, FiX } from "react-icons/fi"; 
import Cartwidget from "./Cartwidget";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>

        <div className="btn-menu" onClick={toggleMenu}>
          <FiMenu />
        </div>

     
        <NavLink to={'/'} className="logo">
             HP
        </NavLink>

     
        <div className="navbar-right">
            <NavLink to={'/login'} className="login-link">
                Iniciar Sesión
            </NavLink>
            
            <div className="cart-wrapper">
                <Cartwidget />
            </div>
        </div>
      </header>


      <aside className={`menu ${menuOpen ? 'active' : ''}`}>
        <div className="btn-close" onClick={toggleMenu}>
          <FiX />
        </div>
        <nav>
          <ul>
            <li><NavLink to={'/'} onClick={toggleMenu}>Inicio</NavLink></li>
            <li><NavLink to={'/category/Notebooks'} onClick={toggleMenu}>Notebooks</NavLink></li>
            <li><NavLink to={'/category/PCs'} onClick={toggleMenu}>PCs</NavLink></li>
            <li><NavLink to={'/category/Componentes'} onClick={toggleMenu}>Componentes</NavLink></li>
            <li><NavLink to={'/category/Periféricos'} onClick={toggleMenu}>Periféricos</NavLink></li>
            <li><NavLink to={'/category/Ofertas'} onClick={toggleMenu}>Ofertas</NavLink></li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;