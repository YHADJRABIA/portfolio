import React, { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

//Holds the data to be provided. To be imported by App.js.
export const DataProvider = (props) => {
  const { t, i18n } = useTranslation();

  const content = {
    // Nav

    languages: [
      { name: i18n.t("languages.en"), code: "en", flag: "gb", id: 1 },
      { name: i18n.t("languages.fr"), code: "fr", flag: "fr", id: 2 },
      { name: i18n.t("languages.ru"), code: "ru", flag: "ru", id: 3 },
      { name: i18n.t("languages.sv"), code: "sv", flag: "se", id: 4 },
    ],
    navTitles: [
      { name: i18n.t("navNames.about"), path: "#about", id: 1 },
      { name: i18n.t("navNames.skills"), path: "#skills", id: 2 },
      { name: i18n.t("navNames.portfolio"), path: "#portfolio", id: 3 },
    ],

    // Icons
    icons: [
      { name: "HTML", icon: "fab fa-html5", id: 1 },
      { name: "CSS", icon: "fab fa-css3-alt", id: 2 },
      { name: "JavaScript", icon: "fab fa-js", id: 3 },
      { name: "ReactJS", icon: "fab fa-react", id: 4 },
      { name: "Sass", icon: "fab fa-sass", id: 5 },
      { name: "Jquery", icon: "devicon-jquery-plain", id: 6 },
      { name: "Bootstrap", icon: "fab fa-bootstrap", id: 7 },
      { name: "Python", icon: "fab fa-python", id: 8 },
      { name: "PHP", icon: "fab fa-php", id: 9 },
      { name: "MySQL", icon: "devicon-mysql-plain", id: 10 },
      { name: "Node.js", icon: "fab fa-node", id: 11 },
      { name: "C++", icon: "devicon-cplusplus-plain", id: 12 },
      { name: "Gimp", icon: "devicon-gimp-plain", id: 13 },
      { name: "npm", icon: "fab fa-npm", id: 14 },
      { name: "GIT", icon: "fab fa-git-alt", id: 15 },
      { name: "Trello", icon: "fab fa-trello", id: 16 },
      { name: "Confluence", icon: "fab fa-confluence", id: 17 },
    ],

    // Footer
    contactLinks: [
      {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/yacine-hadj-rabia-29b799158/",
        icon: "fab fa-linkedin",
        id: 1,
      },
      {
        name: "GitHub",
        path: "https://github.com/YHADJRABIA/",
        icon: "fab fa-github",
        id: 2,
      },
      {
        name: "Mail",
        path: "mailto:h_yacine@live.fr",
        icon: "fa fa-at",
        id: 3,
      },
    ],
    /* portfolio: {
      categories: [
        { name: "all", icon: "active fa fa-filter", id: 1 },
        { name: "web-dev", icon: "fas fa-code", id: 2 },
        { name: "electronics", icon: "fas fa-microchip", id: 3 },
      ],
    }, */
  };

  /* 
  Passing the data to other components, we could list these components one by one but props.children is more efficient as it auto-selects all
  the children wrapped by <DataProvider> </DataProvider> in App.js.
  Passing navTitles as a value to be consumed by Nav.js
  */
  return (
    <DataContext.Provider value={content}>
      {props.children}
    </DataContext.Provider>
  );
};
