import React from "react";
import { ButtonWrapper } from "./Button.styled";

function Button(props) {
  return (
    <ButtonWrapper>
      <button {...props}>{props.children}</button>
    </ButtonWrapper>
  );
}

export default Button;
