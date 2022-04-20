import Portada from "./../portada/Portada";

import "./contenedor.css";

const SobreMi = () => {
  return (
    <div className="contenedorSobreMi">
      <Portada />
      <div className="contenidoSobreMi">
        <div className="bloqueImg">
          <img
            src="../img/peakpx.jpg"
            alt="Foto perfil"
            className="fotoPerfil"
          />
        </div>
        <div className="bloqueSobreMi">
          <h2 className="tituloSobreMi">Sobre Mi</h2>
          <p className="textoSobreMi">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            distinctio quia dolorem a libero officia id veritatis illum veniam
            eaque et ratione at, expedita quasi voluptatem natus mollitia fuga
            eum. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            distinctio quia dolorem a libero officia id veritatis illum veniam
            eaque et ratione at, expedita quasi voluptatem natus mollitia fuga
            eum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
