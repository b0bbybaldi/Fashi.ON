import React from "react";
import "./Login.css";
import Header from '../../components/Header/Header.js';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
//import TextField from '@material-ui/core/TextField';

const Login = () => (
  <div>
    <Header />
    <container>
     <h1> LOGIN!!</h1>
<div>
     <TextField
         required
         id="required"
         label="Required"
         defaultValue="Hello World"
         //className={classes.textField}
         margin="normal"
       />
</div>
<div>
     <FormControl>
       <InputLabel htmlFor="adornment-password">Password</InputLabel>
       <Input
         id="adornment-password"
         type={'password'}
         //value={}
         //onChange={}
         endAdornment={
           <InputAdornment position="end">
             <IconButton
               aria-label="Toggle password visibility"
               onClick={this.handleClickShowPassword}
               onMouseDown={this.handleMouseDownPassword}
             >
               {/*this.state.showPassword ? <VisibilityOff /> : <Visibility />*/}
             </IconButton>
           </InputAdornment>
         }
       />
     </FormControl>
     </div>
     </container>
  </div>
);


export default Login;
