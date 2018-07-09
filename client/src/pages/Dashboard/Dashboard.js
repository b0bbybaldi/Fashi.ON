import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import OccasionCard from "../../components/OccasionCard";
import API from '../../utils/API';
import axios from "axios";
class Dashboard extends Component {

  state = {
    occasions: [],
    email: "gustavo.gibo@gmail.com",
    firstName: ""

  };

  componentDidMount() {
    this.loadOccasions(this.state.email);
  }

  loadOccasions = (email) => {
    API.getOccasions(email).then(res => {
      this.setState({ occasions: res.data })
      console.log(this.state.occasions );
      // window.location.href("/occasion")
    })
      .catch(err => console.log(err));
  };

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
