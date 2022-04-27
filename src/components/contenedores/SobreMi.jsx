import Portada from "./../portada/Portada";

const SobreMi = () => {
  return (
    <section className="contenedorSobreMi" id='sobreMi_'>
      <Portada />
      <div className="contenidoSobreMi">
        <div className="bloqueImg">
          <img
            src="../img/peakpx.jpg"
            alt="Foto perfil"
            className="fotoSobreMi"
          />
        </div>
        <div className="bloqueSobreMi">
          <h2 className="tituloSobreMi">Sobre Mi</h2>
          <p className="textoSobreMi">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            distinctio quia dolorem a libero officia id veritatis illum veniam
            eaque et ratione at, expedita quasi voluptatem natus mollitia fuga
            eum. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            distinctio quia dolorem a libero officia id veritatis illum veniam
            eaque et ratione at, expedita quasi voluptatem natus mollitia fuga
            eum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
