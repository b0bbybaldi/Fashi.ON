import React from "react";
import "./Button.css";

const Button = props => (

<button {...props} className="btn btn-primary">
  {props.children}
</button>

);

export default Button;
