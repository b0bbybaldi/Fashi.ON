import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./NoMatch.css";


class NoMatch extends Component{

render () {

document.body.style.backgroundImage = `url(${'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10c2cdddabb33d3900c57b4ee4bfe8ac&auto=format&fit=crop&w=1350&q=80'})`
return (

  <div>
      <Navbar />
      <div className="card error">
      <div className="errorText">
      <h1>404! Error [Not found]</h1>
      <h2>Ruh roh! Something went wrong </h2>
        <a href="/">
          <i className="fas fa-home"></i>
        </a>
        <br/>
        <p className="icon-exp">
          Go Home
        </p>
      </div>
      </div>

      <Footer />
  </div>
)

}};


export default NoMatch;
