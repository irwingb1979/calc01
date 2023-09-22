import './App.css';
import Button from './Components/Button';
import ButtonClear from './Components/ButtonClear';
import Screen from './Components/Screen';
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');
  const addInput = (val) => {
    setInput(input + val);
  }

  const calcResult = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert('Please insert a valid input')
    }
  }

  return (
    <div className="App">
      <div className="content-calc">
        <Screen input={ input }/>
        <div className="row">
          <Button handleClic={addInput}>1</Button>
          <Button handleClic={addInput}>2</Button>
          <Button handleClic={addInput}>3</Button>
          <Button handleClic={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClic={addInput}>4</Button>
          <Button handleClic={addInput}>5</Button>
          <Button handleClic={addInput}>6</Button>
          <Button handleClic={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClic={addInput}>7</Button>
          <Button handleClic={addInput}>8</Button>
          <Button handleClic={addInput}>9</Button>
          <Button handleClic={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClic={calcResult}>=</Button>
          <Button handleClic={addInput}>0</Button>
          <Button handleClic={addInput}>.</Button>
          <Button handleClic={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear handleClear={()=> setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
