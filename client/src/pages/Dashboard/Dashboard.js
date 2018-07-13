import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import OccasionCard from "../../components/OccasionCard";
import HowToCard from "../../components/HowToCard";
import API from '../../utils/API';
class Dashboard extends Component {

  state = {
    occasions: [],
    isLoggedIn: false,
    email: "",
    id: ""

  };

  componentDidMount() {
    API.getUser()
      .then(user => {
        this.setState({
          isLoggedIn: user.data.loggedIn,
          email: user.data.email,
          id: user.data._id
        });

        if(this.state.isLoggedIn) {

          this.loadOccasions(this.state.email)

        } else {

          window.location.href = "/";
          
        }

        console.log(this.state)
      })
  }

  // componentWillMount() {
  //   this.loadOccasions(this.state.email);
  // }

  loadOccasions = (email) => {
    API.getOccasions(email).then(res => {
      // console.log("user data", res.data);
      this.setState({ occasions: res.data[0].occasions })
      // console.log(res.data[0].occasions);
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
              <div className="col-8 text-center">
                <h3 className="display-3"></h3>
              </div>
            </div>
           
            <div className="row d-flex justify-content-center">
            <HowToCard />
              {this.state.occasions.map((occ) => (
                <OccasionCard
                  id={`/occasion/${occ._id}`}
                  dresscode={occ.dresscode}
                  season={occ.season}
                  budget={occ.budget}
                  items={occ.items}
                />
              ))}
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
