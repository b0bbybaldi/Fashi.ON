import React, {Component} from "react";
import "./Signup.css";
import API from '../../utils/API';
import Header from '../../components/Header/Header.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from 'classnames';
import Button from '../../components/Button';


class Signup extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
      //write function inside of API for loadSurvey
      API.createUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => res.redirect('/'))
        .catch(err => console.log(err));
    }
  };


render(){
  document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1485518882345-15568b007407?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9de002b94630e160d9e33c36decc06f3&auto=format&fit=crop&w=681&q=80")`
  return (
  <div className= "signup-page">
  <Header />
  <div className="signup-form">
        <Typography variant="headline" component="h3">
          Were happy to have you here.
        </Typography>
        <Typography component="p">
          Please fill out the form below in order to continue to your personalized
          profile.
        </Typography>

        <TextField
            id="firstName"
            label="firstName"
            name = "firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

        <TextField
            id="lastName"
            label="Last Name"
            name = "lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <TextField
              id="email"
              label="Email"
              name= "email"
              value={this.state.email}
              onChange={this.handleChange}
          />



          <FormControl className={classNames()}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            name="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* onclick of this button will create a new users account */}
        <Button onClick={this.handleFormSubmit} children='Sign Up' />
      </div>
      </div>

    );
  }
}

export default Signup;
