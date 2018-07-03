import React from "react";
import "./Signup.css";
import Header from '../../components/Header/Header.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



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
<p> what is your name?? </p>





      </Paper>
    </div>


  </div>

);


export default Signup;
