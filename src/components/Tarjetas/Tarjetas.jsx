import "./tarjetas.css";

const Tarjetas = () => {
  return (
    <div className="bloqueProyectos">
      <div className="cardProyecto">
        <div className="icon">
          <img src="../img/homero.jpg" alt="" />
        </div>
        <div className="info__description">
          <h4 className="tituloDescripcion">titulo Proyecto</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nemo
            a corrupti error ullam labore exercitationem facere
          </p>
          <span className="demo">Demo</span>
          <span className="repo">Repositorio</span>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
