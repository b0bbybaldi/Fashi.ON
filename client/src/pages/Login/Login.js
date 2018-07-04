import React, {Component} from "react";
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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




class Login extends Component {

render(){
  document.body.style.backgroundImage = `url("http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_66/cw_288/ch_162/APL/uploads/2014/10/cat_5-1.jpg")`
  return (
  <div className="login-page">
      <Header />
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
             Please, log-in.
           </Typography>
           <div id = "login-field">
             <TextField
                 required
                 id="required"
                 label="Required"
                 defaultValue="Username"
                 margin="normal"
               />


               <FormControl>
                 <InputLabel htmlFor="adornment-password">Password</InputLabel>
                 <Input
                   id="adornment-password"
                   type={'password'}
                 />
               </FormControl>
          </div>
          </CardContent>
        </Card>
    </div>
  </div>

)


}}


export default Login;
