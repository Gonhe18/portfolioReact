import { Link } from "react-router-dom";

import "./tarjetas.css";

const Tarjetas = ({ proyecto }) => {
  return (
    <div className="cardProyecto">
      <div className="icon">
        <img src={proyecto.img} alt={`Imagen Proyecto ${proyecto.titulo}`} />
      </div>
      <div className="info__description">
        <h4 className="tituloDescripcion">{proyecto.titulo}</h4>
        <p>{proyecto.descripcion}</p>
        <div className="bloqueEnlaces">
          <Link to={proyecto.demo} className="enlaceProyecto">
            <span className="demo">Demo</span>
          </Link>
          <Link to={proyecto.repo} className="enlaceProyecto">
            <span className="repo">Repo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
