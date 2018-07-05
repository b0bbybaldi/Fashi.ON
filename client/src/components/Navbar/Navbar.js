import React from "react";
import Logo from './logo.png';

import "./Navbar.css";

const Navbar = props => (

<header className="d-flex bd-highlight mb-3">

    <a className="mr-auto p-2 bd-highlight align-self-center p-2 bd-highlight" href="/">
      <img src={Logo} alt="Fashi.On" />
    </a>
    <div className="p-2 bd-highlight align-self-center">
      <a className="btn btn-success" href="/login">Login</a>
    </div>
    <div className="p-2 bd-highlight align-self-center">
      <a className="btn btn-primary" href="/signup">Sign up!</a>
    </div>
    
  
</header>



)


export default Navbar;
