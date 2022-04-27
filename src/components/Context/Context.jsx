import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDatos } from "./../../helpers/obtenerDatos";

const Context = createContext();
export const useContexto = () => useContext(Context);

const perfilCompleto = JSON.parse(localStorage.getItem("Perfil")) || [];

export function ContextProvider({ children }) {
  const [carga, enCarga] = useState(true);
  const [perfil, enviarPerfil] = useState(perfilCompleto[0]);
  const [nombre, enviarNombre] = useState();
  const [secciones, enviarSecciones] = useState([]);
  const [miPerfil, enviarMiPerfil] = useState({});
  const [skill, enviarSkill] = useState({});
  const [proyectos, enviarProyectos] = useState({});
  const [contacto, enviarContacto] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await fetchDatos();
        localStorage.setItem("Perfil", JSON.stringify(datos));
      } catch (err) {
        console.log(err);
      } finally {
        enCarga(false);
      }
    };
    obtenerDatos();
  }, []);

  useEffect(() => {
    const recolectarDatos = () => {
      enviarNombre(perfil.nombre);
      enviarSecciones(perfil.secciones);

      for (let sec of secciones) {
        sec.id === "sobreMi" && enviarMiPerfil(sec);
        sec.id === "skills" && enviarSkill(sec);
        sec.id === "proyectos" && enviarProyectos(sec);
        sec.id === "contacto" && enviarContacto(sec);
      }
    };
    recolectarDatos();
  }, [perfil, secciones]);

  return (
    <Context.Provider
      value={{
        enviarPerfil,
        carga,
        nombre,
        secciones,
        miPerfil,
        skill,
        proyectos,
        contacto,
      }}
    >
      {children}
    </Context.Provider>
  );
}
