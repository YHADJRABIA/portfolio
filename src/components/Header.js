import React, { useState, useContext } from "react";
import { DataContext } from "../components/Context/DataContext";
import Nav from "./Header/Nav";
import Intro from "./Header/Intro";
import { useTranslation } from "react-i18next";

const Header = () => {
  //Retrieving the data to be consumed from the context storing it.
  //const [data, setData] = useContext(DataContext);
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Intro
        name={content.name}
        occupations={content.occupations}
        i18n={(t, i18n)}
      />
      <Nav
        navTitles={content.navTitles}
        languages={content.languages}
        i18n={(t, i18n)}
      />
    </>
  );
};

export default Header;
