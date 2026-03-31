import React from "react";
import DotLoader from "react-spinners/DotLoader";

export default function LoaderComponent() {
  return (
    <div
      style={{
        position: "fixed",   
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",      
        backgroundColor: "white", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,        
      }}
    >
      <DotLoader color="#1852ff" size={200} speedMultiplier={1} />
    </div>
  );
}