import React from "react";
import Typed from "react-typed"; // Typewriter effect
import RubberBand from "react-reveal/RubberBand"; // Reveal effect
import Particles from "./ParticlesConfig"; // Interactive background

const Intro = ({ i18n }) => {
  const occupations = [];
  [0, 1, 2].map((i) => occupations.push(i18n.t(`occupations.${i}`)));
  return (
    <>
      <Particles />
      <div className="intro">
        <div className="intro-text">
          <hgroup>
            <RubberBand>
              <h1 className="intro-title">
                {i18n.t("firstName")} {i18n.t("lastName")}
              </h1>
            </RubberBand>
            <h2 className="intro-subtitle">
              <Typed
                strings={occupations}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </h2>
          </hgroup>
        </div>
        <a href="#about" className="scroll-down-arrow"></a>
      </div>
    </>

    /*     var sectionName = document.documentElement.lang === 'pl' ? 'O mnie' : 'About';
    var hello = document.documentElement.lang === 'pl' ? 'Cześć' : 'Hi'; */
  );
};

export default Intro;
