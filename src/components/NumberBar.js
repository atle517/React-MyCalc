import React, { Component } from 'react'
import './NumberBar.css';

class NumberBar extends Component {
    render() {
        return (
            <div>
                <input id="calcField" className="component-number-field" value={this.props.value} disabled />
            </div>
        )
    }
}

export default NumberBar
