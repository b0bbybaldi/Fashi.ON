import React, { Component } from "react";
import Footer from "../../components/Footer";
import Sample from './video.mp4';
import "./Home.css";
import API from '../../utils/API';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import arrow from '../../imgs/arrow.png';



var dt = new Date();
dt = (dt.getYear() + 1900) ;



class Home extends Component {

  state = {
    isLoggedIn: false,
    scrollY: 0,
    blur: ""
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

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll.bind(this));
  // this.changeBlur()
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
}

//1. Pick scrollY val you want to trigger your function at //
//2. write function that says once that scroll val is passed,
// change this.state.blur to a class that will blur an element
//3. create css class with property filter: blur()
//4. put your function in componentDidMount //
changeBlur() {
  if (this.state.scrollY > 170) {
    //console.log("yo")
    this.setState({
      blur: "blurme"
    })
  }
}



handleScroll(event) {
        this.setState({
            scrollY: window.scrollY
        })
        console.log(this.state.scrollY)
    }
  render() {

    // var cookie = document.cookie("isLoggedIn");

    var cookie =  document.cookie.split(";");
    cookie = cookie[0].split("=");
    cookie = cookie[1];
    console.log(document.cookie.length)
    if(this.state.isLoggedIn) {
      // document.cookie.length == "true" || 
          // window.location.href = "/dashboard";
          return (
            <Dashboard />
          )

    }

    if (this.state.scrollY > 170 && this.state.blur === "") {
      console.log("yo")
      this.setState({
        blur: "blurme"
      })
    } else if (this.state.blur === "blurme" && this.state.scrollY < 170){
      this.setState({
        blur: ""
      })
    }

    return (
      <div>
        <div className="App">
          <video id="background-video" className={this.state.blur} loop autoPlay muted>
            <source src={Sample} type="video/mp4" />
            <source src={Sample} type="video/ogg" />
              Your browser does not support the video tag.
          </video>
        </div>
        <div className="content text-center w3-animate-opacity">
          <h1 className= "logo-text">Fashi.On</h1>
          <h2 className="tagline">Your Ultimate Clothing Guide</h2>

          <div className="buttons text-center">
            <a className="btn btn-lg btn-success" href="/signin">Login</a>
            &nbsp;
            <a className="btn btn-lg btn-primary" href="/signup">Sign up</a>
          </div>
          <br />
          <a href="#about" className="arrow-trans">
          <img className="arrow-down"
          src={arrow}
          />
          </a>
        </div>
<div className="parallax">

        <div className="about" >
          <div className="about-card" id="about">
          <p className= "about-des">
          This is the about section......
          </p>
          </div>

        </div>


</div>

        <Footer year={dt}/>
      </div>
    )
  }
}


export default Home;
