import "./tarjetas.css";

const Tarjetas = ({ proyecto }) => {
  return (
    <article className="cardProyecto">
      <div className="imgProyecto">
        <img
          src={proyecto.img}
          alt={`Imagen Proyecto ${proyecto.titulo}`}
        />
      </div>
      <div className="info__description">
        <h3>{proyecto.titulo}</h3>
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
    </article>
  );
};

export default Tarjetas;
