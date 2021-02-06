import React from "react";
import FooterNavigation from "../Components/FooterNavigation";
import FooterSocialMedia from "../Components/FooterSocialMedia";
import Radium from "radium";
import myColors from "../../assets/color";

const style: Radium.StyleRules = {
  base: {
    display: "flex",
    alignItems: "center",
    height: "15vh",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: myColors.brownColor.concat("AA"),
    padding: "0 3rem",
    fontSize: "1.5rem",
    "@media (max-width: 600px)": {
      display: "none",
    },
  }
};


function FooterContainer() {
  return (
    <Radium.StyleRoot>
      <footer style={style.base}>
        <FooterSocialMedia />
        <FooterNavigation />
      </footer>
    </Radium.StyleRoot>
  );
}


function Footer() {
  return (
    <FooterContainer></FooterContainer>
  );
}

export default Footer;
