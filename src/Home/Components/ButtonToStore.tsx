import React from "react";
import Radium from "radium";

interface Props {
  content?: string,
  style: any,
}

function ButtonToStore(props: Props) {
  return (
    <a href="/store" style={{ ...props.style.base, ...props.style.animated }} >
      {props.content || "Clique aqui"}
    </a>
  );
}

export default Radium(ButtonToStore);
