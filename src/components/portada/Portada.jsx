import { BiHotel, BiRestaurant, BiCodeAlt, BiRevision } from "react-icons/bi";

import "./Portada.css";

const Portada = () => {
  return (
    <div className="contenedorPortada">
      <div className="itemPortada">
        <BiHotel className="iconoPortada" />
        <h2>
          sleep<span style={{ color: "yellow" }}>()</span>;
        </h2>
      </div>
      <div className="itemPortada">
        <BiRestaurant className="iconoPortada" />
        <h2>
          eat<span style={{ color: "green" }}>()</span>;
        </h2>
      </div>
      <div className="itemPortada">
        <BiCodeAlt className="iconoPortada" />
        <h2>
          code<span style={{ color: "cyan" }}>()</span>;
        </h2>
      </div>
      <div className="itemPortada">
        <BiRevision className="iconoPortada" />
        <h2>
          repeat<span style={{ color: "red" }}>()</span>;
        </h2>
      </div>
    </div>
  );
};

export default Portada;
