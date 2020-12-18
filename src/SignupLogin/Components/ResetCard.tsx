import React, { FormEvent, ChangeEvent, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { withGoogleReCaptcha } from "react-google-recaptcha-v3";
import Logo from "../assets/logo.svg";

export default function ResetCard() {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | undefined>("");
  const [hasValidToken, setHasValidToken] = useState<boolean>(false);
  const [isResetResponseSuccess, setIsResetResponseSuccess] = useState<
    boolean | undefined
  >(undefined);
  const handleLogin = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const inputs = ev.currentTarget.querySelectorAll("input");
    const emailField = inputs[0];

    const form = ev.currentTarget;
    if (form.checkValidity()) {
      try {
        const result = await fetch("https://localhost:443/reset", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailField.value,
            password: password,
            recaptchaToken: recaptchaToken,
          }),
        });
        console.log(result);
        const resultText = await result.json();
        if (resultText.result === "success") {
          setEmail("");
          setPassword("");
          setHasValidToken(true);
          setIsResetResponseSuccess(true);
        } else {
          setIsResetResponseSuccess(false);
          setHasValidToken(false);
        }
      } catch (err) {
        setIsResetResponseSuccess(false);
        setHasValidToken(false);
      }
    } else {
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.currentTarget.name === "email") {
      setEmail(ev.currentTarget.value);
    } else if (ev.currentTarget.name === "password") {
      setPassword(ev.currentTarget.value);
    }
  };

  const createWarning = (): React.ReactElement => {
    return (
      <div className="form-group">
        <p className="fail-login">Email and password don't match</p>
      </div>
    );
  };

  if (hasValidToken) {
    return <Redirect to="/store" />;
  }
  return (
    <div className="login-container">
      <GoogleReCaptcha onVerify={setRecaptchaToken} />
      <form className="login-container-form" onSubmit={handleLogin}>
        {/* <h2 className="login-container-form-title">Reset Password</h2> */}
        <img src={Logo} alt="" width="500px" />
        <Link to="/" className="shop-header__item">
          <i className="fa fa-home">
            <p>Back to Store</p>
          </i>
        </Link>
        <div className="login-container-form-group">
          <input
            className="login-container-form-control"
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="login-container-form-group">
          <input
            className="login-container-form-control"
            type="password"
            name="password"
            placeholder="Password"
            required={true}
            value={password}
            onChange={handleChange}
          />
        </div>
        {isResetResponseSuccess === undefined || createWarning()}
        <div className="form-group">
          <button
            className="btn"
            data-toggle="tooltip"
            data-bs-tooltip=""
            type="submit"
            title="I log you in"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

export const ResetRecaptcha = withGoogleReCaptcha(ResetCard);
// export const LoginRecaptcha = LoginCard;
