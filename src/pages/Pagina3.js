import React from 'react';
import './Pagina3.css'; 

function Pagina3() {
  return (
    <div className="contenidoo">
      <div className="title">Mi portafolio</div>
      <div className="subtitulo">Proyectos destacados</div>
      <div className="contenido">
        Aqui puedes explorar algunos de mis proyectos mas interesantes. Cada uno
        de ellos muestra mis habilidades y experiencia en desarrollo web.
      </div>
      <div className="navegacion">
        <a href="/pagina4" className="siguientepag">
          Siguiente pagina
        </a>
        <a href="/pagina2" className="anteriorpag">
          Pagina anterior
        </a>
      </div>
    </div>
  );
}

export default Pagina3;
