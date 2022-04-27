import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";

const Contacto = () => {
  return (
    <section className="contenedorContacto" id='contacto_'>
      <h2 className="titulos">Contacto</h2>
      <div className="bloqueContacto">
        <div className="imgContacto">
          <img
            src="../img/peakpx.jpg"
            alt="Foto perfil"
            className="imgPerfil"
          />
        </div>
        <div className="canalesContacto">
          <h3>Canales de contacto:</h3>
          <ul>
            <li><FaLinkedin className="iconContacto linkedin" title="Linkedin"/></li>
            <li><FaRegEnvelope className="iconContacto email" title='Email'/></li>
            <li><FaGithub className="iconContacto gitHub" title='GitHub'/></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
