import React from "react";
import "./Signup.css";
import Header from '../../components/Header/Header.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const Signup = () => (
  <div>
  <Header />
<div>
      <Paper className= "" elevation={1}>
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
          //className={classes.textField}
          //value={this.state.name}
          //onChange={this.handleChange('name')}
          //margin="normal"
        />

  <TextField
            id="lastName"
            label="Last Name"
            //className={classes.textField}
            //value={this.state.name}
            //onChange={this.handleChange('name')}
            //margin="normal"
          />

  <TextField
            id="userName"
            label="User Name"
                    //className={classes.textField}
                    //value={this.state.name}
                    //onChange={this.handleChange('name')}
                    //margin="normal"
                  />


          <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
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





      </Paper>
    </div>


  </div>

);


export default Signup;
