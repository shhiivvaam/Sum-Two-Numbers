import './App.css';
import React, { useState } from 'react';

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setSum(result);
  }


  return (
    <div className="App">
      <h1>Sum Calculator</h1>
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={calculateSum}>Calculate Sum</button>
      {sum !== null && <p className="result">Sum: {sum}</p>}
    </div>
  );
}

export default App;
