import React from "react";
import photo from "../img/photo.jpg"; // Personal picture
import Flip from "react-reveal/Flip"; // Reveal effect
const About = ({ i18n }) => {
  return (
    <>
      <section id="about">
        <img
          className="mugshot"
          src={photo}
          alt={i18n.t("myself")}
          title={i18n.t("myself")}
        ></img>
        <Flip top>
          <h2> {i18n.t("about.title")}</h2>
          <p>{i18n.t("about.content")}</p>
        </Flip>
      </section>
    </>
  );
};

export default About;
