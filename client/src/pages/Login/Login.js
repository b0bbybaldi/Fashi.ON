import React, { Component } from "react";
import "./Login.css";
import API from '../../utils/API';
import Navbar from '../../components/Navbar/Navbar.js';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer.js'
import SweetAlert from 'react-bootstrap-sweetalert';


class Login extends Component {

  state = {
    isLoggedIn: false,
    email: "",
    password: "",
    alert: null
  }

  componentWillMount() {
    API.getUser()
      .then(user => {
        console.log(user)
        this.setState({
          isLoggedIn: user.data.loggedIn,
        });
        console.log(this.state)
      })

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  showAlert(title, message, callBack, style) {
    this.setState({
      alert: (
        <SweetAlert
          warning
          title="test"
          onConfirm={this.hideAlert}
        >
          Test
        </SweetAlert>
      )
    });
  }

  hideAlert = () => {
    this.setState({
      alert: null
    });
  }

  handleFormSubmit = event => {

    event.preventDefault();
    if (this.state.password && this.state.email) {
      fetch("/auth/signin", {
        method: "POST",
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }).then(response => {
        console.log(response);
        //Will redirect to root route no matter what. Successful signin will create cookies. If cookies are detected, root route will redirect to Home, otherwise, to Landing
        window.location.href = "/dashboard";
      }).catch(err => {
        console.log("91", err);
      })

    } else {



    }

    this.setState({
      email: "",
      password: ""
    });
  };
  render() {

    if (this.state.isLoggedIn) {

      window.location.href = "/dashboard";

    } else {

      document.body.style.backgroundImage = `url(${'http://i63.tinypic.com/2v9oe1l.jpg'})`
      return (

        <div className="login-page">
          <Navbar />
          <div className="d-flex justify-content-center">
            <div className="w3-container w3-animate-opacity">
              <div className="login-card">
                <Card>
                  <CardMedia
                    image=""
                    email="LoginPhoto"
                  />
                  <CardContent>
                    <h3 className="welcomeText">
                      Glad to have you back!
                  <br />
                      Please log-in to continue.
              </h3>
                    <div id="login-field">
                      <div className="emailform-login">
                        <TextField
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          margin="normal"
                        />
                        <br />
                        <FormControl>
                          <InputLabel htmlFor="adornment-password">Password</InputLabel>
                          <Input
                            margin=""
                            id="adornment-password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type={'password'}
                          />
                        </FormControl>
                      </div>

                      <br />
                      <Button
                        onClick={this.handleFormSubmit}
                        children="Login"
                        color="danger"
                      />

                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          < Footer />
        </div>

      )
    }
  }
};


export default Login;
