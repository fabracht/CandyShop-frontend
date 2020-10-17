import React from "react";

function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
                        Doces que trazem lembranças de casa
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">De dar água na boca</h3>
          <p className="paragraph">
                            Somos uma empresa de doces que busca proporcionar aos nossos clientes experiências que geram doces lembranças. 
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">Feitos com amor</h3>
          <p className="paragraph">
                            Nossos valores associados à nossa experiência nos permite entregar ao consumidor, em uma única dose, balas e doces com sabores caseiros com alto controle de qualidade, buscando proporcionar momentos de felicidade.
          </p>
          <a href="/Sobre" className="btn-text">Saiba mais &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src="https://via.placeholder.com/1280x800/1" alt="1" className="composition__photo composition__photo--p1" />
            <img src="https://via.placeholder.com/1280x800/5" alt="2" className="composition__photo composition__photo--p2" />
            <img src="https://via.placeholder.com/1280x800/9/1" alt="3" className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

