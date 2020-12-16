import React, { useState, useContext } from "react";
import { DataContext } from "../components/Context/DataContext";
import Bounce from "react-reveal/Bounce"; // Reveal effect
import { useTranslation } from "react-i18next"; // Translation module
const Footer = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1b1a1a"
          fillOpacity="1"
          d="M0,64L720,160L1440,64L1440,320L720,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <Bounce left>
          <address>
            {content.contactLinks.map((link) => (
              <a
                href={link.path}
                title={link.name}
                key={link.id}
                target="blank"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </address>
        </Bounce>
        <div className="made-with-react">
          <p> {i18n.t("madeWith")} </p>
          <i className={content.icons[3].icon}></i>
        </div>
        <small>
          &copy;2020 {i18n.t("firstName")} {i18n.t("lastName")}
        </small>
      </footer>
    </>
  );
};

export default Footer;
