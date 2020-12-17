import React, { Component } from "react";
import { LoginRecaptcha } from "./Components/LoginCard";
import { SignupRecaptcha } from "./Components/SignupCard";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { connect } from "react-redux";

import { IToken, setToken } from "../actions";

import { IStoreState } from "../reducers";
interface State {
  tk: IToken;
  selectChoice: string;
}

interface PropTypes {
  tk: IToken;
  fetchToken: () => {};
  setToken: (token: string) => {};
}

class SignupLogin extends Component<PropTypes, State> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      tk: this.props.tk,
      selectChoice: "login",
    };
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice(ev: React.SyntheticEvent<HTMLInputElement>) {
    const target = ev.currentTarget;
    this.setState({
      selectChoice: target.value,
    });
  }

  render() {
    let cardToRender: JSX.Element | JSX.Element[];
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 1000) {
      this.state.selectChoice === "login"
        ? console.log(this.state.selectChoice)
        : console.log("The other choice");
      cardToRender =
        this.state.selectChoice === "login" ? (
          <LoginRecaptcha />
        ) : (
          <SignupRecaptcha />
        );
    } else {
      cardToRender = [
        <SignupRecaptcha key="signup" />,
        <LoginRecaptcha key="login" />,
      ];
    }
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHAKEY}
      >
        <div className="login-signup">
          <div className="login-signup-container">
            {cardToRender}
            <div className="login-signup-menu">
              <div className="login-signup-menu-group">
                <input
                  type="radio"
                  id="login"
                  name="gender"
                  value="login"
                  onClick={this.handleChoice}
                  defaultChecked={true}
                />
                <label htmlFor="login">Login</label>
              </div>
              <div className="login-signup-menu-group">
                <input
                  type="radio"
                  id="signup"
                  name="gender"
                  value="signup"
                  onClick={this.handleChoice}
                />
                <label htmlFor="signup">Signup</label>
              </div>
            </div>
          </div>
        </div>
      </GoogleReCaptchaProvider>
    );
  }
}
const mapStateToProps = (state: IStoreState): { tk: IToken } => {
  return {
    tk: state.tk,
  };
};

export const App = connect(mapStateToProps, {
  setToken,
})(SignupLogin);
