import React from "react";
import logo from "../../sass/img/men_doc/MeninasDoceiras-Logo.png";
import Radium from "radium";
import myColors from "../../assets/color";

const style: Radium.StyleRules = {
  logoAbout: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logoBox: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "100px",
  },
  navigation: {
    borderTop: "3px solid white",
    display: "inline-block",
  },
  list: {
    listStyle: "none",
    textAlign: "center",
    margin: 0,
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  item: {
  },
  link: {
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
    display: "inline-block",
    ":hover": {
      color: myColors.greenColor,
    },
    ":active": {
      color: myColors.greenColor,
    }
  }
};
function FooterNavigation() {
  return (<div key={0} style={style.logoAbout}>
    <div key={1} style={style.logoBox}>
      <img src={logo} key={2} alt="Logo Full" style={style.logo} />
    </div>
    <div key={3} style={style.navigation}>
      <ul key={4} style={style.list}>
        <li key="sobre" style={style.item}>
          <a href="/sobre" key={5} style={style.link}>
            About
              </a>
        </li>
        <li key="contato" style={style.item}>
          <a href="/contato" key={6} style={style.link}>
            Contact
              </a>
        </li>
        <li key="oportunidades" style={style.item}>
          <a href="/oportunidades" key={7} style={style.link}>
            Opportunities
              </a>
        </li>
      </ul>
    </div>
  </div>);
}

export default Radium(FooterNavigation);