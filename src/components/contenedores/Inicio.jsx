import BotonesPortada from "./../botonesPortada/BotonesPortada";
import { useContexto } from "./../Context/Context";
import { SpinnerDotted } from "spinners-react";
import "./contenedor.css";

const Inicio = () => {
  const { carga, nombre, secciones } = useContexto();

  return (
    <header className="contenedorInicio">
      {carga ? (
        <div className="spinner">
          <SpinnerDotted
            size={90}
            thickness={99}
            speed={97}
            color="rgba(113, 172, 57, 1)"
          />
        </div>
      ) : (
        <>
          <h1 className="titulos tituloPortfolio">{nombre}</h1>
          {secciones.map((sec, index) => (
            <BotonesPortada
              seccion={Object.keys(sec)[1]}
              id={sec.id}
              key={index}
            />
          ))}
        </>
      )}
    </header>
  );
};

export default Inicio;
