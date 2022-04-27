import Button from "react-bootstrap/Button";

import "./btnPortada.css";

const BotonesPortada = ({ seccion, id }) => {
  return (
    <>
      <a href={`/#${id}_`} className="enlaceSeccion">
        <Button className="botonPortada" id={id} variant="outline-light">
          {seccion}
        </Button>
      </a>
    </>
  );
};

export default BotonesPortada;
