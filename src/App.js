import Inicio from "./components/contenedores/Inicio";
import SobreMi from "./components/contenedores/SobreMi";
import Skill from "./components/contenedores/Skill";
import Proyectos from "./components/contenedores/Proyectos";
import Contacto from './components/contenedores/Contacto';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>

      <Inicio />
      <SobreMi />
      <Skill />
      <Proyectos />
      <Contacto/>

    </>
  );
}

export default App;
