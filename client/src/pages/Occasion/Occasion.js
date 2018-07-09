import "./Occasion.css";
import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import OccasionCard from "../../components/OccasionCard";
import API from '../../utils/API';

class Occasion extends Component {

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
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="card">
                        <a href="assets/img/homepage.jpg" className="fancybox">
                            <img className="card-img-top" src="assets/img/homepage.jpg" alt="Card image cap" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"></p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">searchTerm</li>
                            <li className="list-group-item">products[0].name</li>
                            <li className="list-group-item">products[0].price.current.text</li>
                            <li className="list-group-item">products[0].brandName</li>
                        </ul>
                        <div className="card-body">
                            <a href="" target="_blank" className="card-link">products[0].baseImageUrl</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Occasion;
