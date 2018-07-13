import React from "react";
import "./Button.css";

const Button = props => (

<button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-lg btn-danger btn-items">
  {props.children.replace("+"," ")}
</button>
);

export default Button;
