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
                <div class="col-12 col-sm-12 col-md-4">
                    <div class="card">
                        <a href="assets/img/homepage.jpg" class="fancybox">
                            <img class="card-img-top" src="assets/img/homepage.jpg" alt="Card image cap" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Satiable Soiree</h5>
                            <p class="card-text">Managing a food-gathering event can be easy now! Create your event, invite your friends and they decide which food to bring! Using modern tools like Node.js, Express, Handlebars and Sequelize, this group project was a great experience! </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">HTML5, CSS3, Bootstrap</li>
                            <li class="list-group-item">Javascript, jQuery, Moment.js, Typer.js</li>
                            <li class="list-group-item">Node.js, Express, Handlebars, Sequelize, MySQL</li>
                        </ul>
                        <div class="card-body">
                            <a href="https://github.com/Blonded/Satiable-Soiree" target="_blank" class="card-link">Repository</a>
                            <a href="https://warm-dusk-10926.herokuapp.com/" target="_blank" class="card-link">Project Website</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Occasion;
