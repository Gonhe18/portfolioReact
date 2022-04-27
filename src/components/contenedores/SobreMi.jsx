import Portada from "./../portada/Portada";
import { useContexto } from "./../Context/Context";
import { SpinnerDotted } from "spinners-react";

const SobreMi = () => {
  const { carga, miPerfil } = useContexto();

  return (
    <section className="contenedorSobreMi" id="sobreMi_">
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
          <Portada />
          {miPerfil.Sobre_Mi.map((sec, index) => (
            <div className="contenidoSobreMi" key={index}>
              <div className="bloqueImg">
                <img
                  src={sec.img}
                  alt="Foto perfil"
                  className="fotoSobreMi"
                />
              </div>
              <div className="bloqueSobreMi">
                <h2 className="tituloSobreMi">{Object.keys(miPerfil)[1]}</h2>
                <p className="textoSobreMi">{sec.info}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default SobreMi;
