import React, { useState } from 'react';
const Counter = ({ onCountChange }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    if (count < 10) { 
      setCount(prevCount => prevCount + 1);
      onCountChange(count + 1);  
    }
  };
  const decrement = () => {
    if (count > 1) { 
      setCount(prevCount => prevCount - 1);
      onCountChange(count - 1);  
    }
  };
  return (
    <div>
      <button className="btn btn-success" onClick={increment}>+</button>
      <span>{count}</span>
      <button className="btn btn-danger" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
