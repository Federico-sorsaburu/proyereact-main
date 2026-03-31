import React from 'react';
import { Link } from 'react-router-dom';
Link
const Error = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>404 — Página no encontrada</h1>
    <p style={styles.text}>
      Lo sentimos, la página que buscas no existe.
    </p>
    <Link to='/'style={styles.decoration} >Volver al inicio</Link>
  </div>
);

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
   
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
  decoration: {
    textDecoration:'none',
    color:'black',
    fontSize: '2rem',
    margin:'100px'
  }
};

export default Error;
