import Button from "react-bootstrap/Button";

import './btnPortada.css'


const BotonesPortada = () => {
  return (
    <>
      <Button className="botonPortada" id='about' variant="outline-light">Sobre mi</Button>
      <Button className="botonPortada" id='skills' variant="outline-light">Skills</Button>
      <Button className="botonPortada" id='proyectos' variant="outline-light">Proyectos</Button>
      <Button className="botonPortada" id='contacto' variant="outline-light">Contacto</Button>
    </>
  );
};

export default BotonesPortada;
