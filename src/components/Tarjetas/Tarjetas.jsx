
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
          <a href={proyecto.demo} className="enlaceProyecto">
            <span className="demo">Demo</span>
          </a>
          <a href={proyecto.repo} className="enlaceProyecto">
            <span className="repo">Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
