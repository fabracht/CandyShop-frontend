import React from "react";
import Radium from "radium";

// import Radium from "radium";
import BToStore from "../Components/ButtonToStore";

import BackgroundImage from "../../assets/LogoPrincipal.svg";
import myColors from "../../assets/color";



const styles: Radium.StyleRules = {
  base: {
    position: "relative",
    height: "85vh",
    overflow: "hidden",
    "@media (max-width: 900px)": {
      height: "100vh",
      lineHeight: "20px",
    },
  },
  header__background: {
    height: "100%",
    backgroundImage: `url(${BackgroundImage}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    display: "flex",
    placeContent: "center",
    placeItems: "flex-end",
    paddingBottom: "5%",
    "@media (max-width: 900px)": {
      paddingBottom: "15px",
    }
  },
  header__textbox: {
    fontSize: "4rem",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    textAlign: "center",
    alignContent: "center",
    "@media (max-width: 600px)": {
      paddingBottom: "30%",
    },
  },
  heading__primary: {
    color: myColors.brownColor,
    textTransform: "uppercase",
    backfaceVisibility: "hidden",
    marginBottom: "2.5rem",
    fontFamily: "bhatoshineregular",
    letterSpacing: "1.5rem",
    lineHeight: "6rem",
    "@media (max-width: 900px)": {
      marginBottom: "0",
    }
  },
  heading__primary__main: {
    display: "block",
    textTransform: "lowercase",
    animationName: "easeOutBounce-left",
    animationDuration: ".5s",
    "@media (max-width: 600px)": {
      marginBottom: "10px",
      fontSize: "7.5rem",
    },
    "@media (max-width: 900px)": {
      paddingBottom: "0",
      fontSize: "7.5rem",
    }
  },
  heading__primary__sub: {
    display: "block",
    fontSize: "2rem",
    letterSpacing: "1rem",
    animationName: "easeOutBounce-right",
    animationDuration: ".5s",
    "@media (max-width: 600px)": {
      lineHeight: "3rem",
      fontSize: "2rem",
      letterSpacing: "1rem",
      paddingBottom: "2rem",
    },
  }
};

function HeadingText() {
  return (<Radium.StyleRoot>
    <h1 style={styles.heading__primary}>
      <span style={styles.heading__primary__main}>Meninas Doceiras</span>
      <span style={styles.heading__primary__sub}>
        a verdadeira receita de casa
            </span>
    </h1>
  </Radium.StyleRoot>);
}



function HeadingBox() {
  return (
    <Radium.StyleRoot>
      <header style={styles.base}>
        <div style={styles.header__background}>

          <div style={styles.header__textbox}>
            <HeadingText></HeadingText>
            <BToStore content={"Conheça nossos produtos"} />
          </div>
        </div>
      </header>
    </Radium.StyleRoot>
  );
}


function Header() {
  return (
    <HeadingBox></HeadingBox>
  );
}

export default Radium(Header);
