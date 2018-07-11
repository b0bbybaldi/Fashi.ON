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
        url: ""
    };
    render() {
        return (
            <div className="col-12 col-sm-12 col-md-4">
                <div className="card">
                    {/* <a href="assets/img/homepage.jpg" class="fancybox">
                      <img className="card-img-top" src="assets/img/homepage.jpg" alt="Card image cap" />
                  </a> */}
                    <img className="card-img-top" id="suggestion-card-img" src={this.props.baseImageUrl} alt="wedding-img" />
                    <div className="card-body">
                        <h3 className="card-title">{this.props.name}</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.brandName}</li>
                        <li className="list-group-item">{this.props.price}</li>
                        <li className="list-group-item">{this.props.colour}</li>
                        <li className="list-group-item"><a href={this.props.url}>Url</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SuggestionCard;