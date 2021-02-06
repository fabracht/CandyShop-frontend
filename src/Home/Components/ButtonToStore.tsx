import React from "react";
import Radium from "radium";
import myColors from "../../assets/color";

interface Props {
  content?: string,
  style?: any,
}

const buttonStyles: Radium.StyleRules = {
  root: {
    margin: "500px",
  },
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
    left: "5%",
    ":hover": {
      transform: "translate(0, -5px)",
      boxShadow: "0 5px 5px 5px rgba(0,0,0,0.3)",
    },
    ":active": {
      backgroundColor: myColors.pinkColor,
      transform: "translate(0, -2px)",
      boxShadow: "0 5px 2px 2px rgba(0,0,0,0.3)",
    },
    "@media (max-width: 600px)": {
      left: 0,
    },
    "@media (max-width: 900px)": {
      left: 0,
      margin: 0,
    }
  },
  animated: {
    animation: "moveInBottom 0.5s ease-out",
    animationFillMode: "backwards",
  },
};



function ButtonWithProps(props: Props) {
  return (<Radium.StyleRoot style={buttonStyles.root}>
    <a href="/store" style={{
      ...props.style.base,
      ...props.style.animated
    } || buttonStyles}>
      {props.content || "Clique aqui"}
    </a>
  </Radium.StyleRoot>);
}



function ButtonWithoutProps(props: Props) {
  return (<Radium.StyleRoot>
    <a href="/store" style={{
      ...buttonStyles.base,
      ...buttonStyles.animated
    }}>
      {props.content || "Clique aqui"}
    </a>
  </Radium.StyleRoot>);
}


function ButtonToStore(props: Props) {
  if (props.style) {
    return (
      <ButtonWithProps style={props.style} content={props.content}></ButtonWithProps>
    );
  } else {
    return (
      <ButtonWithoutProps content={props.content}></ButtonWithoutProps>
    );
  }
}

export default Radium(ButtonToStore);
