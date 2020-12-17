import React from "react";
import { ResetRecaptcha } from "./Components/ResetCard";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function Reset() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHAKEY}>
      <div className="login-signup">
        <div className="login-signup-container">
          <ResetRecaptcha></ResetRecaptcha>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
