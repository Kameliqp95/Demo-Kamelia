import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DropdownLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("bg");

  const handleLangChange = (evt: { target: { value: any; }; }) => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select onChange={handleLangChange} value={language}>
      <option value="bg">BG</option>
      <option value="en">EN</option>
    </select>
  );
};

export default DropdownLanguage;
