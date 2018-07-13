import React, { Component } from "react";
import "./SuggestionCard.css"
class SuggestionCard extends Component {

    state = {
        suggestions: [],
        searchTerm: "",
        name: "",
        brandName: "",
        price: "",
        colour: "",
        baseImageUrl: "",
        url: "",
        proId: ""
    };
    render() {
        return (
            <div className="col-12 col-sm-10 col-md-2 w3-animate-top">
                <div className="card">
                    <a href={this.props.url}><img className="card-img-top img-fluid" id="suggestion-card-img" src={this.props.baseImageUrl} alt="wedding-img" /></a>
                    <div className="card-body">
                        <p className="card-title">{this.props.brandName}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.name}</li>
                        <li className="list-group-item">{this.props.price}</li>
                        <li className="list-group-item">{this.props.colour}</li>
                        <li className="list-group-item"><a href={this.props.url} target="_blank">Go To Website</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SuggestionCard;