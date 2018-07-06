import React, { Component } from "react";
import "./Survey.css";
import Questions from "../../components/Questions";
import options from "../../options.json";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

class Survey extends Component {

    state = {
        options: options
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <Navbar />
                {this.state.options.map((options, key) => (
                <Questions
                    id={options.id}
                    key={key}
                    name={options.name}
                    option1={options.option1}
                    option2={options.option2}
                    option3={options.option3}
                    option4={options.option4}
                    value={this.state.options}
                    onChange={this.handleInputChange}

                />
            ))}
                <br />
                {/* <Questions
                    
                    id={options.id}
                    key={key}
                    name={options.name}
                    option1={options.option1}
                    option2={options.option2}
                    option3={options.option3}
                    option4={options.option4}
                    value={this.state.options}
                    onChange={this.handleInputChange}
                /> */}
                <br />
                {/* <Questions
                    
                    id="question3"
                    name="question3"
                    value={this.state.question3}
                    onChange={this.handleInputChange}
                />
                <br />
                <Questions
                    
                    id="question4"
                    name="question4"
                    value={this.state.question4}
                    onChange={this.handleInputChange}
                /> */}
                
                <br />
                {/* onclick of this button will create a new users account */}
                <Button onClick={this.handleFormSubmit} children='Submit' />
            </div>

        );
    }

}


export default Survey;