import React from "react";

import css from "./Header.module.scss";
import Logo from "../Logo";

const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <Logo />
    </header>
  );
};
export default Header;
