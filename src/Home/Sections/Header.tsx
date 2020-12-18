import React from "react";
import BToStore from "./ButtonToStore";

function Header() {
  return (
    <header className="header">
      <div className="header__background">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Meninas Doceiras</span>
            <span className="heading-primary--sub">
              a verdadeira receita de casa
            </span>
          </h1>
          <BToStore />
        </div>
      </div>
    </header>
  );
}

export default Header;
