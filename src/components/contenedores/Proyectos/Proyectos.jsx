import { useContexto } from "../../Context/Context";
import { SpinnerDotted } from "spinners-react";
import Tarjetas from "../../Tarjetas/Tarjetas";

import './proyectos.css'

const Proyectos = () => {
  const { carga, proyectos } = useContexto();

  return (
    <section className="contenedorProyectos" id="proyectos_">
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
          <h2 className="titulos tituloProyectos">Proyectos</h2>
          <div className="bloqueProyectos">
            {proyectos.Proyectos.map((proyecto, index) => (
              <Tarjetas proyecto={proyecto} key={index} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Proyectos;
