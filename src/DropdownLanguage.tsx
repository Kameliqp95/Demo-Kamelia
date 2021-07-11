import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './App.css';

const DropdownLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("bg");

  const handleLangChange = (evt: { target: { value: any; }; }) => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
    <Select
    value={language}
    onChange={handleLangChange}
    className="language_pos"
  >
    <MenuItem value='bg'>BG</MenuItem>
    <MenuItem value='en'>EN</MenuItem>
  </Select>
  </>

  );
};

export default DropdownLanguage;
