import { useContexto } from "./../Context/Context";
import { SpinnerDotted } from "spinners-react";
import "./contenedor.css";
import { Link } from "react-router-dom";

const Contacto = () => {
  const { carga, contacto } = useContexto();

  return (
    <section className="contenedorContacto" id="contacto_">
      <h2 className="titulos">Contacto</h2>
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
          <div className="bloqueContacto">
            <div className="imgContacto">
              <img src={contacto.img} alt="Foto perfil" className="imgPerfil" />
            </div>
            <div className="canalesContacto">
              <h3>Canales de contacto:</h3>
              <div className="bloqueCanales">
                {contacto.Contacto.map((ico, index) => (
                  <Link to={ico.url} className="enlaceRed" key={index}>
                    {" "}
                    <img
                      className="iconContacto"
                      src={ico.img}
                      alt={`Imagen ${ico.red}`}
                      title={ico.red}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contacto;
