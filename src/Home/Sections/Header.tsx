import React, { CSSProperties } from "react";

// import Radium from "radium";
import BToStore from "../Components/ButtonToStore";

import BackgroundImage from "../../assets/LogoPrincipal.svg";
import myColors from "../../assets/color";
const styles = {
  base: {
    position: "relative",
    height: "85vh",
  } as CSSProperties,
  header__background: {
    height: "100%",
    backgroundImage: `url(${BackgroundImage}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  } as CSSProperties,
  header__textbox: {
    position: "relative",
    top: "50%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    textAlign: "center",
    alignContent: "center",
  } as CSSProperties,
  heading__primary: {
    color: myColors.brownColor,
    textTransform: "uppercase",
    backfaceVisibility: "hidden",
    marginBottom: "2.5rem",
  } as CSSProperties,
  heading__primary__main: {
    fontFamily: "bhatoshineregular",
    display: "block",
    fontSize: "10rem",
    letterSpacing: "1.5rem",
    textTransform: "lowercase",
    animationName: "easeOutBounce-left",
    animationDuration: ".5s",
  } as CSSProperties,
  heading__primary__sub: {
    fontFamily: "bhatoshineregular",
    display: "block",
    fontSize: "2rem",
    letterSpacing: "1.2rem",
    lineHeight: "6rem",
    animationName: "easeOutBounce-right",
    animationDuration: ".5s",
  } as CSSProperties
};

const buttonStyles = {
  base: {
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "1rem 2rem",
    maxWidth: "clamp(150px, 100%, 300px)",
    borderRadius: "10rem",
    transition: "all 0.2s",
    fontSize: "2rem",
    border: "none",
    cursor: "pointer",
    backgroundColor: myColors.greenColor,
    color: "black",
    position: "relative",
    left: "20vw",
    ":hover": {
      transform: "translate(0, -5px)",
      boxShadow: "0 5px 5px 5px rgba(0,0,0,0.3)",
    },
    ":active": {
      backgroundColor: myColors.pinkColor,
      transform: "translate(0, -2px)",
      boxShadow: "0 5px 2px 2px rgba(0,0,0,0.3)",
    }
  },
  animated: {
    animation: "moveInBottom 0.5s ease-out",
    animationFillMode: "backwards",
  },
};

function Header() {




  return (
    <header style={styles.base}>
      <div style={styles.header__background}>
        <div style={styles.header__textbox}>
          <h1 style={styles.heading__primary}>
            <span style={styles.heading__primary__main}>Meninas Doceiras</span>
            <span style={styles.heading__primary__sub}>
              a verdadeira receita de casa
            </span>
          </h1>
          <BToStore style={buttonStyles} content={"Conheça nossos produtos"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
