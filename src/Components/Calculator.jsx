import React, { useState } from 'react';
import './Calculator.css';
import { FaArrowLeft } from 'react-icons/fa';

const Calculator = () => {
  const [result, setResult] = useState('');

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearHandler = () => {
    setResult('');
  };

  const calculateHandler = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const backHandler = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="page-wrapper">
      <div className="calculator">
        <h1>Calculator</h1>
        <input type="text" placeholder="0" id="inputBox" value={result} />
        <div className="button-grid">
          <div className="button-row">
            <button className="button" onClick={clearHandler}>C</button>
            <button className="button" onClick={clickHandler} value="(">(</button>
            <button className="button" onClick={clickHandler} value=")">)</button>
            <button className="button" onClick={clickHandler} value="/">/</button>
            <button className="button" onClick={backHandler}><FaArrowLeft /></button>
          </div>
          <div className="button-row">
            <button className="button" onClick={clickHandler} value="7">7</button>
            <button className="button" onClick={clickHandler} value="8">8</button>
            <button className="button" onClick={clickHandler} value="9">9</button>
            <button className="button" onClick={clickHandler} value="*">X</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={clickHandler} value="4">4</button>
            <button className="button" onClick={clickHandler} value="5">5</button>
            <button className="button" onClick={clickHandler} value="6">6</button>
            <button className="button" onClick={clickHandler} value="-">-</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={clickHandler} value="1">1</button>
            <button className="button" onClick={clickHandler} value="2">2</button>
            <button className="button" onClick={clickHandler} value="3">3</button>
            <button className="button" onClick={clickHandler} value="+">+</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={clickHandler} value="0">0</button>
            <button className="button" onClick={clickHandler} value=".">.</button>
            <button className="button" onClick={calculateHandler}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Calculator;
