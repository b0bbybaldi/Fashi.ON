import React, { Component } from "react";
import Form from "../Form";
class Questions extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>Occasion type or Dresscode that I'm looking for:</li>
                    <Form />
                    <li>My event will be in:</li>
                    <Form />
                    <li>My color preferrences:</li>
                    
                    <li>My budget range is:</li>
                    
                </ol>
            </div>
        );
    }
}
    export default Questions;