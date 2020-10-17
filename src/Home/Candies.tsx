import React from "react";

function Candies() {
  return (
    <section className="section-candies">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Os nossos favoritos</h2>
      </div>
      <div className="row">

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                        &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">recheada com brigadeiro</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>O verdadeiro Brigadeiro</li>
                  <li>placeholder</li>
                  <li>placeholder</li>
                  <li>placeholder</li>
                  <li>placeholder</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">R$123</p>
                </div>
                <a href="/loja" className="btn btn--white">Encomende agora!</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
                    FRONT
            </div>
            <div className="card__side card__side--back card__side--back-2">
                    BACK
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
                    FRONT
            </div>
            <div className="card__side card__side--back card__side--back-3">
                    BACK
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text">
        <a href="/loja" className="btn btn--green">Conheça nossos produtos</a>
      </div>
    </section>
  );
}

export default Candies;

