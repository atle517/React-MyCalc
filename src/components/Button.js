import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Button.css';

class Button extends Component {

    static propTypes = {
        wide: propTypes.bool
    }

    constructor(props) {
        super(props);

        this.buttonValue = props.buttonValue;

        //Set Button styling
        let p = props;

        if (p.wide && p.color === "red") {
            this.className = "component-button wide red";
        } else if (p.wide) {
            this.className = "component-button wide";
        } else if (p.color === "blue") {
            this.className = "component-button blue";
        } else {
            this.className = "component-button";
        }

    }

    render() {
        return (
            <div>
                <button className={this.className} onClick={() => this.props.clickHandler(this.buttonValue)}>{this.buttonValue}</button>
            </div>
        )
    }
}

export default Button
