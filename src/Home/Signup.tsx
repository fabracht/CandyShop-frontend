import React from "react";

function Signup() {
  return (
    <section className="section-signup">
      <div className="row">
        <div className="signup">
          <div className="signup__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Registre-se</h2>
              </div>
              <div className="form__group u-margin-bottom-small">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group u-margin-bottom-small">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group u-margin-bottom-small">
                <button className="btn btn--green btn-lg">Registre-se</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
