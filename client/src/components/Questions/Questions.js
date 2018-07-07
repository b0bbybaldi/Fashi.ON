import React, { Component } from "react";
import Form from "../Form";
class Questions extends Component {
    render() {
        return (
            <div>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                        <label className="mr-sm-2" for="inlineFormCustomSelect">{this.props.question}</label>
                        <select className="custom-select mr-sm-2" name={this.props.name} id="inlineFormCustomSelect" onChange={this.props.change}>
                            <option selected>Choose...</option>
                            <option value={this.props.option1}>{this.props.option1}</option>
                            <option value={this.props.option2}>{this.props.option2}</option>
                            <option value={this.props.option3}>{this.props.option3}</option>
                            <option value={this.props.option4}>{this.props.option4}</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
    export default Questions;