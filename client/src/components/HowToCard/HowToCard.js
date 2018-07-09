import React, { Component } from "react";
import "./HowToCard.css";

class HowToCard extends Component {

  render() {
    return (
        <div className="col-12 col-sm-12 col-md-4">
            <div className="card">
            <img className="card-img-top responsive" src="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=361443dfa9b671620076cd18e12d060d&auto=format&fit=crop&w=1650&q=80" alt="How to img" />
                <div className="card-body">
                    <h3 className="card-title">
                    How to:
                    </h3>
                    <p class= 'HowToPara'>
                    Welcome to your dashboard, here is where your pre-existing occasions will be displayed
                    making it easier for you to re-visit past or current event inpirations.
                      <div className="newOccasion-btn">
                        <a className="btn btn-danger" href="/survey">Create Occasion</a>
                      </div>
                    </p>
                </div>

            </div>
        </div>
    )
  }

}

export default HowToCard;
