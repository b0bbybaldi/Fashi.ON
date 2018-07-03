import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import Home from "./pages/Home/Home.js";
import UserProfile from "./pages/UserProfile/UserProfile.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Occasion from "./pages/Occasion/Occasion.js";
import NoMatch from "./pages/NoMatch/NoMatch.js";




class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/occasion/:id" component={Occasion} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}


export default App;
