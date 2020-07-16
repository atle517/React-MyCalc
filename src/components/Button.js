import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Button.css';

class Button extends Component {

    constructor(props) {
        super(props);

        this.buttonValue = props.buttonValue;

        //Set Button styling
        let p = props;

        this.className = "component-button";

        //Wide or small
        if (p.wide) {
            this.className += " wide"
        } else if (p.small) {
            this.className += " small";
        }

        //Colors
        // eslint-disable-next-line default-case
        switch (p.color) {
            case "blue":
                this.className += " blue";
                break;

            case "red":
                this.className += " red";
                break;

            case "orange":
                this.className += " orange";
                break;

        }

    }

    render() {
        return <button className={this.className} onClick={() => this.props.clickHandler(this.buttonValue)} >{this.buttonValue}</button>

    }
}

// Prop types
Button.propTypes = {
    wide: propTypes.bool,
    color: propTypes.string
}


export default Button
