import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pagina1.css"; 

function Pagina1() {
  const [backgroundColor, setBackgroundColor] = useState("#1f1d1d");

  const handleMouseEnter = () => {
    setBackgroundColor("#333");
  };

  const handleMouseLeave = () => {
    setBackgroundColor("#1f1d1d");
  };

  return (
    <div
      className="pagina1"
      style={{ backgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="title">Portafolio</h1>
      <div className="nombre">Sebastian Cifuentes</div>
      <Link to="/Pagina2" className="siguientepag">
        Siguiente página
      </Link>
    </div>
  );
}

export default Pagina1;
