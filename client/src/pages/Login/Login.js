import React, { Component } from "react";
import "./Login.css";
import Navbar from '../../components/Navbar/Navbar.js';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Background from './signup-background.jpg';
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
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class Login extends Component {

  state = {
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
    // if (this.state.email && this.state.password) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // } 
  };

  render() {
    document.body.style.backgroundImage = `url(${Background})`
    return (
    
        <div className="login-page">
          <Navbar />
          <div className="d-flex justify-content-center">
            <div className="login-card">
              <Card>
                <CardMedia
                  image=""
                  title="LoginPhoto"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Glad to have you back!
            </Typography>
                  <Typography component="p">
                    Login to continue
            </Typography>
                  <div id="login-field">
                    <TextField
                      id="email"
                      label="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    <FormControl>
                      <InputLabel htmlFor="adornment-password">Password</InputLabel>
                      <Input
                        id="adornment-password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type={'password'}
                      />
                    </FormControl>
                    <Button
                      onClick={this.handleFormSubmit}
                      color="primary"
                      variant="contained"
                    >
                      Login
                </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    )
  }
}


export default Login;
