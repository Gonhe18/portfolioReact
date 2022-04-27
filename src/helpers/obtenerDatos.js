export const fetchDatos = async () => {
  const resp = await fetch("../API/datos.json");
  const data = await resp.json();
  return data
};
