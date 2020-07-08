import React, { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import NumberBar from './components/NumberBar';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.displayedValue = 0;

    this.state = {

      isNumber1: true,
      number1: 0,
      operation: "",
      number2: 0

    }
  }


  clickHandler = buttonValue => {
    let v = buttonValue;

    if (v >= 0 && v <= 9) {
      this.addNumber(Number(v));
    }
  }

  addNumber = number => {

    if (this.state.isNumber1) {
      this.setState(prevState => ({
        number1: (prevState.number1 * 10) + number
      }), () => {
        this.updateFields();
        this.setState({ state: this.state });
      });

    } else {
      this.setState(prevState => ({
        number2: (prevState.number2 * 10) + number
      }), () => {
        this.updateFields();
        this.setState({ state: this.state });
      });
    }

  }

  updateFields = () => {

    if (this.state.isNumber1) {
      this.displayedValue = this.state.number1;
    } else {
      this.displayedValue = this.state.number2;
    }
  }

  render() {
    return (
      <div className="App">

        {/* Number Bar */}
        <NumberBar value={this.displayedValue} />

        {/* Row 5 */}
        <Button buttonValue="CE" wide color="red" />
        <Button buttonValue="←" wide />

        {/* Row 4 */}
        <Button buttonValue="7" clickHandler={this.clickHandler} />
        <Button buttonValue="8" clickHandler={this.clickHandler} />
        <Button buttonValue="9" clickHandler={this.clickHandler} />
        <Button buttonValue="x" />

        {/* Row 3 */}
        <Button buttonValue="4" clickHandler={this.clickHandler} />
        <Button buttonValue="5" clickHandler={this.clickHandler} />
        <Button buttonValue="6" clickHandler={this.clickHandler} />
        <Button buttonValue="-" />

        {/* Row 2 */}
        <Button buttonValue="1" clickHandler={this.clickHandler} />
        <Button buttonValue="2" clickHandler={this.clickHandler} />
        <Button buttonValue="3" clickHandler={this.clickHandler} />
        <Button buttonValue="+" />

        {/* Row 1 */}
        <Button buttonValue="0" wide clickHandler={this.clickHandler} />
        <Button buttonValue="," />
        <Button buttonValue="=" color="blue" />
      </div>
    );
  }
}
