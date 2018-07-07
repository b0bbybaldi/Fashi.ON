import React, { Component } from "react";
import "./Signup.css";
import API from '../../utils/API';
import Navbar from '../../components/Navbar/Navbar.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Background from './signup-bg.jpg';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from 'classnames';
import Button from '../../components/Button';

const gender = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  }
];


class Signup extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: ""

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.gender) {
      //write function inside of API for loadSurvey
      API.createUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender
      })
        .then(res => res.redirect('/survey'))

        .catch(err => console.log(err));
    }
  };


  render() {
    const {classes} = this.props;
    document.body.style.backgroundImage = `url(${Background})`
    return (
      
      <div className="signup-page">
        <Navbar />
        <div className="d-flex justify-content-center">
          <div className="form-signup">
            <Typography variant="headline" component="h3">
              Were happy to have you here.
          </Typography>
            <Typography component="p">
              Please fill out the form below in order to continue to your personalized
              profile.
          </Typography>

            <TextField
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              fullWidth
              id="gender"
              name="gender"
              select
              label="Gender"
              value={this.state.gender}
              margin="normal"
              onChange={this.handleChange}
            >
            {gender.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </TextField>
              <br />
              <TextField
                fullWidth
                id="password-input"
                name="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <br />
              <br />
              {/* onclick of this button will create a new users account */}
              <Button onClick={this.handleFormSubmit} children='Sign Up' />
          </div>
          </div>
        </div>
        );
      }
    }

    Signup.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default Signup;
