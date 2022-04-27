import Inicio from "./components/contenedores/Inicio";
import SobreMi from "./components/contenedores/SobreMi";
import Skill from "./components/contenedores/Skill";
import Proyectos from "./components/contenedores/Proyectos";
import Contacto from "./components/contenedores/Contacto";
import Footer from "./components/Footer/Footer";
import { ContextProvider } from "./components/Context/Context";
import { BrowserRouter} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Inicio />
          <SobreMi />
          <Skill />
          <Proyectos />
          <Contacto />
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
