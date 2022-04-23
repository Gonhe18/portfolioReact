import React from "react";

const Contacto = () => {
  return (
    <section className="contenedorContacto">
      <h2 className="tituloPortfolio">Contacto</h2>
      <div className="bloqueContacto">
        <div className="imgContacto">
          <img
            src="../img/peakpx.jpg"
            alt="Foto perfil"
            className="imgPerfil"
          />
        </div>
        <div className="canalesContacto">
          <h3>Gracias por llegar hasta aquí!!</h3>
          <ul>
            <li>LinkedIn</li>
            <li>Email</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
