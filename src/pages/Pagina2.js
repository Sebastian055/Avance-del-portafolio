import React from "react";
import { Link } from "react-router-dom";
import './Pagina2.css'; 

function Pagina2() {
  return (
    <div className="contenidoo">
      <div className="title">Mi portafolio</div>
      <div className="subtitulo">
        Hola, soy Sebastian Cifuentes Moncada, bienvenido a mi portafolio.
      </div>
      <div className="contenido">
        Hola, me presento soy Sebastian Cifuentes Moncada, un estudiante de la
        institución universitaria Pascual Bravo. En estos momentos estoy
        realizando mi propio portafolio para mi página web.
      </div>
      <div className="navegacion">
        <Link to="/Pagina3" className="siguientepag">
          Siguiente página
        </Link>
        <Link to="/Pagina1" className="anteriorpag">
          Página anterior
        </Link>
      </div>
    </div>
  );
}

export default Pagina2;
