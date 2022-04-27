import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDatos } from './../../helpers/obtenerDatos';

const Context = createContext();
export const useContexto = () => useContext(Context);

export function ContextProvider({ children }) {
  const [carga, enCarga] = useState(true);
  const [nombre, enviarNombre] = useState()
  const [secciones, enviarSecciones] = useState({})

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await fetchDatos()
        enviarNombre(datos[0].nombre);
        enviarSecciones(datos[0].secciones);
      } catch (err) {
        console.log(err);
      } finally {
        enCarga(false);
      }
    };
    obtenerDatos();
  }, []);




  
  return (
    <Context.Provider value={{ carga,nombre, secciones }}>{children}</Context.Provider>
  );
}
