import React, { Component } from "react";
import Logo from './logo.png';

import "./Navbar.css";
import API from "../../utils/API"

class Navbar extends Component {

  state={
    isLoggedIn: false,
    firstName: "",
    id:"",
    email: "",
    countOccasions: 0
  }

  componentWillMount(){
    API.getUser()
    .then(user=>{
      console.log(user)
      this.setState({
        isLoggedIn: user.data.loggedIn,
        firstName: user.data.firstName,
        lastName: user.data.lastName,
        email: user.data.email,
        countOccasions: user.data.occasions
      });
      console.log(this.state)
    })

  }

  logout = () => {

    API.logout().then(res => {

      window.location.href = "/";

    })

  }

  render() {
    if(this.state.isLoggedIn) {

      return (
        <header className="d-flex bd-highlight mb-3">
  
          <a className="mr-auto p-2 bd-highlight align-self-center p-2 bd-highlight" href="/dashboard">
            <img src={Logo} alt="Fashi.On" />
          </a>
          <div className="p-2 bd-highlight align-self-center">
            <span className="text-white">Welcome, <b>{this.state.firstName} {this.state.lastName}</b></span>
          </div>
          <div className="p-2 bd-highlight align-self-center">
            <a className="btn btn-primary" href="/dashboard">Your Occasions ({this.state.countOccasions})</a>
          </div>
          <div className="p-2 bd-highlight align-self-center">
            <a className="btn btn-info" href="/userprofile">Update Profile</a>
          </div>
          <div className="p-2 bd-highlight align-self-center">
            <a className="btn btn-danger text-white" onClick={this.logout}>Log out</a>
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



