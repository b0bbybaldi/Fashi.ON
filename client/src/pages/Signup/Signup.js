import React, { Component } from "react";
import "./Signup.css";
import API from '../../utils/API';
import Navbar from '../../components/Navbar/Navbar.js';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Background from './signup-bg.jpg';
import Button from '../../components/Button';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dashboard from "../Dashboard"

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
    isLoggedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: ""

  }
  // componentWillMount() {
  //   API.getUser()
  //     .then(user => {
  //       console.log(user)
  //       this.setState({
  //         isLoggedIn: this.state.isLoggedIn,
  //         firstName: this.state.firstName,
  //         lastName: this.state.lastName,
  //         email: this.state.email,
  //         gender: this.state.gender
  //       });
  //     })
  // }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.gender) {
  //     //write function inside of API for loadSurvey
  //     API.createUser({
  //       firstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       email: this.state.email,
  //       password: this.state.password,
  //       gender: this.state.gender
  //     })
  //       .then(res => this.setState({ 
  //         firstName: '',
  //         lastName:'',
  //         email: '',
  //         password: '',
  //         gender: ''
  //       })) 

  //       .catch(err => console.log(err));
  //   }
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.email && this.state.password && this.state.firstName && this.state.lastName && this.state.gender) {
      fetch("auth/signup", {
        method: "POST",
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          gender: this.state.gender,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }).then(response => {
        // this.setState({
        //   firstName: "",
        //   email: "",
        //   password: "",
        //   lastName: "",
        //   gender: ""
        // });
        console.log(response);
        // window.location.href = "/survey";
      }).catch(err => console.log(err));
    }
    // if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.gender) {

    //   //Use fetch here because it deals with cors more effectively than axios. This allows easy cookie storage
    //   API.authenticateUser({          
    //       firstName: this.state.firstName,
    //       lastName:this.state.lastName,            
    //       email: this.state.email,
    //       password: this.state.password,
    //       gender: this.state.gender
    //   })
    //   .then(response => {
    //     console.log(response);

    //     // window.location.href = "/survey";
    //   }).catch(err => console.log(err));

    //   this.setState({
    //     firstName: "",
    //     email: "",
    //     password: "",
    //     lastName: "",
    //     gender:""
    //   });

    // }
  }


  render() {
    const cookie = document.cookie.split(";");
    // const { classes } = this.props;
    document.body.style.backgroundImage = `url(${Background})`
    if (this.state.isLoggedIn) {
      return (
        <Router>
          <div>
            <Route exact path="/dashboard" component={Dashboard} firstName={this.state.firstName} lastName={this.state.lastName} />
          </div>
        </Router>
      )
    } else {
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
}

// Signup.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Signup;
