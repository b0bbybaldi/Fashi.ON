import React, { Component } from "react";
import Logo from './logo.png';

import "./Navbar.css";
import API from "../../utils/API"

class Navbar extends Component {

  state={
    isLoggedIn: false,
    firstName: "",
    id:"",
    email: ""
  }

  componentWillMount(){
    API.getUser()
    .then(user=>{
      console.log(user)
      this.setState({
        isLoggedIn: user.data.loggedIn,
        firstName: user.data.firstName,
        lastName: user.data.lastName,
        email: user.data.email
      });
      console.log(this.state)
    })

  }

  logout = () => {
    API.logout().then(res => {
    })
  }

  render() {

    if(this.state.isLoggedIn) {

      return (
        <header className="d-flex bd-highlight mb-3">
  
          <a className="mr-auto p-2 bd-highlight align-self-center p-2 bd-highlight" href="/">
            <img src={Logo} alt="Fashi.On" />
          </a>
          <div className="p-2 bd-highlight align-self-center">
            <span className="alert alert-primary">Welcome, {this.state.firstName} {this.state.lastName}</span>
          </div>
          <div className="p-2 bd-highlight align-self-center">
            <a className="btn btn-primary" href="/dashboard">Your Occasions</a>
          </div>
          <div className="p-2 bd-highlight align-self-center">
            <a className="btn btn-danger" href="/logout" onClick={this.logout}>Log out</a>
          </div>
  
        </header>
      )

    } else {

      return (
        <header className="d-flex bd-highlight mb-3">
  
          <a className="mr-auto p-2 bd-highlight align-self-center p-2 bd-highlight" href="/">
            <img src={Logo} alt="Fashi.On" />
          </a>
          <div className="p-2 bd-highlight align-self-center">
            <a className="btn btn-success" href="/signin">Login</a>
          </div>
          <div className="p-2 bd-highlight align-self-center">
            <a className="btn btn-primary" href="/signup">Sign up</a>
          </div>
  
        </header>
      )



    }
    
  }

}

export default Navbar;



