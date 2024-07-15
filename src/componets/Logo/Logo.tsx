import React from "react";
import logo from "../../img/logo/cat.svg";
import css from "./Logo.module.scss";
const Logo: React.FC = () => {
  return (
    <a href="/" className={css.logo}>
      <img src={logo} className={css.icon} alt="logo" />
      <span className={css.label}>Котодім</span>
    </a>
  );
};

export default Logo;
