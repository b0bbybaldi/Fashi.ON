import React, { Component } from "react";
import Footer from "../../components/Footer";
import Sample from './video.mp4';
import "./Home.css";
import API from '../../utils/API';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import arrow from '../../imgs/arrow.png';
import Dashboard from "../Dashboard/Dashboard"


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

    // document.getElementsByTagName("html").style.fontSize = "62.5%";
    // var cookie = document.cookie("isLoggedIn");

    // var element = document.getElementById("html");
    // element.setAttribute( 'class', 'home' );

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
      <div className="home">
        <div className="App">
          <video id="background-video" className={this.state.blur} loop autoPlay muted>
            <source src={Sample} type="video/mp4" />
            <source src={Sample} type="video/ogg" />
              Your browser does not support the video tag.
          </video>
        </div>
        <div className="content text-center w3-animate-opacity">
          <h1 className= "logo-text">Fashi.ON</h1>
          <h2 className="tagline">Your Ultimate Clothing Guide</h2>

          <div className="buttons text-center">
            <a className="btn btn-lg btn-success" href="/signin">Sign in</a>
            &nbsp;
            <a className="btn btn-lg btn-primary" href="/signup">Sign up</a>
          </div>
          <br />
          <a href="#about" className="arrow-trans">
            <i className="fas fa-arrow-circle-down"></i>
          </a>
        </div>
        <div className="parallax">

        <div className="about">
          <div className="about-card" id="about">
          <h1 className= "about-header">

          About us
          </h1>
          <br />
          <p className= "about-des">
          Be the boldest you can be. Fashi.On is here to take the stress off the busy, the indecisive, the men, the women - who enjoy the social factors of events but just dont know what to wear!
          </p>
          <br />
          <h1 className= "about-header2">
          How to:
          </h1>
          <br />
          <p className= "about-des2">
          Curious on how to get started? Simply sign-up for a username, you will then be re-directed to a survey where you will inform us of what your needs are. Afterwards, you will see your created occasion displayed on your profile - giving you the results youve specified based off of each individual survey. There on, choose from the items displayed and youre ready to go! Feel better yet? Start today!
          </p>
        <h1 className="line">
        
        </h1>
        <br />
        <br />
        <div className="gyphyicons">
          <div className="row">
            <div className="col-md-4">
                <a href="https://github.com/saranasr83/Fashi.ON" target="_blank" alt="github-repo">
                  <i className="fab fa-github"></i>
                </a>
                <br/>
                <p className= 'icon-ex'>
                Github
                </p>
              </div>
              <div className="col-md-4">
                  <a href="/NoMatch" target="_blank" alt="contact">
                    <i className="far fa-envelope"></i>
                  </a>
                  <br/>
                  <p className= 'icon-ex'>
                  Contact
                  </p>
              </div>
              <div className="col-md-4">
                  <a href="/signup" target="_blank" alt="CreateUser">
                    <i className="fas fa-user-plus"></i>
                  </a>
                  <br/>
                  <p className= 'icon-ex'>
                    Signup
                  </p>
              </div>
            </div>
        </div>
        <br/>
          <h1 className="line">
            
          </h1>
          </div>
        <div className="quote">
          <p> “You can have anything you want in life, if you dress for it.” — Edith Head
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
