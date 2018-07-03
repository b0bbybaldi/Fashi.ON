import React, {Component} from "react";
import "./Signup.css";
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


class Signup extends Component {

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
            label="First Name"
            //className={}
            //value={this.state.name}
            //onChange={this.handleChange('name')}
            //margin="normal"
          />

        <TextField
            id="lastName"
            label="Last Name"
            //className={}
            //value={this.state.name}
            //onChange={this.handleChange('name')}
            //margin="normal"
          />

          <TextField
              id="userName"
              label="User Name"
              //className={}
              //value={this.state.name}
              //onChange={this.handleChange('name')}
              //margin="normal"
          />

          <FormControl className={classNames()}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          </FormControl>
        </div>
    </div>

);
}}


export default Signup;
