import "./Occasion.css";
import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import SuggestionCard from "../../components/SuggestionCard";
import API from '../../utils/API';

var occasionId = window.location.pathname;
occasionId = occasionId.split("/");
occasionId = occasionId[2];

console.log(occasionId);

class Occasion extends Component {

    state = {
        suggestions: [],
        searchTerm: "dress",
        name: "",
        brandName: "",
        price: "",
        colour: "",
        baseImageUrl: "",
        url: "",
        proId: "",
        dresscode: "",
        season: "",
        items:"",
        colors:"",
        budget:""

    };
    componentDidMount() {
        // this.asosAjaxCall();
        this.bringOccasion(occasionId);
    }

    bringOccasion = () => {
        API.getOccasion(occasionId)
        .then(response => {

            this.setState({
                dresscode: response.data.dresscode,
                season: response.data.season,
                items: response.data.items,
                colors: response.data.colors,
                budget: response.data.budget
            })

        })
    }
    asosAjaxCall = (item) => {
        // event.preventDefault();
        var terms = {
            dresscode: this.state.dresscode,
            season: this.state.season,
            items: item,
            colors: this.state.colors,
            budget: this.state.budget
        };

        // var terms ="test";
                
        console.log("function called");
        API.getSuggestions(terms)
            .then(res => {
                this.setState({ suggestions: res.data })
                console.log("25", res.data);
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
                            <button className="btn btn-success" onClick={ () => this.asosAjaxCall("coats")}>
                                Coats
                            </button>
                        </div>
                        <div className="row d-flex justify-content-center">
                            {this.state.suggestions.map((suggestions,key) => (
                                <SuggestionCard
                                    key={key}
                                    name={suggestions.name}
                                    brandName={suggestions.brandName}
                                    price={suggestions.price.current.text}
                                    colour={suggestions.colour}
                                    baseImageUrl={suggestions.baseImageUrl}
                                    proId={suggestions.id}
                                    // url="http://us.asos.com/search/?q=dress&page=1&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness"
                                    url={`http://us.asos.com/${suggestions.name}/prd/${suggestions.id}?clr=${suggestions.colour}&SearchQuery=dress&gridcolumn=2&gridrow=1&gridsize=4&pge=1&pgesize=72&`}
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
export default Occasion;
