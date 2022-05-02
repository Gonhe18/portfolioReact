import Inicio from "./components/contenedores/Inicio/Inicio";
import SobreMi from "./components/contenedores/SobreMi/SobreMi";
import Skill from "./components/contenedores/Skill/Skill";
import Proyectos from "./components/contenedores/Proyectos/Proyectos";
import Contacto from "./components/contenedores/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { ContextProvider } from "./components/Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/sobreMi" element={<SobreMi title={"Sobre mi"} />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <Footer />
          </div>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
