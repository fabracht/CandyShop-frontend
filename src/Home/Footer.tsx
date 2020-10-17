import React from "react";
import logo from "../sass/img/men_doc/MeninasDoceiras-Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Logo Full" className="footer__logo" />
      </div>
      <div className="footer__socialmedia">
        <ul className="list-right footer__list">
          <li className="footer__item"><a href="https://www.facebook.com/meninasdoceirass/" className="footer__link"><i className="feature-box__icon fa fa-facebook"></i></a></li>
          <li className="footer__item"><a href="/" className="footer__link"><i className="feature-box__icon fa fa-twitter"></i></a></li>
          <li className="footer__item"><a href="/" className="footer__link"><i className="feature-box__icon fa fa-whatsapp"></i></a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="/sobre" className="footer__link">Sobre</a></li>
              <li className="footer__item"><a href="/contato" className="footer__link">Contato</a></li>
              <li className="footer__item"><a href="/oportunidades" className="footer__link">Oportunidades</a></li>
              <li className="footer__item"><a href="/certificados" className="footer__link">Certificados</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
                    
          <p className="footer__copyright">
                        Construido por <a href="/" className="footer__link">Fabrício Bracht.</a>  Copyright&copy; by Fabrício Bracht
          </p>
        </div>
      </div>
            
    </footer>
  );
}

export default Footer;

