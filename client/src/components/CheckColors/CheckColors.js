import React, { Component } from "react";
import colors from "../../colors.json";
class CheckColors extends Component {
    render() {
        return (
            <div>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                        <p>My color preferrences:</p>
                        {colors.map((op) => (
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id={op} 
                                    value={op}
                                    name="colors"
                                    onChange={this.props.change}
                                    onClick={this.props.click}
                                />
                                <label className="form-check-label" for={op}>{op}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
    export default CheckColors;