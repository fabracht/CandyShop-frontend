import React from "react";
import logo from "../../sass/img/men_doc/MeninasDoceiras-Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socialmedia-copyright">
        <div className="socialmedia">
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="https://www.facebook.com/meninasdoceirass/"
                className="footer__link"
              >
                <i className="feature-box__icon fa fa-facebook"></i>
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                <i className="feature-box__icon fa fa-twitter"></i>
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                <i className="feature-box__icon fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="footer__copyright">
            Built by&nbsp;
            <a href="/" className="footer__link">
              Fabrício Bracht.&nbsp;
            </a>
            Copyright&copy; by Fabrício Bracht
          </p>
        </div>
      </div>
      <div className="footer__logo-about">
        <div className="footer__logo-box">
          <img src={logo} alt="Logo Full" className="footer__logo" />
        </div>

        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/sobre" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item">
              <a href="/contato" className="footer__link">
                Contact
              </a>
            </li>
            <li className="footer__item">
              <a href="/oportunidades" className="footer__link">
                Opportunities
              </a>
            </li>
            <li className="footer__item">
              <a href="/certificados" className="footer__link">
                Certificates
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
