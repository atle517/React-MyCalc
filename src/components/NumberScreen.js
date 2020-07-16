import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NumberScreen.css';

class NumberScreen extends Component {
    render() {

        const { number1, operator, number2 } = this.props;

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
