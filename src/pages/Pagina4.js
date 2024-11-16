import React from 'react';
import './Pagina4.css'; 

function Pagina4() {
  return (
    <div className="contenidoo">
      <div className="title">Mi portafolio</div>
      <div className="subtitulo">Contacto</div>
      <div className="contenido">
        !Gracias por visitar mi portafolio! Si deseas contactarme, puedes
        enviarme un correo electronico o seguirme en mis redes sociales.
      </div>
      <div className="navegacion">
        <a href="/pagina3" className="anteriorpag">
          Pagina anterior
        </a>
        <a href="/pagina1" className="siguientepag">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default Pagina4;
