import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Occasion from "./pages/Occasion";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/userprofile" component={UserProfile} />
      <Route exact path="/occasion/:id" component={Occasion} />
      <Route component={NoMatch} />
    </Switch>
  </div>
  </Router>
);

export default App;
