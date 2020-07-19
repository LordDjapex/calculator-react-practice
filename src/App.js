import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {

  state = {
    result: 'Result',
    operatorAvability: false,
    readyToWriteFirstNumber: true,
    resultAvabile: false,
    number1: null,
    number2: null
  }

  showInfo = () => {
    console.log('info')
  }

  numberClick = (e) => {
    let number = e.target.value
    if (this.state.resultAvabile) {
      this.state.result = ''
      this.state.resultAvabile = false;
    }
    if (this.state.result === 'Result' || this.state.result === '') {
      this.state.result = number;
    } else {
      let newValue = this.state.result + number
      this.state.result = newValue
    }
    document.querySelector('#result').innerHTML = this.state.result
  }

  equality = () => {
    try {
      let number2 = this.state.result.split(' ')[2]
      this.calculations(this.state.result.split(' ')[1])
    } catch(e) {
      console.log('Enter number 2')
    }
    
  }

  operatorClick = (e) => {
  
    if (!this.state.operatorAvability) {
      this.state.resultAvabile = false;
      let operator = e.target.value
      if (this.state.result === 'Result' || this.state.result === '') {
        this.state.operatorAvability = true;
        this.state.number1 = '0';
        let newResult = '0 ' + operator + ' ';
        this.state.result = newResult;
        document.querySelector('#result').innerHTML = this.state.result
      } else {
          this.state.operatorAvability = true;
          this.state.number1 = this.state.result;
          let newResult = this.state.result + ' ' + operator + ' ';
          this.state.result = newResult;
          document.querySelector('#result').innerHTML = this.state.result
      }
    } else {
      this.calculations(this.state.result.split(' ')[1])
      let operator = e.target.value
      this.state.operatorAvability = true;
      let newResult = this.state.result + ' ' + operator + ' ';
      this.state.result = newResult;
      document.querySelector('#result').innerHTML = this.state.result
      this.state.resultAvabile = false;
    }
  }

  calculations = (operator) => {
    this.state.operatorAvability = false;
      this.state.resultAvabile = true;
      let number2 = this.state.result.split(' ')[2]
      this.state.number2 = number2
      try {
        if (operator === '/') {
          let result = this.state.number1 / this.state.number2
          this.state.result = result
          document.querySelector('#result').innerHTML = this.state.result
          this.state.number1 = result
          this.state.number2 = null
        }
        else if (operator === '+') {
          let result = Number(this.state.number1) + Number(this.state.number2)
          this.state.result = result
          document.querySelector('#result').innerHTML = this.state.result
          this.state.number1 = result
          this.state.number2 = null
        }
        else if (operator === '-') {
          let result = this.state.number1 - this.state.number2
          this.state.result = result
          document.querySelector('#result').innerHTML = this.state.result
          this.state.number1 = result
          this.state.number2 = null
        } else if (operator === 'X') {
          let result = this.state.number1 * this.state.number2
          this.state.result = result
          document.querySelector('#result').innerHTML = this.state.result
          this.state.number1 = result
          this.state.number2 = null
        } 
      } catch(e) {
        console.log('Error while doing calculatins')
      }
  }

  render() {
  return (
    <>
      <div>
        <h1 id="result">{this.state.result}</h1>
      </div>
      <div>
        <button onClick={() => {this.state.result = ''; document.querySelector('#result').innerHTML = this.state.result; this.state.number1 = null; this.state.number2 = null; 
        this.state.readyToWriteFirstNumber = true}}>Clear</button>
        <button value="-" onClick={(e) => this.operatorClick(e)}>-</button>
        <button value="+" onClick={(e) => this.operatorClick(e)}>+</button>
      </div>
      <div>
        <button value='1' onClick={(e) => this.numberClick(e)}>1</button>
        <button value='2' onClick={(e) => this.numberClick(e)}>2</button>
        <button value='3' onClick={(e) => this.numberClick(e)}>3</button>
      </div>
      <div>
        <button value='4' onClick={(e) => this.numberClick(e)}>4</button>
        <button value='5' onClick={(e) => this.numberClick(e)}>5</button>
        <button value='6' onClick={(e) => this.numberClick(e)}>6</button>
      </div>
      <div>
        <button value='7' onClick={(e) => this.numberClick(e)}>7</button>
        <button value='8' onClick={(e) => this.numberClick(e)}>8</button>
        <button value='9' onClick={(e) => this.numberClick(e)}>9</button>
        <button value='0' onClick={(e) => this.numberClick(e)}>0</button>
      </div>
      <div>
        <button value="X" onClick={(e) => this.operatorClick(e)}>X</button>
        <button value="/" onClick={(e) => this.operatorClick(e)}>/</button>
        <button onClick={(e) => this.equality()}>=</button>
      </div>
    </>
  );
}
}

export default App;
