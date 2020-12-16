import React from "react";
import Zoom from "react-reveal/Zoom"; // Reveal effect
import Flip from "react-reveal/Flip"; // Reveal effect

const Skills = ({ icons, i18n }) => {
  return (
    <>
      <section id="skills">
        <Flip top>
          <h2>{i18n.t("skills.title")}</h2>
          <p>{i18n.t("skills.content")}</p>
        </Flip>

        <Zoom>
          <article className="dev-icons">
            {icons.map((icon) => (
              <div className="dev-icon test" key={icon.id}>
                <i className={`${icon.icon}`}></i>
                <h5>{icon.name}</h5>
              </div>
            ))}
          </article>
        </Zoom>
      </section>
    </>
  );
};

export default Skills;
