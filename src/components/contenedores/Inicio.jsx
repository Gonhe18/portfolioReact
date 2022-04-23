import BotonesPortada from "./../botonesPortada/BotonesPortada";

import "./contenedor.css";

const Inicio = () => {
  return (
    <header className="contenedorInicio">
      <h1 className="tituloPortfolio">Gonzalo Bazzani</h1>
      <BotonesPortada />
    </header>
  );
};

export default Inicio;
