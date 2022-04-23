const Proyectos = () => {
  return (
    <section className="contenedorProyectos">
      <h2 className="tituloPortfolio tituloProyectos">Proyectos</h2>

      <div className="bloqueProyectos">
        <div className="cardProyecto">
          <div className="icon">
            <img src="../img/homero.jpg" alt="" />
          </div>
          <div className="info__description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              nemo a corrupti error ullam labore exercitationem facere
            </p>
            <span className="demo">Demo</span>
            <span className="repo">Repositorio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
