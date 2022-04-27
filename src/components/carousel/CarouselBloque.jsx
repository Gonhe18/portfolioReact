import "./carousel.css";

const CarouselBloque = ({ skill }) => {

  return (
    <div className="slide">
      <img className="icoSkills" src={skill.img} alt={`Icono${skill.skill}`} />
      <span className="nombreSkills">{skill.skill}</span>
    </div>
  );
};

export default CarouselBloque;
