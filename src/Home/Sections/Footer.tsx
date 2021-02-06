import React, { CSSProperties } from "react";
import FooterNavigation from "../Components/FooterNavigation";
import FooterSocialMedia from "../Components/FooterSocialMedia";

import myColors from "../../assets/color";

const style = {
  base: {
    display: "flex",
    alignItems: "center",
    height: "15vh",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: myColors.brownColor.concat("AA"),
    padding: "0 3rem",
    fontSize: "1.5rem",
  } as CSSProperties
};

function Footer() {
  return (
    <footer style={style.base}>
      <FooterSocialMedia />
      <FooterNavigation />
    </footer>
  );
}

export default Footer;
