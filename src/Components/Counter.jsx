import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [custom, setCustom] = useState('');

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  const setToCustom = () => {
    const num = parseInt(custom);
    if (!isNaN(num)) {
      setCount(num);
      setCustom('');
    }
  };

  return (
    <div className="counter-container">
      <div className="counter-display">
        {count}
      </div>

      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>

      {/* <div className="custom-input">
        <input
          type="number"
          placeholder="Set custom value"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
        <button onClick={setToCustom}>Set</button>
      </div> */}
    </div>
  );
};

export default Counter;
