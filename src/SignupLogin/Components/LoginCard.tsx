import React, { Component, FormEvent, ChangeEvent } from "react";
// import LoginButton from "./LoginButton";
import { Redirect, Link } from "react-router-dom";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { withGoogleReCaptcha } from "react-google-recaptcha-v3";

interface Props {}

interface State {
  email: string;
  password: string;
  recaptchaToken: string | null;
  hasValidToken: boolean;
  isLoginProcessing: boolean;
  isLoginResponseSuccess: boolean;
}

class LoginCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      recaptchaToken: "",
      hasValidToken: false,
      isLoginProcessing: false,
      isLoginResponseSuccess: true,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCaptchaToken = this.setCaptchaToken.bind(this);
  }

  async componentDidMount() {}

  async handleLogin(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const inputs = ev.currentTarget.querySelectorAll("input");
    const emailField = inputs[0];

    const form = ev.currentTarget;
    if (form.checkValidity()) {
      try {
        const result = await fetch("https://localhost:443/login", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          cache: "no-cache",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: emailField.value,
            password: this.state.password,
            recaptchaToken: this.state.recaptchaToken,
          }),
        });
        // SET THE PROCESSING STATE TO TRUE
        this.setState({
          isLoginProcessing: true,
        });

        const resultText = await result.json();

        if (resultText.result === "success") {
          this.setState({
            email: "",
            password: "",
            hasValidToken: true,
            isLoginProcessing: false,
            isLoginResponseSuccess: true,
          });
        } else {
          this.setState({
            isLoginProcessing: false,
            isLoginResponseSuccess: false,
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
    }
  }

  handleChange(ev: ChangeEvent<HTMLInputElement>) {
    if (ev.currentTarget.name === "email") {
      this.setState({
        email: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.name === "password") {
      this.setState({
        password: ev.currentTarget.value,
      });
    }
  }

  createWarning(): React.ReactElement {
    return (
      <div className="form-group">
        <p className="fail-login">Email and password don't match</p>
      </div>
    );
  }

  setCaptchaToken(token: string | null) {
    this.setState({
      recaptchaToken: token,
    });
  }

  render() {
    if (this.state.hasValidToken) {
      return <Redirect to="/store" />;
    }
    return (
      <div className="login-container">
        <GoogleReCaptcha onVerify={this.setCaptchaToken} />
        <form className="login-container-form" onSubmit={this.handleLogin}>
          <h2 className="login-container-form-title">Login</h2>
          <div className="login-container-form-group">
            <input
              className="login-container-form-control"
              type="email"
              name="email"
              placeholder="Email"
              required={true}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="login-container-form-group">
            <input
              className="login-container-form-control"
              type="password"
              name="password"
              placeholder="Password"
              required={true}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {this.state.isLoginResponseSuccess || this.createWarning()}
          <div className="form-group">
            <button
              className="btn"
              data-toggle="tooltip"
              data-bs-tooltip=""
              type="submit"
              title="I log you in"
              disabled={this.state.isLoginProcessing}
            >
              {this.state.isLoginProcessing ? "Sending Electrons" : "Login"}
            </button>
            {/* <LoginButton /> */}
          </div>
          <Link className="login-container-form-forgot" to="/reset">
            Forgot your email or password?
          </Link>
        </form>
      </div>
    );
  }
}

export const LoginRecaptcha = withGoogleReCaptcha(LoginCard);
