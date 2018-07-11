import React, { Component } from "react";
import Footer from "../../components/Footer";
import Sample from './video.mp4';
import "./Home.css";
import API from '../../utils/API';
import Dashboard from "../Dashboard/Dashboard"

var dt = new Date();
dt = (dt.getYear() + 1900) ;



class Home extends Component {

  state = {
    isLoggedIn: true
  }

  componentDidMount(){
    API.getUser()
    .then(user=>{
      
      if(user.data.loggedIn) {

        window.location.href = "/dashboard";

      }

      this.setState({
        isLoggedIn: user.data.loggedIn,
      });

    })

  }

  render() {

    // var cookie = document.cookie("isLoggedIn");

    var cookie =  document.cookie.split(";");
    cookie = cookie[0].split("=");
    cookie = cookie[1];
    
    if(document.cookie.length > 0 ) {

          // window.location.href = "/dashboard";
          return (
            <Dashboard />
          )

    }

    return (
      <div>
        <div className="App">
          <video id="background-video" loop autoPlay muted>
            <source src={Sample} type="video/mp4" />
            <source src={Sample} type="video/ogg" />
              Your browser does not support the video tag.
          </video>
        </div>
        <div className="content text-center w3-animate-opacity">
          <h1>Fashi.On</h1>
          <h2>Your Ultimate Clothing Guide!</h2>
          <br />
          <div className="buttons text-center">
            <a className="btn btn-lg btn-success" href="/signin">Login</a>
            &nbsp;
            <a className="btn btn-lg btn-primary" href="/signup">Sign up</a>
          </div>
        </div>
        <Footer year={dt}/>
      </div>
    )
  }
}


export default Home;
