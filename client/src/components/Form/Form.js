import React from "react";
import "./Form.css";

const Form = props => (

        <form>
            <div className="form-row align-items-center">
                <div className="col-auto my-1">
                    <label className="mr-sm-2" for="inlineFormCustomSelect"></label>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="1">{props.option1}</option>
                        <option value="2">{props.option2}</option>
                        <option value="3">{props.option3}</option>
                        <option value="4">{props.option4}</option>
                    </select>
                </div>
            </div>
        </form>
);
    export default Form;
