import React from "react";
import "./Header.css";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <div>
    <AppBar position="static" color="default">
       <Toolbar>
         <Typography variant="title" color="inherit">
           Fashi.On
         </Typography>
       </Toolbar>
     </AppBar>

  </div>
);


export default Header;
