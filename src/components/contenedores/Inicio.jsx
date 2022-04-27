import BotonesPortada from "./../botonesPortada/BotonesPortada";
import { useContexto } from "./../Context/Context";

import "./contenedor.css";

const Inicio = () => {
  const { carga, nombre, secciones } = useContexto();


  return (
    <header className="contenedorInicio">
      {!carga && (
        <>
          <h1 className="titulos tituloPortfolio">{nombre}</h1>
          {secciones.map((sec, index) => (
            <BotonesPortada seccion={Object.keys(sec)[1]} id={sec.id} key={index} />
          ))}
        </>
      )}
    </header>
  );
};

export default Inicio;
