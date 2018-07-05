import React from "react";
import "./Button.css";

const Button = props => (

<button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
  {props.children}
</button>

);

export default Button;
