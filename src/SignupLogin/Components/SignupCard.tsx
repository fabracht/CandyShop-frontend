import React, { Component, ChangeEvent, FormEvent } from "react";
import {
  GoogleReCaptcha,
  withGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Redirect } from "react-router-dom";

interface Props {}
interface State {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  recaptchaToken: string | null;
  hasValidToken: boolean;
  isLoginResponseSuccess: boolean;
  LoginResponse: string;
}

class SignupCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      recaptchaToken: "",
      hasValidToken: false,
      isLoginResponseSuccess: true,
      LoginResponse: "",
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCaptchaToken = this.setCaptchaToken.bind(this);
  }

  async handleSignup(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    if (form.checkValidity()) {
      try {
        const result = await fetch("https://localhost:443/signup", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            recaptchaToken: this.state.recaptchaToken,
          }),
        });
        const resultText = await result.json();
        const { err } = resultText;

        if (err) {
          this.setState({
            LoginResponse: err,
          });
        }
        if (resultText.result === "success") {
          // this.props.setToken(resultText.body.accessToken);
          this.setState({
            email: "",
            password: "",
            hasValidToken: true,
            isLoginResponseSuccess: true,
          });
        } else {
          this.setState({
            isLoginResponseSuccess: false,
          });
        }
      } catch (err) {
        this.setState({
          isLoginResponseSuccess: false,
          LoginResponse: "",
        });
      }
    } else {
    }
  }

  handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const value = ev.currentTarget.value;
    if (ev.currentTarget.name === "fullname") {
      this.setState({
        fullName: value,
      });
    } else if (ev.currentTarget.name === "email") {
      this.setState({
        email: value,
      });
    } else if (ev.currentTarget.name === "password") {
      this.setState({
        password: value,
      });
    } else if (ev.currentTarget.name === "password-repeat") {
      this.setState({
        confirmPassword: value,
      });
      if (ev.currentTarget.value !== this.state.password) {
        ev.currentTarget.setCustomValidity("passwords do not match");
      } else {
        ev.currentTarget.setCustomValidity("");
      }
    }
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
      <div className="signup-container">
        <GoogleReCaptcha onVerify={this.setCaptchaToken} />
        <form
          className="signup-container-form"
          method="post"
          onSubmit={this.handleSignup}
        >
          <h2 className="signup-container-form-title">Create an account</h2>
          <div className="signup-container-form-group">
            <input
              className="form-control"
              type="text"
              name="fullname"
              placeholder="Full Name"
              pattern="^([a-zA-Z]+( )*[a-zA-Z].*)+$"
              required={true}
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>
          <div className="signup-container-form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              required={true}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <span>{this.state.LoginResponse}</span>
          </div>
          <div className="signup-container-form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              required={true}
              minLength={8}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="signup-container-form-group">
            <input
              className="form-control"
              type="password"
              name="password-repeat"
              placeholder="Password (repeat)"
              required={true}
              minLength={8}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <div className="signup-container-form-group">
            <div className="signup-container-form-check">
              <input
                className="signup-container-form-check-input"
                type="checkbox"
                required={true}
              ></input>
              <label className="signup-container-form-check-label">
                I agree to the license terms.
              </label>
            </div>
          </div>
          <div className="signup-container-form-group">
            <button
              className="btn"
              data-toggle="tooltip"
              data-bs-tooltip=""
              type="submit"
              title="I sign you up!"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export const SignupRecaptcha = withGoogleReCaptcha(SignupCard);
