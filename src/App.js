import React, { createElement } from 'react';
import './App.css';
import Button from './components/Button';
import NumberScreen from './components/NumberScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      isNumber1: true,
      number1: "0",
      operator: "",
      number2: "0"

    }
  }

  isNumeric(value) {
    return /^-{0,1}\d+$/.test(value);
  }

  addNumber = number => {

    // Decide which number should be changed
    let changeNumber = this.state.isNumber1 ? "number1" : "number2";

    let newNumber = 0;

    // Check if a zero should be replaced by a number
    if (this.state.isNumber1) {
      newNumber = (this.state.number1 === "0") ? number.toString() : this.state.number1 + number.toString();
    } else {
      newNumber = (this.state.number2 === "0") ? number.toString() : this.state.number2 + number.toString();
    }

    // Change number
    this.setState({
      [changeNumber]: newNumber,
    });

  }

  // Set the operator
  setOperator = operator => {
    this.setState({
      operator,
      isNumber1: false
    });
  }

  // AC Button - Clear everything
  clearEverything = () => {
    this.setState({
      isNumber1: true,
      number1: "0",
      operator: "",
      number2: "0"
    });
  }

  // Adds a "." to the number
  addDecimal = number => {

    // Decide which number to change
    let changeNumber = this.state.isNumber1 ? "number1" : "number2";

    // If the number already contains a '.' then just exit the function
    if (this.state.isNumber1) {
      if (this.state.number1.includes('.')) return;
    } else {
      if (this.state.number2.includes('.')) return;
    }

    // Get the new number to set
    let newNumber = this.state.isNumber1 ? this.state.number1 + "." : this.state.number2 + ".";

    // Set the number
    this.setState({
      [changeNumber]: newNumber
    });
  }

  //Remove last number or operation
  removeLast = () => {
    let number = this.state.isNumber1 ? this.state.number1 : this.state.number2;
    let changeNumber = this.state.isNumber1 ? "number1" : "number2";

    number = number.substring(0, number.length - 1);

    this.setState({
      [changeNumber]: number
    });

  }

  //Solves the equation
  equals = () => {
    let operator = this.state.operator;

    let number1 = Number(this.state.number1);
    let number2 = Number(this.state.number2);
    let answer = 0;

    if (operator === "+") {
      answer = number1 + number2;
    } else if (operator === "-") {
      answer = number1 - number2;
    } else if (operator === "x") {
      answer = number1 * number2;
    } else if (operator === "/") {
      answer = number1 / number2;
    }

    this.setState({
      isNumber1: true,
      number1: answer.toString(),
      operator: "",
      number2: "0"
    });

  }

  render() {
    return (
      <div className="calculator">

        <p className="logo-text">My React Calculator</p>
        {/* Number Screen */}
        <NumberScreen number1={this.state.number1} operator={this.state.operator} number2={this.state.number2} />

        <div className="calculator-buttons">
          {/* Row 5 */}
          <Button buttonValue="AC" clickHandler={this.clearEverything} wide color="red" />
          <Button buttonValue="←" clickHandler={this.removeLast} color="red" />
          <Button buttonValue="/" clickHandler={this.setOperator} color="orange" />

          {/* Row 4 */}
          <Button buttonValue="7" clickHandler={this.addNumber} />
          <Button buttonValue="8" clickHandler={this.addNumber} />
          <Button buttonValue="9" clickHandler={this.addNumber} />
          <Button buttonValue="x" clickHandler={this.setOperator} color="orange" />

          {/* Row 3 */}
          <Button buttonValue="4" clickHandler={this.addNumber} />
          <Button buttonValue="5" clickHandler={this.addNumber} />
          <Button buttonValue="6" clickHandler={this.addNumber} />
          <Button buttonValue="-" clickHandler={this.setOperator} color="orange" />

          {/* Row 2 */}
          <Button buttonValue="1" clickHandler={this.addNumber} />
          <Button buttonValue="2" clickHandler={this.addNumber} />
          <Button buttonValue="3" clickHandler={this.addNumber} />
          <Button buttonValue="+" clickHandler={this.setOperator} color="orange" />

          {/* Row 1 */}
          <Button buttonValue="0" wide clickHandler={this.addNumber} />
          <Button buttonValue="," clickHandler={this.addDecimal} />
          <Button buttonValue="=" clickHandler={this.equals} color="blue" />

        </div>
      </div>
    );
  }
}