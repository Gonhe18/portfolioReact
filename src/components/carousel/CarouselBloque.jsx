import { FcAlarmClock, FcAndroidOs, FcBriefcase } from "react-icons/fc";

import "./carousel.css";

const CarouselBloque = () => {
  return (
    <>
      <section className="contenedorSkills">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <FcAlarmClock className="icoSkills" />
              <span className="nombreSkills">Android</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselBloque;
