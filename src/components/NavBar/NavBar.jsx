import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useContexto } from "./../Context/Context";

import "./navbar.css";

const NavBar = () => {
  const { nombre} = useContexto();
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container className="m-0 contenedorNav">
          <NavLink to="/" className="tituloNavbar" >{nombre}</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="desplegable">
            <Nav >
              <NavLink className="mx-4 opcionesNav" to="/sobreMi">Sobre Mi</NavLink>
              <NavLink className="mx-4 opcionesNav" to="/skills">Skills</NavLink>
              <NavLink className="mx-4 opcionesNav" to="/proyectos">Proyectos</NavLink>
              <NavLink className="mx-4 opcionesNav" to="/contacto">Contacto</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
