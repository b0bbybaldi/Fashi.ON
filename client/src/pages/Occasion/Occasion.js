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
        proId: ""

    };
    componentDidMount() {
        this.asosAjaxCall();
    }
    asosAjaxCall = () => {
        console.log("function called");
        API.getSuggestions(this.state.searchTerm)
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
