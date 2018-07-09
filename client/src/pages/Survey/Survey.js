import React, { Component } from "react";
import "./Survey.css";
import API from '../../utils/API';
import Questions from "../../components/Questions";
import CheckColors from "../../components/CheckColors";
import options from "../../options.json";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Background from './survey-bg.jpg';

class Survey extends Component {

    state = {
        dresscode: "",
        season: "",
        budget: 50,
        colors: [],
        checked: this.props.checked || false
    }

    handleInputChangeRange = event => {
        const { name, value } = event.target;

        document.getElementById("budget-value").innerHTML = `$ ${value}`;

        console.log(value);
        this.setState({
            [name]: value
        });

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        });

    };

    handleInputChangeCheckBox = event => {

        const { name, value } = event.target;
        console.log("clicked", value);
        if(this.state.colors.indexOf(value) === -1) {
            
            this.state.colors.push(value);

        } else {

            this.state.colors.splice(this.state.colors.indexOf(value), 1);

        }
        console.log(this.state.colors);
        this.setState({
            [name]: this.state.colors
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.dresscode && this.state.season && this.state.budget && this.state.colors) {
            API.createOccasion({
                dresscode: this.state.dresscode,
                season: this.state.season,
                budget: this.state.budget,
                colors: this.state.colors,
                id: "5b43a6c06ae08e3dc4b9b315"
            })
                .then(res => {
                    this.setState({ dresscode: "", season: "", budget: "", colors: "" })
                    window.location.href = "/dashboard";
                })
                .catch(err => console.log(err));
        }
    };
    handleClick = (e) => {
        this.setState({ checked: e.target.checked });
    }
    render() {
        document.body.style.backgroundImage = `url(${Background})`
        return (
            <div>
                <Navbar />
                <div className="d-flex justify-content-center bg-survey">
                    <form className="budget-form">
                        <h2 className="text-center">Let's get some information about your next occasion!</h2>
                        {options.map((op, key) => (
                            <Questions
                                question={op.question}
                                id={op.id}
                                key={key}
                                name={op.name}
                                option1={op.option1}
                                option2={op.option2}
                                option3={op.option3}
                                option4={op.option4}
                                value={this.state.op}
                                change={this.handleInputChange}
                            />
                        ))}
                        <CheckColors
                            change={this.handleInputChangeCheckBox}
                            value={this.state.colors}
                            click={this.handleClick}
                        />
                        <div className="form-group">
                            <label for="formControlRange">What is your budget?</label>
                            <p id="budget-value">$ 50</p>
                            <input
                                type="range"
                                className="form-control-range"
                                name="budget"
                                value={this.state.budget}
                                id="formControlRange"
                                onChange={this.handleInputChangeRange}
                                min="50"
                                max="1000"
                            />
                        </div>
                        {/* onclick of this button will create a new users account */}
                        <Button onClick={this.handleFormSubmit} children='Submit' />
                    </form>
                </div>
            </div>

        );
    }
}
export default Survey;