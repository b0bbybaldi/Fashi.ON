import "./Occasion.css";
export default Occasion;
import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import OccasionCard from "../../components/OccasionCard";
import API from '../../utils/API';

class Dashboard extends Component {

  state = {
    suggestions: []
  };
  componentDidMount() {
   this.asosAjaxCall();
  }
  
  asosAjaxCall = () => {
    API.getSuggestions()
      .then(res => {
        this.setState({ suggestions: res.data })
        console.log(this.state.suggestions)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="paral paralsec3" id="paralsec3">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-12 text-center">
                <h3 className="display-3">Your Occasions</h3>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <OccasionCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
