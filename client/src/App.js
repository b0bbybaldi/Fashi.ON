import React, { Component } from "react";
import Navbar from "./components/Navbar/"
import "./App.css";

class App extends Component {
  render() {
    return (
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
      </div>
    );
  }
}

export default App;
