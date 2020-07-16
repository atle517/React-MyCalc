import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NumberScreen.css';

class NumberScreen extends Component {
    render() {
        //Destructering
        const { number1, operator, number2 } = this.props;

        //if number2 doesn't contain anything other than zero, don't show it
        let displayValue = (number2 === "0") ? number1 + operator : number1 + operator + number2;

        return (
            <div>
                <input className="number-screen" disabled value={displayValue} />
            </div>
        )
    }
}

NumberScreen.propTypes = {
    operator: PropTypes.string
}


export default NumberScreen
