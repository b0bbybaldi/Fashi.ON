import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Home.css";

var dt = new Date();
dt = (dt.getYear() + 1900) ; 

const Home = () => (
      
      <div>
      <Navbar />
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Fashi.On</h2>
        </div>
        <p className="App-intro">
          Get started with us today!
        </p>
      </div>
      <Footer year={dt}/>
      </div>
);


export default Home;
