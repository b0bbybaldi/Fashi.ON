import React, { Component } from "react";
import colors from "../../colors.json";
import items from "../../items.json";

class CheckBoxes extends Component {

    render() {
        if (this.props.type === "colors") {
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
                                        id={op.color}
                                        value={op.code}
                                        name="colors"
                                        onChange={this.props.change}
                                        onClick={this.props.click}
                                    />
                                    <label className="form-check-label" for={op.color}>{op.color}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <p>Items I'm looking for:</p>
                            {items.map((op) => (
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={op}
                                        value={op}
                                        name="items"
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
}
export default CheckBoxes;