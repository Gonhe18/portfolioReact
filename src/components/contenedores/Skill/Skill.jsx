import { useContexto } from "../../Context/Context";
import { SpinnerDotted } from "spinners-react";

import BloqueSkill from "../../BloqueSkill/BloqueSkill";

import "./skill.css";

const Skill = () => {
  const { carga, skill } = useContexto();

  return (
    <section className="contenedorSkill" id="skills_">
      {carga ? (
        <div className="spinner">
          <SpinnerDotted
            size={90}
            thickness={99}
            speed={97}
            color="rgba(113, 172, 57, 1)"
          />
        </div>
      ) : (
        <>
          <h2 className="titulos">Skills</h2>
          <div className="bloqueSkills">
            <div className="textoSkill">
              <p>
                Esta sección muestra todas los skills que he aprendido hasta el
                momento. Continuando con el proceso de aprendizaje y reforzando
                conocimientos.
              </p>
            </div>
            <div className="bloqueImg">
              <h3 className="textoImg">Desarrolo Web</h3>
              <div className="imgSkill">
              {skill.Skills.map((skill, index) => (
                <BloqueSkill skill={skill} key={index} />
              ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Skill;
