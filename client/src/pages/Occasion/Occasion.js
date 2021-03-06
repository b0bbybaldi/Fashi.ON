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
import outfit from "../../items.json";
import Button from "../../components/Button";
import Home from "../Home/Home";

var occasionId = window.location.pathname;
occasionId = occasionId.split("/");
occasionId = occasionId[2];

console.log(occasionId);

class Occasion extends Component {

    state = {
        isLoggedIn: false,
        gender:"",
        suggestions: [],
        name: "",
        brandName: "",
        price: "",
        colour: "",
        baseImageUrl: "",
        url: "",
        proId: "",
        dresscode: "",
        season: "",
        items: "",
        colors: "",
        budget: "",
        itemsArr:[],
        test: []
    };
    componentDidMount() {
        API.getUser()
        .then(user => {
            this.setState({
            isLoggedIn: true,
            gender: user.data.gender,
            });
        })
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

                this.getItemsArr();

            })
    }
    asosAjaxCall = (item) => {
        // event.preventDefault();
        // const queryParam = `${this.state.dresscode}+${this.state.season}+${this.state.items}`;
        const cOlors = this.state.colors;
        const bUdget = this.state.budget;
        const Gender = this.state.gender;
        const dressCode = this.state.dresscode;
        const iTems = item.suggestion;
        const sEason = this.state.season;
        var queryObj = [
            dressCode,
            sEason,
            bUdget,
            iTems,
            Gender,
            cOlors
        ]
        API.getSuggestions(queryObj)
            .then(res => {
                this.setState({ suggestions: res.data })
            })
            .catch(err => console.log(err));
    }

    getItemsArr = ()=> {
        var arr = [];
        if (this.state.items.includes(",")) {

            arr = this.state.items.split(",");
            
        } else {

            arr.push(this.state.items);
            console.log("arr", arr);
        }
        this.setState({
            itemsArr : arr
        })

        console.log("89", this.state.itemsArr)
        
    }


    render() {

        if(this.state.isLoggedIn === false) {
            return (
                <Home />
            )
        }
        return (
            <div>
                <Navbar />
                <div className="paral paralsec3" id="paralsec3">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 text-center">
                                <h4 className="display-3">Here are some of the Hand-picked styles for you!</h4>
                                <p className="para">Click on the button(s) to load the surprise</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            {this.state.itemsArr.map((suggestion, index) => (
                                <Button className="btn btn-success" onClick={() => this.asosAjaxCall({suggestion})} children={suggestion} />
                                
                            ))}
                            {/* {this.state.itemsArr} */}
                            
                        </div>
                        <div className="row d-flex justify-content-center">
                            {this.state.suggestions.map((suggestions, key) => (
                                <SuggestionCard
                                    key={key}
                                    name={suggestions.name}
                                    brandName={suggestions.brandName}
                                    price={suggestions.price.current.text}
                                    colour={suggestions.colour}
                                    baseImageUrl={suggestions.baseImageUrl}
                                    proId={suggestions.id}
                                    // url="https://us.asos.com/search/?q=dress&page=1&store=2&lang=en-US&sizeschema=US&currency=USD&sort=freshness"
                                    url={`https://us.asos.com/${suggestions.name}/prd/${suggestions.id}?clr=${suggestions.colour}&SearchQuery=dress&gridcolumn=2&gridrow=1&gridsize=4&pge=1&pgesize=72&`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        );
    }
}
export default Occasion;
