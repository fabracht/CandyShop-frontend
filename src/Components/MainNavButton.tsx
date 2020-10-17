import React from "react";

function NavButton() {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="/home" className="navigation__link">Entrada</a></li>
          <li className="navigation__item"><a href="/Loja" className="navigation__link">Loja</a></li>
          <li className="navigation__item"><a href="/Sobre" className="navigation__link">Sobre</a></li>
          <li className="navigation__item"><a href="/Favoritos" className="navigation__link">Nossos Favoritos</a></li>
          <li className="navigation__item"><a href="/Historias" className="navigation__link">Histórias</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavButton;
