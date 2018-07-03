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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const Login = () => (
    <div>
    <Header />
     <Card
        id = "login-content"
        >
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
             //className={classes.textField}
             margin="normal"
           />

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
       </CardContent>


    //
    // <CardActions>
    //          <Button size="small" color="primary">
    //            Share
    //          </Button>
    //          <Button size="small" color="primary">
    //            Learn More
    //          </Button>
    //        </CardActions>
    //      </Card>
    //    </div>



);


export default Login;
